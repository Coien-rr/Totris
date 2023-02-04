import { defineStore } from 'pinia'
export const useWorkplaceStore = defineStore('workplaces', {
  state: () => ({
    /** @type {{ id: number, name: string, icon: string}[]} */
    workplaces: [
      {
        id: 1,
        name: 'Content',
        icon: '📑',
        categories: [
          { id: 1, name: 'Totris', icon: '🎯', isActive: 'true' },
          { id: 2, name: 'todoServer', icon: '🗃️', isActive: 'false' },
        ],
      },
      {
        id: 2,
        name: 'Your workplace',
        icon: '🤖',
        categories: [
          { id: 1, name: 'Category', icon: '🗃️', isActive: 'true' },
        ],
      },
      {
        id: 3,
        name: 'Fill your Content',
        icon: '🚀',
        categories: [
          { id: 1, name: 'Code', icon: '🎇', isActive: 'true' },
          { id: 2, name: 'learn TDD', icon: '🗃️', isActive: 'false' },
          { id: 2, name: 'Hello World', icon: '🧰', isActive: 'false' },
        ],
      },
    ],
    /** @type { activeWorkplaceId: number } */
    activeWorkplaceId: 1,
  }),
  getters: {
    workplaceInfo() {
      return this.workplaces
    },

    getActiveWorkplaceId() {
      return this.activeWorkplaceId
    },
  },
  actions: {
    async init() {
      // this.state.workplaces = await getWorkplace()
    },

    switchWorkplace(workplace) {
      this.workplaces.forEach((w) => {
        w.isActive = w.name === workplace.name
      })
    },

    getWorkplaceById(workplaceId) {
      const workplaceIndex = this.workplaces.findIndex(w => w.id === workplaceId)
      return this.workplaces[workplaceIndex].categories
    },
  },
})
