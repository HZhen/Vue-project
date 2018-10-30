<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'

export default {
  name:'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  data () {
    return {
      
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
