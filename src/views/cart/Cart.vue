<template>
  <div class="cart">
    <cart-nav-bar class="cart-nav"/>
    <cart-list></cart-list>
  </div>
</template>

<script>
  import CartNavBar from './childComp/CartNavBar'
  import CartList from './childComp/CartList'
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: "Cart",
    components:{
      CartNavBar,
      CartList,
      Scroll
    }
  }
</script>

<style scope>
  .cart-nav{
    background-color: var(--main-color);
    color: white;
    font-size: 17px;
  }
</style>
