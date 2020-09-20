<template>
  <div class="baseInfo">
    <div class="title">{{baseData.title}}</div>
    <div>
      <span class="price">{{baseData.price}}</span>
      <span class="oldPrice">{{baseData.oldPrice}}</span>
      <span :style="{background:baseData.discountBgColor}" class="discountDesc">{{baseData.discountDesc}}</span>
    </div>
    <div class="columns">
      <div v-for="(item, index) in baseData.columns" :key="index">
        {{item}}
      </div>
    </div>
    <div class="services" v-if="baseData.services">
      <div v-for="index in baseData.services.length - 1" :key="index">
        <img :src="baseData.services[index - 1].icon" alt="">
        <span> {{baseData.services[index - 1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      baseData:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .baseInfo {
  padding: 10px;
}
.baseInfo .title {
  /*font-weight: 700;*/
  font-size: 16px;
  color: #222;
  margin-bottom: 5px;
}
.baseInfo .price {
  color: #eb4868;
  font-size: 24px;
  padding-right: 5px;
}
.baseInfo .oldPrice {
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
}
.baseInfo .discountDesc {
  position: relative;
  bottom: 5px;
  border-radius: 10px;
  font-size: 12px;
  color: #ffffff;
  padding: 4px 6px;
  margin-left: 5px;
  margin-bottom: 100px;
}
.baseInfo .columns {
  display: flex;
  padding-top: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #f2f5f8;
  color: #999;
  font-size: 14px;
  justify-content: space-between;
}
.baseInfo .services {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 50px;
}
.baseInfo .services img {
  width: 12px;
  height: 12px;
}
.baseInfo .services span {
  color: #333;
  font-size: 14px;
}
</style>
