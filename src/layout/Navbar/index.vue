<template>
  <div class="navbar">
    <Hamburger />
  </div>
</template>

<script>
import Hamburger from '@/layout/Navbar/Hamburger'
export default {
  name: 'Navbar',
  components: { Hamburger }
}
</script>

<style scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,0.08);
}

</style>
