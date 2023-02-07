import { defineStore } from 'pinia'
import { useGroupStore } from '../group'
import { useWorkplaceStore } from '../workplace'
export const useCategoryStore = defineStore('categories', {
  state: () => ({
    /** @type { idCount:number } */
    idCount: 7,
    /** @type {{ name: string, icon: string, isActive: boolean }[]} */
    categories: [],
    /** @type { activeCategory: number } */
    activeCategoryIndex: 0,
  }),
  persist: {
    key: 'my-categories-key',
  },
  getters: {

  },
  actions: {
    clearCategories() {
      this.categories = []
    },

    addNewCategory() {
      this.categories.push({
        id: this.idCount++,
        name: 'Category',
        icon: '🌟',
        isActive: false,
      })
      return this.idCount
    },

    switchCategory(categoryId) {
      this.categories.forEach((c) => {
        c.isActive = c.id === categoryId
      })

      this.activeCategoryIndex = this.categories.findIndex(c => c.id === categoryId)
      const workplaceStore = useWorkplaceStore()
      workplaceStore.workplaces[workplaceStore.activeWorkplaceIndex].activeCategoryIndex = this.activeCategoryIndex
      const groupStore = useGroupStore()
      groupStore.switchToCategory(categoryId)
    },

    async initCategories(activeCategoryIndex, categoriesData) {
      this.activeCategoryIndex = activeCategoryIndex
      this.clearCategories()
      categoriesData.forEach((c) => {
        const category = {
          id: c.id,
          name: c.name,
          icon: c.icon,
          isActive: c.isActive,
        }
        this.categories.push(category)
      })

      // clear groups card
      const groupStore = useGroupStore()
      groupStore.clearGroups()

      if (this.activeCategoryIndex >= 0)
        this.switchCategory(this.categories[this.activeCategoryIndex].id)
    },
  },
})
