<template>
  <nav-bar class="nav_bar">
    <template v-slot:center>
       <p>个人中心</p>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "ProfileNavBar",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
 .nav_bar{
   background-color: var(--main-color);
   font-weight: 500;
   font-size: 18px;
   color: #ffffff;
 }
</style>
