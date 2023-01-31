import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useWorkplaceStore } from './modules/workplace'
import { useCategoryStore } from './modules/category'
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

export { useWorkplaceStore, useCategoryStore }
export default pinia
