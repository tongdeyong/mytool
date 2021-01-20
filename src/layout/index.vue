<template>
  <div class="leftSideBar">
    <LogoSideBar />
    <SideBarItem />
  </div>
</template>

<script>
import LogoSideBar from '@/layout/logoSideBar'
import SideBarItem from '@/layout/sideBarItem'
export default {
  name: 'Layout',
  components: {
    LogoSideBar,
    SideBarItem
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
 .leftSideBar {
   transition: width 0.28s;
   width: 200px !important;
   background-color: #304156;
   height: 100%;
   position: fixed;
   font-size: 0;
   top: 0;
   bottom: 0;
   left: 0;
   z-index: 1001;
   overflow: hidden;
 }
</style>
