import { defineStore } from 'pinia'
import { useGroupStore } from '../group'
// import localWorkplace from '~/utils/localDataTool/workplace.js'
// import localforage from 'localforage'
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

  },
  actions: {
    clearCategories() {
      this.categories = []
    },

    addCategory(category) {
      this.categories.push({
        name: category.name,
        icon: category.icon,
        isActive: 'false',
      })
    },

    switchCategory(categoryId) {
      this.categories.forEach((c) => {
        c.isActive = c.id === categoryId
      })

      this.activeCategoryId = categoryId

      const groupStore = useGroupStore()
      groupStore.switchToCategory(categoryId)
    },

    // async getCategoriesByWorkplaceId(workplaceId) {
    //   // console.log('get')
    //   localforage.config({
    //     storeName: 'workplaceStore',
    //   })
    //   const groupsData = await localforage.getItem(workplaceId)
    //   console.log(groupsData)
    // },
  },
})
