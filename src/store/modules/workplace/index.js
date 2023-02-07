import { defineStore } from 'pinia'
import { useCategoryStore } from '../category'
import { randomEmoji } from '~/utils/randomEmoji'
export const useWorkplaceStore = defineStore('workplaces', {
  state: () => ({
    /** @type {{ id: number, name: string, icon: string}[]} */
    workplaces: [
      {
        id: 1,
        name: 'Content',
        icon: '📑',
        categories: [
          { id: 1, name: 'Totris', icon: '🎯', isActive: false },
        ],
        activeCategoryIndex: 0,
      },
      // {
      //   id: 2,
      //   name: 'Your workplace',
      //   icon: '🤖',
      //   categories: [],
      // },
      // {
      //   id: 3,
      //   name: 'Fill your Content',
      //   icon: '🚀',
      //   categories: [],
      // },
    ],
    /** @type { activeWorkplaceId: number } */
    activeWorkplaceIndex: 0,
  }),
  persist: {
    // NOTE: use pinia persist to save workplace to local storage
    key: 'my-workplace-key',
  },
  getters: {
    workplaceInfo() {
      return this.workplaces
    },

    getWorkplaceCount() {
      return this.workplaces.length
    },

    getActiveWorkplaceId() {
      return this.activeWorkplaceId
    },
  },
  actions: {
    async initWorkplace() {
      const categoryStore = useCategoryStore()
      await categoryStore.initCategories(this.workplaces[this.activeWorkplaceIndex].activeCategoryIndex, this.copyCategories())
    },

    async switchWorkplace(workplaceId) {
      if (this.workplaces[this.activeWorkplaceIndex].id === workplaceId)
        return

      // store old workplace's active category index when switching workplace
      const categoryStore = useCategoryStore()
      this.workplaces[this.activeWorkplaceIndex].activeCategoryIndex = categoryStore.activeCategoryIndex

      this.activeWorkplaceIndex = this.workplaces.findIndex(w => w.id === workplaceId)
      await this.initWorkplace()
    },

    getWorkplaceById(workplaceId) {
      const workplaceIndex = this.workplaces.findIndex(w => w.id === workplaceId)
      return this.workplaces[workplaceIndex].categories
    },

    copyCategories() {
      const categoryData = []
      this.workplaces[this.activeWorkplaceIndex].categories.forEach((c) => {
        const category = {
          id: c.id,
          name: c.name,
          icon: c.icon,
          isActive: c.isActive,
        }
        categoryData.push(category)
      })

      return categoryData
    },

    addNewCategoryToWorkplace(workplaceId, categoryId) {
      const workplaceIndex = this.workplaces.findIndex(w => w.id === workplaceId)
      this.workplaces[workplaceIndex].categories.push({
        id: categoryId,
        name: 'Category',
        icon: '🌟',
        isActive: false,
      })
      if (this.workplaces[workplaceIndex].activeCategoryIndex === -1)
        this.workplaces[workplaceIndex].activeCategoryIndex = 0
    },

    createNewWorkplace() {
      this.workplaces.push({
        id: this.workplaces.length + 1,
        name: 'New workplace',
        icon: '📑',
        categories: [],
        activeCategoryIndex: -1,
      })
    },

    updateWorkplaceIconById(workplaceId) {
      const workplaceIndex = this.workplaces.findIndex(w => w.id === workplaceId)
      this.workplaces[workplaceIndex].icon = randomEmoji()
    },
  },
})
