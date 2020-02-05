<template>
  <div id="app">
    <stats/>
  </div>
</template>

<script>
import stats from './components/stats.vue' 

export default {     // exportation de "app" et de tout ses components 
  name: 'app',
  components: {
    stats
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
</style>
