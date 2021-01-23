<template>
  <div class="hamburger" @click="toggleClick">
    <i v-if="leftSideBar.opened" class="el-icon-s-unfold" />
    <i v-else class="el-icon-s-fold" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Hamburger',
  computed: {
    ...mapGetters(['leftSideBar'])
  },
  methods: {
    toggleClick() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style scoped>
  i {
    font-size: 24px;
  }
  .hamburger {
    height: 50px;
    padding: 0 15px;
    line-height: 50px;
  }
</style>
