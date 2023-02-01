import { defineStore } from 'pinia'
export const useCategoryStore = defineStore('categories', {
  state: () => ({
    /** @type {{ name: string, icon: string, isActive: boolean }[]} */
    categories: [
      { id: 1, name: 'Totris', icon: '🎯', isActive: 'true' },
      { id: 2, name: 'todoServer', icon: '🗃️', isActive: 'false' },
    ],
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
