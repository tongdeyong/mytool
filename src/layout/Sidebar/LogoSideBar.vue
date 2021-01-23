<template>
  <div class="logoBar">
    <span v-if="!leftSideBar.opened">长标题</span>
    <span v-else>短标题</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LogoSideBar',
  computed: {
    ...mapGetters(['leftSideBar'])
  }
}
</script>

<style scoped>
.logoBar {
  width: 100%;
  height: 50px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  background-color: #2b2f3a;
}
</style>
