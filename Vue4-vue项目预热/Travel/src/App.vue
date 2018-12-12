<template>
  <div id="app">
    <keep-alive exclude="Datail">
      <router-view/>
      <!-- 显示的是当前路由地址所对应的内容 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
