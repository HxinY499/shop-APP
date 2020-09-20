<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @navClick='navClick' ref="nav"/>
    <scroll class="content" ref="scroll"
            @showBackTop='showBackTop'
            @scrollPositon='scrollPositon'
            :whatProbeType="3">
      <!-- 轮播图 -->
      <detail-swiper :topImg='topImg'></detail-swiper>
      <!-- 商品基本信息 -->
      <detail-base-info :base-data="baseData"/>
      <!--店铺信息-->
      <detail-shop-info :shop-info="shopInfo"/>
      <!--穿着效果-->
      <detail-dress-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
      <!--尺码标准-->
      <detail-item-params :item-params="itemParams" ref="itemParams"/>
      <!--评论信息-->
      <detail-comment-info :rate="rate" ref="comment"/>
      <!--推荐商品-->
      <div>
        <p class="recommend">推荐商品</p>
        <goods :goods="recommended" ref="recommend"/>
      </div>
    </scroll>
    <back-top class="back-top" @click.native='backTop' v-show="isShowBack"/>
    <detail-bottom-bar @addCart='addCart'/>
  </div>
</template>

<script>
// 子组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailDressInfo from './childComps/DetaiDressInfo'
import DetailItemParams from './childComps/DetailItemParams'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

// 公共组件
import Scroll from 'components/common/scroll/Scroll'
import Goods from 'components/content/goodslist/Goods'

import {debounce} from "common/utils.js"
import {backTopMixin} from "common/mixin.js"

import {getDetailData, GetDeatilBaseData, GetDetailShopInfo, GetItemParams, getRecommentdData} from 'network/detail.js'
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailDressInfo,
    DetailItemParams,
    DetailCommentInfo,
    Goods,
    DetailBottomBar
  },
  mixins:[backTopMixin],
  data(){
    return{
      iid:null,
      topImg:[],
      baseData: {},
      shopInfo:{},
      detailInfo:{},
      itemParams:{},
      rate:{},
      recommended:[],
      offsetTopY:[],
      currentIndex:0,
      DressImgload:null,
      offsetTopYDebounce:null
    }
  },
  created(){
    this.iid = this.$route.params.iid
    getDetailData(this.iid).then(res => {
      const data = res.result
      this.topImg = data.itemInfo.topImages
      this.baseData = new GetDeatilBaseData(data.itemInfo,data.columns,data.shopInfo)
      this.shopInfo = new GetDetailShopInfo(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.itemParams = data.itemParams ? new GetItemParams(data.itemParams):{}
      this.rate = data.rate.list?data.rate.list[0]:{}
    })
    //获取推荐信息
    getRecommentdData().then(res=>{
      this.recommended = res.data.list
    })

    this.offsetTopYDebounce = debounce(() => {
      this.offsetTopY = []
      this.offsetTopY.push(0)
      this.offsetTopY.push(this.$refs.itemParams.$el.offsetTop)
      this.offsetTopY.push(this.$refs.comment.$el.offsetTop)
      this.offsetTopY.push(this.$refs.recommend.$el.offsetTop)
    }, 100)
  },
  mounted(){
    // 监听图片加载
    const refresh = debounce(this.$refs.scroll.refresh,10)
    this.$bus.$on('detailImgLoad', () => {
      refresh()
    })
  },
  methods:{
    imgLoad(){
      this.DressImgload = debounce(this.$refs.scroll.refresh,100)
      this.DressImgload()
      this.offsetTopYDebounce()
    },
    navClick(index){
      this.$refs.scroll.scrollTo(0, -this.offsetTopY[index], 500)
    },
    scrollPositon(position){
      const positionY = -position.y
      if(positionY < this.offsetTopY[1]){
        this.$refs.nav.currentIndex = 0
      }else if(positionY === this.offsetTopY[1] || (positionY > this.offsetTopY[1] && positionY < this.offsetTopY[2])){
        this.$refs.nav.currentIndex = 1
      }else if(positionY === this.offsetTopY[2] || (positionY > this.offsetTopY[2] && positionY < this.offsetTopY[3])){
        this.$refs.nav.currentIndex = 2
      }else if(positionY === this.offsetTopY[3] || positionY > this.offsetTopY[3]){
        this.$refs.nav.currentIndex = 3
      }
    },
    addCart(){
      console.log("已加入")
      const cartListData = {
        title: this.baseData.title,
        desc: this.baseData.desc,
        iid: this.iid,
        image: this.topImg[0],
        price: this.baseData.lowNowPrice
      }
      this.$store.dispatch('addCart',cartListData)
      // console.log(this.$store.state.cartList)
    }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 99;
  background-color: white;
  height: 100vh;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 43px;
  right: 0;
  left: 0;
  bottom: 54px;
  background-color: white;
}
.nav-bar{
  position: relative;
  z-index: 9;
  top: 0;
  background-color: white;
}
.back-top{
  position: fixed;
  bottom:110px;
  right:30px;
}
</style>