<template>
  <div id="app4">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app4',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app4 {
  margin-top: 100px;
}
</style>
