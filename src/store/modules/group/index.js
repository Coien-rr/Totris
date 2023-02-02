import { defineStore } from 'pinia'
export const useGroupStore = defineStore('groups', {
  state: () => ({
    /** @type {{ id:number, name: string, icon: string,}[]} */
    groups: [
      {
        id: 1,
        name: 'Dashboard',
        icon: '🏠',
      },
      {
        id: 2,
        name: 'LoginPage',
        icon: '🔐',
      },
    ],
  }),
  persist: {
    key: 'my-groups-key',
  },
  getters: {

  },
  actions: {

  },
})
