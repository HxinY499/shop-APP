<template>
  <div class='recommend'>
    <div class="recommend-item" v-for="recommends in recommends" :key="recommends.title">
      <a :href="recommends.link">
        <img :src="recommends.image" alt="">
      </a>
      <div>{{recommends.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendsView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    justify-content: space-around;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    text-align: center;
  }
  .recommend-item a{
    display: block;
    width: 70px;
    height: 70px;
    margin: 15px 0; 
  }
  .recommend-item img{
    width: 100%;
  }
</style>