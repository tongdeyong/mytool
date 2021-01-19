<template>
  <div class="app-wrapper">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    height: 100%;
  }
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
