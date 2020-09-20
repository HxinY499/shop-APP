<template>
  <div class="goods-item" @click="goodsItemDetail">
    <img v-lazy="showImg" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsItem',
  props:{
    goodsItem:{
      type:Object,
      default:{}
    }
  },
  computed:{
    showImg(){
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods:{
    imgLoad(){
      if(this.$route.path.indexOf('/home') === 0){
        this.$bus.$emit('homeImgLoad')
      }else if(this.$route.path.indexOf('/detail') === 0){
        this.$bus.$emit('detailImgLoad')
      }else if(this.$route.path.indexOf('/category') === 0){
        this.$bus.$emit('categoryImgLoad')
      }
    },
    goodsItemDetail(){
      if(this.goodsItem.iid){
        this.$router.push('/detail/' + this.goodsItem.iid)
      } 
    }
  }
}
</script>

<style scoped>
.goods-item{
  position: relative;
  width: 45%;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 12px;
  text-align: center;
  margin-bottom: 8px;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-info span{
  margin-right: 18px;
}
.goods-info .price{
  color: var(--main-color);
}
.goods-info .cfav{
  position: relative;
}
.goods-info .cfav::before{
  content: '';
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  position: absolute;
  left: -15px;
  top: -1px;
  width: 13px;
  height: 13px;
}
</style>