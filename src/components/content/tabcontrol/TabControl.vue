<template>
  <div class='tab-control'>
    <div v-for="(item, index) in title" :key="item" 
         class="item"
         :class="{active: currentIndex === index}"
         @click="itemClick(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  data(){
    return{
      currentIndex: 0
    }
  },
  props:{
  title:{
    type:Array,
    default(){
      return []
    } 
  }
},
methods:{
  itemClick(index){
    this.currentIndex = index
    this.$emit('tabClick', index)
  }
}
}
</script>

<style scoped>
.tab-control{
  height:40px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding-bottom: 5px;
  z-index: 9;
}
.item span{
  padding:2px;
}

.active{
  color: var(--main-color);
}

.active span{
  border-bottom: 3px solid var(--main-color);
}
</style>