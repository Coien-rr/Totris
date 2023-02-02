import { defineStore } from 'pinia'
export const useGroupStore = defineStore('groups', {
  state: () => ({
    /** @type { idCount:number } */
    idCount: 2,
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
      this.idCount++
      this.groups.push({
        id: this.idCount,
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
