<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'PingFang-SC-Bold', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a,
button,
input,
optgroup,
select,
textarea {
  /*去掉a、input和button点击时的蓝色外边框和灰色半透明背景*/
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
</style>
