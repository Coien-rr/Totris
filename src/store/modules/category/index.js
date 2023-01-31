import { defineStore } from 'pinia'
export const useCategoryStore = defineStore('categories', {
  state: () => ({
    /** @type {{ name: string, icon: string, isActive: boolean }[]} */
    categories: [],
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
    switchGroup(category) {
      this.categories.forEach((c) => {
        c.isActive = c.name === category.name
      })
    },
  },
})
