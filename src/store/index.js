import { createPinia } from 'pinia'
import { useWorkplaceStore } from './modules/workplace'
import { useCategoryStore } from './modules/category'
const pinia = createPinia()

export { useWorkplaceStore, useCategoryStore }
export default pinia
