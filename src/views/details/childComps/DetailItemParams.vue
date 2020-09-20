<template>
  <div class="itemParams" v-if="itemParams">
    <div>
      <p>参数信息</p>
      <table class="table_rule" v-for="(item, index) in itemParams.rule" :key="index">
        <tr v-for="(item1, index) in item" class="rule" :key="index">
          <td v-for="(item2, index) in item1" :key="index">{{item2}}</td>
        </tr>
      </table>
      <table style="width: 100%;">
        <tr v-for="(item, index) in itemParams.info" class="ruleinfo" :key="index">
          <td class="ruleinfo_key">{{item.key}}</td>
          <td class="ruleinfo_value">{{item.value}}</td>
        </tr>
      </table>
      <img :src="itemParams.image" alt="" style="width: 100%">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailItemParams",
    props:{
      itemParams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .itemParams {
  padding: 10px;
  width: 100%;
}
.itemParams .table_rule {
  width: 100%;
}
.itemParams .table_rule .rule {
  display: flex;
  width: 100%;
  /*flex-wrap: wrap;*/
  font-size: 14px;
  text-align: left;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.itemParams .table_rule .rule td {
  padding: 10px 0;
  width: 25%;
}
.itemParams .ruleinfo {
  display: flex;
  width: 100%;
  text-align: left;
}
.itemParams .ruleinfo .ruleinfo_key {
  width: 95px;
}
.itemParams .ruleinfo td {
  padding: 10px 0;
  font-size: 14px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.itemParams .ruleinfo .ruleinfo_value {
  flex: 1;
  color: #eb4868;
}
</style>
