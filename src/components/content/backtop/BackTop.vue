<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop',
}
</script>

<style scoped>
.backtop{
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 999;
  width: 45px;
  height: 45px;
}
.backtop img{
  width: 100%;
}
</style>