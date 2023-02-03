import { defineStore } from 'pinia'
import { useGroupStore } from '../group'
export const useCategoryStore = defineStore('categories', {
  state: () => ({
    /** @type { idCount:number } */
    idCount: 2,
    /** @type {{ name: string, icon: string, isActive: boolean }[]} */
    categories: [
      { id: 1, name: 'Totris', icon: '🎯', isActive: 'true' },
      { id: 2, name: 'todoServer', icon: '🗃️', isActive: 'false' },
    ],
    /** @type { activeCategory: number } */
    activeCategoryId: 1,
  }),
  persist: {
    key: 'my-categories-key',
  },
  getters: {
    groupsInfo() {
      return this.groups
    },
  },
  actions: {
    switchCategory(categoryId) {
      this.categories.forEach((c) => {
        c.isActive = c.id === categoryId
      })

      this.activeCategoryId = categoryId

      const groupStore = useGroupStore()
      groupStore.switchToCategory(categoryId)
    },
  },
})
