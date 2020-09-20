<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)

export default {
  name:'Scroll',
  data(){
    return{
      scroll:null,
    }
  },
  props:{
    isPullUpLoad:{
      type:Boolean,
      default:false
    },
    whatProbeType:{
      type:Number,
      default:0
    },
    isPullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: this.isPullUpLoad,
        probeType:this.whatProbeType
    })
    // console.log(this.scroll)
    
    if (this.whatProbeType === 2 || this.whatProbeType === 3){
      this.scroll.on('scroll',(position) => {
        this.$emit('showBackTop',position)
        this.$emit('scrollPositon',position)
      })
    }
    
    if(this.isPullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('onPullingUp')
        })
    }
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    //刷新
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    finishLoad(){
      this.scroll && this.scroll.finishPullUp()
    } 
  }
}
</script>

<style scoped>
</style>