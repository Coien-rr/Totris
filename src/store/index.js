import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useWorkplaceStore } from './modules/workplace'
import { useCategoryStore } from './modules/category'
import { useGroupStore } from './modules/group'
import { useTaskStore } from './modules/task'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

export { useWorkplaceStore, useCategoryStore, useGroupStore, useTaskStore }
export default pinia
