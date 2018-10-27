<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div> 
</template>
<script>
export default {
    name:'HomeSwiper',
    data () {
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [
                {
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/e0/c99056cd01148902.jpg_750x200_8b93d0b5.jpg'
                },
                {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/7e/19b06067afac3402.jpg_750x200_f613313a.jpg'
                },
                {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/2d/0d7dc3400a50b502.jpg_750x200_4ca95dd4.jpg'
                }
            ]
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
