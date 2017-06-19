<template>
  <div id="app" class="container-fluid outerdiv">
    <app-header></app-header>
    <app-search></app-search>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
export default {
  name: 'app',
  components: {
    AppHeader,
    AppSearch,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.outerdiv {
  margin-top: 60px;
}
</style>
