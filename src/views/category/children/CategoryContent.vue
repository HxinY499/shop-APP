<template>
  <div class="content" v-if="subCategory">
    <div v-for="(item,index) in subCategory" class="content_item" :key="index" >
      <img :src="item.image" alt="" @load="imgLoad">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryContent",
    props:{
      subCategory:{
        type:Array,
        default(){
          return []
        }
      },
      currentIndex:0
    },
    data(){
      return {
       newSubCategory:[],
      }
    },
    methods:{
      imgLoad(){
        this.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>
.content {
  flex-wrap: wrap;
  display: flex;
}
.content .content_item {
  width: 25%;
  margin: 10px;
  text-align: center;
}
.content .content_item img {
  width: 100%;
}
.content .content_item p {
  margin-top: 5px;
  font-size: 14px;
}
</style>
