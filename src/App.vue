<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import vMenu from './components/menu/menu.vue'
import vHeader from './components/header/header.vue'
export default {
  name: 'app',
  components: {
    vMenu, vHeader
  }
}
</script>

<style>
body{
  margin: 0 !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 50px;

}
</style>
