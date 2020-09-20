<template>
  <div class="dressInfo" v-if="detailInfo">
    <div class="desc">
      <div class="desc_before"></div>
      {{detailInfo.desc}}
      <div class="desc_after"></div>
    </div>
    <div v-for="(item, index) in detailInfo.detailImage" :key="index">
      <p>{{item.key}}</p>
      <div v-for="(item1, index) in item.list" class="desc_img" :key="index">
        <img :src="item1" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetaiDressInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        imgNum:0
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
.dressInfo {
  padding: 10px;
}
.dressInfo .desc {
  color: #666666;
  font-size: 14px;
  position: relative;
}
.dressInfo .desc .desc_before {
  width: 90px;
  height: 1px;
  position: relative;
  background-color: #666666;
  margin-bottom: 15px;
  margin-top: 10px;
}
.dressInfo .desc .desc_before::before {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
  background-color: black;
}
.dressInfo .desc .desc_after {
  position: relative;
  left: 75%;
  width: 90px;
  height: 1px;
  background-color: #666666;
  margin-bottom: 15px;
  margin-top: 10px;
}
.dressInfo .desc .desc_after::after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 5px;
  height: 5px;
  background-color: black;
}
.dressInfo .desc_img {
  padding-top: 10px;
}
.dressInfo .desc_img img {
  width: 100%;
}
</style>
