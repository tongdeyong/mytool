<template>
  <div class="app-main" :class="{hideSideBar: leftSideBar.opened}">
    <Navbar />
    <div>内容显示区</div>
  </div>
</template>

<script>
import Navbar from '@/layout/Navbar/index'
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  components: { Navbar },
  computed: {
    ...mapGetters(['leftSideBar'])
  }
}
</script>

<style scoped>
  .app-main {
    transition: margin-left 0.38s;
    margin-left: 200px;
  }
  .hideSideBar {
    margin-left: 64px;
  }
</style>
