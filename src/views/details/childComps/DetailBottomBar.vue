<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "DetailBottomBar",
    methods:{
      addCart(){
        this.$emit('addCart')
      }
    },
  }
</script>

<style scoped>
.bottom-bar{
  height: 58px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: white;
  z-index: 9999;
  display: flex;
  text-align: center;
}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item>div{
  flex: 1;
}
.bar-left .text{
  font-size: 13px;
}
.bar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin:10px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service{
  background-position: 0 -54px;
}
.bar-left .shop{
  background-position: 0 -98px;
}
.bar-right{
  font-size: 15px;
  color: white;
  line-height: 58px;
}
.bar-right .cart{
  background-color: #f7eb85;
  color: #333;
}
.bar-right .buy{
  background-color: var(--main-color);
}

</style>
