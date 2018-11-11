<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont back-icon">&#xe624;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
      输入城市/经典/游玩主题
    </div>
    <router-link to='/city'>
       <div class="header-right">
        {{this.city}}
        <i class="iconfont arrow-icon">&#xe737;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
   ...mapState(['city']),
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-left
      width .64rem 
      float left
      .back-icon
        display block
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-left .2rem 
      margin-top .12rem
      padding-left .2rem
      background #ffffff
      border-radius .1rem
      color #ccc
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #ffffff
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
