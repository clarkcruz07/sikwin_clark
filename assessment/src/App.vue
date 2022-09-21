<template>
  <div id="app">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from './components/main/Header'
import Body from './components/main/Body'
import Footer from './components/main/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #8b8780;
  background: #1a1a1a;
/*min-height: 100vh;*/
  width: 100%;
  height: 100%;
  padding-bottom: 100px
}
.games-list .img-wrapper {
    padding: 5px 0;
}
</style>
