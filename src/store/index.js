import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useWorkplaceStore } from './modules/workplace'
import { useCategoryStore } from './modules/category'
import { useTaskStore } from './modules/task'
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

export { useWorkplaceStore, useCategoryStore, useTaskStore }
export default pinia
