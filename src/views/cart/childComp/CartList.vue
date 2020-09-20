<template>
  <div class="cart_list">
    <scroll class="wrapper" ref="scroll">
      <ul>
        <li v-for="item in $store.state.cartList" :key="item.iid" class="item">
          <div class="checkbox" :class="{item_active:item.isCheck}" @click="checkoutClick(item)"></div>
          <div class="list_item">           
            <div class="image">
              <img :src="item.image" alt="">
            </div>
            <div class="content">
              <p class="ellispsis title">{{item.title}}</p>
              <p class="ellispsis desc">{{item.desc}}</p>
              <div class="countPrice">
                <span class="price">￥{{item.price}}</span>
                <span class="count">x{{item.count}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </scroll>
    <div class="calcItem">
      <div class="checkbox">
        <div :class="{item_active:allChecked}" @click="checkAllClick"></div>
        <span>全选</span>
      </div>
      <div class="calc">合计：<span>￥{{getAllPrice}}</span>元</div>
      <button class="button">提交订单({{$store.getters.getCartLength}})</button>
    </div>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "CartList",
    components:{
      Scroll
    },
    data(){
      return {
        allChecked:true,
        storeData : this.$store.state.cartList
      }
    },
    computed:{
      getAllPrice(){
        return (this.$store.getters.getCartCountPrice).toFixed(2)
      }
    },
    created(){
      this.allChecked = this.$store.state.cartList.length === 0 ? false : true
    },
    updated(){
      let result = this.storeData.filter(item=>{
          return item.isCheck === true
        })
        if(result.length === this.storeData.length){
          this.allChecked = true
        }else {
          this.allChecked = false
        }
    },
    methods:{
      checkoutClick(item){
        item.isCheck= !item.isCheck
      },
      checkAllClick(){
        if(!this.allChecked){
          this.$store.commit('isCheckTrue')
          this.allChecked = !this.allChecked
        }else {
          this.$store.commit('isCheckFalse')
          this.allChecked = !this.allChecked
        }
      }
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
.cart_list {
  padding-top: 44px;
  width: 100%;
  overflow: hidden;
  height: calc(100% - 54px);
}
.cart_list .wrapper {
  position: absolute;
  right: 0;
  left: 0;
  top: 44px;
  bottom: 104px;
  overflow: hidden;
  padding: 0 10px;
}
.cart_list .wrapper .item{
  display: flex;
  justify-content: space-between;
}
.cart_list .wrapper .checkbox {
  border: 1px solid gray;
  border-radius: 50%;
  margin-top: 50px;
  margin-right: 10px;
  height: 15px;
  width: 15px;
}
.cart_list .wrapper .list_item {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 92%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.cart_list .wrapper .list_item .image {
  width: 80px;
}
.cart_list .wrapper .list_item .image img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}
.cart_list .wrapper .list_item .content {
  position: relative;
  flex: 1;
  width: 70%;
  padding-left: 15px;
}
.cart_list .wrapper .list_item .content .title {
  color: #333;
  font-size: 16px;
  padding-bottom: 15px;
}
.cart_list .wrapper .list_item .content .desc {
  color: #666;
  font-size: 14px;
}
.cart_list .wrapper .list_item .content .countPrice {
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: -25px;
}
.cart_list .wrapper .list_item .content .countPrice .price {
  color: var(--main-color);
  font-size: 18px;
}
.cart_list .wrapper .list_item .content .countPrice .count {
  font-size: 18px;
  color: #333333;
  padding-right: 10px;
}
.cart_list .ellispsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cart_list .calcItem {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  z-index: 9;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #cccc;
  border-bottom: 1px solid #cccccc;
}
.cart_list .calcItem .checkbox {
  padding-left: 10px;
  font-size: 15px;

}
.cart_list .calcItem .checkbox div{
  float: left;
  border: 1px solid gray;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  margin-right: 5px;
  position: relative;
  top: -2px;
}
.cart_list .calcItem .checkbox span{
    position: relative;
  top: -2px;
}
.cart_list .calcItem .calc {
  font-size: 15px;
  color: #333333;
  position: relative;
  top: -2px;
}
.cart_list .calcItem .calc span {
  color: var(--main-color);
  font-weight: 700;
  padding-right: 5px;
}
.cart_list .calcItem .button {
  border: none;
  background-color: var(--main-color);
  padding: 15px 15px;
  overflow: hidden;
  color: #eeeeee;
}
.cart_list .wrapper .item_active,
.cart_list .calcItem .checkbox div.item_active{
  border-color: var(--main-color);
  background-color: var(--main-color);
}

</style>
