<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
  import TheHeader from './components/layout/TheHeader.vue';

  export default{
    components:{
      TheHeader
    }
  }
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
} */

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@200;500&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
