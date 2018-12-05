<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div> 
</template>

<script>
export default {
    name:'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
          swiperOption:{
            pagination: '.swiper-pagination',
            loop: true,
            autoplay: 3000,
            speed: 1000,
          }
        }
    },
    computed: {
      showSwiper () {
        return this.list.length
      }
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #ffffff
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 26.66%
        background #eeeeee
        // height 31.25vw (浏览器有差异，不建议)
        .swiper-img
            width 100% 
</style>
