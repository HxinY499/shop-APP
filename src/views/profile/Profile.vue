<template>
  <div>
    <profile-nav-bar/>
    <login/>
    <money/>
    <profile-list/>
  </div>
</template>

<script>
  import ProfileNavBar from "./childComp/ProfileNavBar";
  import Login from "./childComp/Login";
  import Money from "./childComp/Money";
  import ProfileList from "./childComp/ProfileList";
  export default {
    name: "Profile",
    components:{
      ProfileNavBar,
      Login,
      Money,
      ProfileList
    }
  }
</script>

<style scoped>

</style>
