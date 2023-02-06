import { defineStore } from 'pinia'
import { useGroupStore } from '../group'
export const useCategoryStore = defineStore('categories', {
  state: () => ({
    /** @type { idCount:number } */
    idCount: 7,
    /** @type {{ name: string, icon: string, isActive: boolean }[]} */
    categories: [],
    /** @type { activeCategory: number } */
    activeCategoryId: 1,
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

      this.activeCategoryId = categoryId

      const groupStore = useGroupStore()
      groupStore.switchToCategory(categoryId)
    },

    async initCategories(categoriesData) {
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
    },
  },
})
