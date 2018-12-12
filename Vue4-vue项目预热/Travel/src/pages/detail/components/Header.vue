<template>
  <div>
    <router-link 
      tag='div' 
      to="/" 
      class="header-abs"
      v-show="showAbs"
    > 
      <i class="iconfont header-abs-back">&#xe624;</i>
    </router-link>
    <div 
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to='/'>
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll',this.handleScroll)
  },
  // 页面被隐藏或者页面被替换成新的组件时触发的
  unmounted () {
    window.removeEventListener('scroll',this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if(top > 60 ) {
        let opacity = top /140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, .6)
    .header-abs-back
      color #ffffff
      font-size .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    z-index 10
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #ffffff
</style>

