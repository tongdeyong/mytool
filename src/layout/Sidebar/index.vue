<template>
  <div class="leftSideBar" :class="{hideSideBar: leftSideBar.opened}">
    <LogoSideBar />
    <SideBarItem />
  </div>
</template>

<script>
import LogoSideBar from '@/layout/Sidebar/LogoSideBar'
import SideBarItem from '@/layout/Sidebar/SideBarItem'
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  components: { SideBarItem, LogoSideBar },
  computed: {
    ...mapGetters(['leftSideBar'])
  }
}
</script>

<style scoped>
.leftSideBar {
  transition: width 0.38s;
  width: 200px !important;
  background-color: #304156;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.hideSideBar {
  width: 64px !important;
}
</style>
