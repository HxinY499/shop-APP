<template>
  <nav-bar class="detail-nav">
    <div slot="left" class="back" @click="leftClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="center">
      <div :class="{active:currentIndex === index}" 
            v-for="(item, index) in titles" :key="index"
            @click='centerClick(index)'>
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods:{
    centerClick(index){
      this.currentIndex = index
      this.$emit("navClick", index)
    },
    leftClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
  font-size: 16px;
  justify-content: space-around;
}
.active{
  color: var(--main-color);
}
.back{
  text-align: center;
  height: 44px;
  line-height: 51px;
}
.detail-nav{
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, .1);
}
</style>