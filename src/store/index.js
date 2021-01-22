import { createStore } from 'vuex'
import getters from '@/store/getters'

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((array, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  array[moduleName] = value.default
  return array
}, {})

const store = createStore({
  modules: modules,
  getters: getters
})

export default store
