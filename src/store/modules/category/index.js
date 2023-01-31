import { defineStore } from 'pinia'
import { getCategories } from '~/api/category'
export const useCategoryStore = defineStore('categories', {
  state: () => ({
    /** @type {{ name: string, icon: string, isActive: boolean }[]} */
    categories: [],
  }),
  getters: {
    groupsInfo() {
      return this.groups
    },
  },
  actions: {
    init() {
      const data = getCategories()
      data.forEach((item) => {
        if (item.isActive === 'true')
          item.isActive = true
        else
          item.isActive = false
      })
      this.categories = [...data]
    },

    switchGroup(category) {
      this.categories.forEach((c) => {
        c.isActive = c.name === category.name
      })
    },
  },
})
