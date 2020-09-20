<template>
  <nav-bar>
    <div slot="left" class="back" @click="leftClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center">购物车({{$store.getters.getCartLength}})</div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    name: "CartNavBar",
    components:{
      NavBar
    },
    methods:{
      leftClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
.back{
  text-align: center;
  height: 44px;
  line-height: 51px;
}
</style>
