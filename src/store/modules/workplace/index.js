import { defineStore } from 'pinia'
export const useWorkplaceStore = defineStore('workplaces', {
  state: () => ({
    /** @type {{ name: string, icon: string, isActive: boolean }[]} */
    workplaces: [],
  }),
  getters: {
    workplaceInfo() {
      return this.workplaces
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
  },
})
