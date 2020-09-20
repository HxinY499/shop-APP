<template>
  <div>
    <swiper class='detail-swiper'>
      <swiper-item v-for="(item, index) in topImg" :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
  name:"DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImg:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style scoped>
.detail-swiper{
  height: 400px;
  overflow: hidden;
}
</style>