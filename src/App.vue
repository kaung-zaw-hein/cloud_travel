<template>
  <MainNav></MainNav>
  <MainBody></MainBody>
  <Footer></Footer>
</template>

<script>

import Footer from './components/Footer'
import MainBody from './components/MainBody'
import MainNav from './components/MainNav'
export default {
  name: 'App',
  components: {
    Footer,
    MainBody,
    MainNav,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
