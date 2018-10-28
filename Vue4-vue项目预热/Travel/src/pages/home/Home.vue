<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  data () {
    return {
      
    }
  },
  computed: {
    
  },
  created () {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
 
</style>
