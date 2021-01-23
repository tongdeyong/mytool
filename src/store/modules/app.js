const state = {
  leftSideBar: {
    opened: false
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.leftSideBar.opened = !state.leftSideBar.opened
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
