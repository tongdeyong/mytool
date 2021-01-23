<template>
  <div>
    <Sidebar />
    <AppMain />
  </div>
</template>

<script>
import AppMain from '@/layout/AppMain'
import Sidebar from '@/layout/Sidebar'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain
  }
}
</script>

<style scoped>

</style>
