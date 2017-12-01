<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {margin:0 ; padding: 0}
ul li {
  list-style: none
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #333;
  font-size: 14px;
  line-height: 1.5em; 
  width: 1160px;
  margin: 0 auto;   
}
</style>
