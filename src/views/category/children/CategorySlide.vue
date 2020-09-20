<template>
    <scroll class="slide" ref="scroll" v-show="newCategoryName">
      <template>
        <div v-for="(item,index) in newCategoryName" :key="index"
              class="slide_item" 
              @click="itemClick(index,item.maitKey)" 
              :class="{active:currentIndex === index}">
          {{item.title}}
        </div>
      </template>
    </scroll>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "CategorySlide" ,
    props:{
      categoryName:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0,
        newCategoryName:  []
      }
    },
    methods:{
      itemClick(index,maitKey){
        this.currentIndex = index
        const obj = {
          maitKey,
          index
        }
        this.$emit('slideItemClick',obj)
      }
    },
    components:{
      Scroll
    },
    watch:{
      categoryName(value,i){
        this.newCategoryName = value
        this.newCategoryName ? this.$nextTick(()=>{
              this.$refs.scroll.refresh()
        }) : ''
      }
    }
  }
</script>

<style scoped>
.slide {
  display: flex;
  flex-wrap: nowrap;
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 50px;
  width: 100px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  overflow: hidden;
}
.slide .slide_item {
  width: 100px;
  font-size: 14px;
  height: 45px;
  line-height: 45px;
  color: #666;
  background-color: #eef5eebf;
}
.slide .active {
  font-weight: 700;
  color: var(--main-color);
  border-left: 3px solid var(--main-color);
  background-color: #fff;
}
</style>
