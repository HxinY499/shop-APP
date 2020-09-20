<template>
  <div class="category">
    <category-nav-bar/>
    <category-slide :category-name="categoryName" @slideItemClick="slideItemClick" />
    <scroll class="scroll_height" ref="scroll" :whatProbeType="3" :isPullUpLoad='true'>
      <category-content :sub-category="subCategory[currentIndex]" ref="content" @imgLoad="imgLoad"/>
      <tab-control :titles="titles" @itemClick="itemClick"/>
      <goods :goods="categoryDetailList"/>
    </scroll>
  </div>
</template>

<script>
  import CategoryNavBar from "./children/CategoryNavBar";
  import CategorySlide from "./children/CategorySlide";
  import CategoryContent from "./children/CategoryContent";
  import {getCategory,getSubcategory,getCategoryDetail} from 'network/category'
  import {debounce} from "common/utils.js"
  import Scroll from "components/common/scroll/Scroll";
  import TabControl from "components/content/tabcontrol/TabControl";
  import Goods from "components/content/goodslist/Goods";
  export default {
    name: "Category" ,
    components:{
      CategoryNavBar,
      CategorySlide,
      CategoryContent,
      Scroll,
      TabControl,
      Goods
    },
    data(){
      return {
        categoryName:[],
        subCategory:[],
        currentIndex:0,
        titles:['流行','新款','精选'],
        categoryDetailList: []
      }
    },
    created() {
      this.getCategoryAllData()
    },
    mounted(){
      // 监听图片加载
      const refresh = debounce(this.$refs.scroll.refresh,10)
      this.$bus.$on('categoryImgLoad', () => {
        console.log("12316541")
        refresh()
      })
    },
    methods:{
      getCategoryAllData(){
        getCategory().then(res=>{
          this.categoryName = res.data.category.list
          this.getSubcategory(this.categoryName[this.currentIndex].maitKey,this.currentIndex)
          this.getCategoryDetail(this.categoryName[this.currentIndex].miniWallkey,'pop')
        })

      },
      slideItemClick({maitKey,index}){
        this.currentIndex = index
        this.getSubcategory(maitKey,this.currentIndex)
        this.getCategoryDetail(this.categoryName[this.currentIndex].miniWallkey,'pop')
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      getSubcategory(maitKey,index){
        getSubcategory(maitKey).then(res=>{
          this.subCategory[index] = res.data.list
          // 获取完数据让组件强制刷新了
          this.$forceUpdate();
        })
      },
      getCategoryDetail(miniWallkey,type){
        getCategoryDetail(miniWallkey,type).then(res=>{
          this.categoryDetailList = res
        })
      },
      imgLoad(){
        const refresh = debounce(this.$refs.scroll.refresh,10)
        refresh()
      },
      itemClick(index){
        const titles = ['pop','new','sell']
        this.getCategoryDetail(this.categoryName[this.currentIndex].miniWallkey,titles[index])
      }
    }
  }
</script>

<style scoped>
.category {
  position: relative;
  height: 100vh;
}
.category .scroll_height {
  position: absolute;
  top: 44px;
  left: 100px;
  right: 0;
  bottom: 50px;
  overflow: hidden;
}
</style>
