<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: 'HomeSwiper',
    components:{
      Swiper,
      SwiperItem
    },
    data(){
      return{
        isLoad:false
      }
    },
    props:{
      banners:{
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      imgLoad(){
        if(!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style>
</style>