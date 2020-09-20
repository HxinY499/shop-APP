<template>
  <div class="goods">
    <goods-item v-for="(item, index) in goods" :key="index" :goodsItem='item'/>   
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name:'Goods',
  components:{
    GoodsItem
  },
  props:{
    goods:{
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content:flex-start;
}
</style>