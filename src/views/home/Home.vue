<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">mall</div></nav-bar>
    <tab-control :title="['流行','新款','精选']" class='tabControl1' ref="tabControl1" 
                @tabClick='tabClick'
                v-show="istabControlFix"/>
    <scroll class="scroll" ref="scroll" 
            :whatProbeType="3" :isPullUpLoad='true' 
            @scrollPositon="scrollPositon"
            @showBackTop='showBackTop'
            @onPullingUp='loadMore'>
      <home-swiper :banners="banners" @swiperImgLoad='swiperImgLoad'/>
      <recommend-view :recommends="recommends"></recommend-view>  
      <feature-view/> 
      <tab-control :title="['流行','新款','精选']" ref="tabControl" @tabClick='tabClick'/>
      <goods :goods="goods[currentType].list"/>
    </scroll>
    <back-top @click.native='backTop' v-show="isShowBack"/>
  </div>
  
</template>

<script>
  // 子组件
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  // 公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import Goods from 'components/content/goodslist/Goods'
  import Scroll from 'components/common/scroll/Scroll'

  // 网络请求
  import {getHomeMutilData, getHomeGoodsData} from 'network/home.js'

  import {debounce} from "common/utils.js"
  import {backTopMixin} from "common/mixin.js"

  export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      Goods,
      Scroll
    },
    mixins:[backTopMixin],
    data(){
      return {
        banners: [],
        recommends: [],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        tabControlOffsetTop:0,
        istabControlFix:false
      }
    },
    created(){
      this.getHomeMutilData(),
      this.getHomeGoodsData('pop'),
      this.getHomeGoodsData('new'),
      this.getHomeGoodsData('sell')   
    },

    mounted(){
      // 监听图片加载
      const refresh = debounce(this.$refs.scroll.refresh,10)
      this.$bus.$on('homeImgLoad', () => {
        refresh()
      })
    },
    methods:{
      /**
       * 网络请求
       *  */ 
      getHomeMutilData(){
        getHomeMutilData().then(res => {
          // console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        }).catch(err=>{
          console.log(err)
        })
      },
      getHomeGoodsData(type){
        let page = this.goods[type].page + 1        
        getHomeGoodsData(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          // 完成下拉加载
          this.$refs.scroll.finishLoad()
        })
      },
      
      /**
       * 事件监听
       *  */ 
      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
          this.currentType = 'sell'
          break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl.currentIndex = index
      },

      // 监听滚动位置
      scrollPositon(position){
        this.istabControlFix = (-position.y) > this.tabControlOffsetTop? true : false
      },
      // 上拉加载更多
      loadMore(){
        this.getHomeGoodsData(this.currentType)
      },
      
      // 获取tabControl的offsetTop
      swiperImgLoad(){
        this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
      },

      
    }
  }
</script>

<style scoped>
.home{
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--main-color);
  color: white;
  /* position: fixed;
  right: 0;
  left: 0;
  top: 0; */
  z-index: 9;
}
.tabControl1{
  position: relative;
  top: -1px;
  z-index: 99;
}
.scroll{
  overflow: hidden;
  position: absolute;
  top: 43px;
  right: 0;
  left: 0;
  bottom: 54px;
}
</style>