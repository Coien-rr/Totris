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
    getGroupCount() {
      return this.groups.length
    },
  },
  actions: {
    addNewGroup() {
      this.groups.push({
        id: 3,
        name: 'New Group',
        icon: '📬',
      })
    },

    updateGroupNameById(id, newName) {
      const groupIndex = this.groups.findIndex(group => group.id === id)
      if (groupIndex === -1)
        return
      this.groups[groupIndex].name = newName
    },
  },
})
