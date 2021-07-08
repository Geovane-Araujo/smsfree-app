<template>
  <div id="app">
    <router-view/>
    <Toast position="bottom-right" />
  </div>
</template>
<script>
import Toast from 'primevue/toast'
export default {
  components: {
    Toast
  }
}
</script>

<style lang="scss">
@import "./assets/style/app.scss";
body{
  @include scrollbars(10px, pink, #e7c8f0);
  animation: color 7s infinite;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  font-size: 12px;
}

@keyframes color {
  0% {
    background-color: #622774;
  }
  50% {
    background-color: #c21f7f;
  }
  100% {
    background-color: #962d6b;
  }
  50% {
    background-color: #c21f7f;
  }
  0% {
    background-color: #622774;
  }
}
</style>
