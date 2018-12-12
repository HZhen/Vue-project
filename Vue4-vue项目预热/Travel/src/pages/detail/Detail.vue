<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg = "bannerImg"
      :bannerImgs ="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Datail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  mounted () {
    this.getDetailInfo ()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json',{
        params: {
          id: this.$route.params.id
        }
      }).then(this.handeGetDataSucc)
    },
    handeGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.content{
  height 50rem
}
</style>

