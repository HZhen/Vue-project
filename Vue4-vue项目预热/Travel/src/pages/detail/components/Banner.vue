<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img 
        class="banner-img" 
        src="//img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_600x330_3b0fdac5.jpg" 
        alt=""
      >
      <div class="banner-info">
        <div class="banner-title">
          成都海昌极地海洋公园(AAAA景区)
        </div>
        <div class="banner-num">
          <i class="iconfont banner-icon">&#xe64a;</i>39
        </div>
      </div>
    </div>
    <common-gallary 
      :imgs="imgs" 
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DatailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs:['http://img1.qunarzz.com/sight/p0/1612/ca/cae19b693b872602a3.img.jpg_350x240_8c2c93d2.jpg',
        'http://img1.qunarzz.com/sight/p0/1612/4c/4c8c800abd2e8aafa3.img.jpg_350x240_360ff6aa.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true;
    },
    handleGallaryClose () {
      this.showGallary = false;
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    position relative
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex 1
        font-size .28rem
        padding 0 .2rem
      .banner-num
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
          margin-right .1rem
</style>

