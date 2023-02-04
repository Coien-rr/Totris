import { defineStore } from 'pinia'
import { useTaskStore } from '../task'
import { useCategoryStore } from '../category'
import localGroup from '~/utils/localDataTool/group.js'
export const useGroupStore = defineStore('groups', {
  state: () => ({
    /** @type { idCount:number } */
    idCount: 2,
    /** @type {{ id:number, name: string, icon: string, categoryId: number}[]} */
    groups: [
      // {
      //   id: 1,
      //   name: 'Dashboard',
      //   icon: '🏠',
      //   categoryId: 1,
      // },
      // {
      //   id: 2,
      //   name: 'LoginPage',
      //   icon: '🔐',
      //   categoryId: 1,
      // },
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
    async initGroup(groupId) {
      this.groups = []
      const taskStore = useTaskStore()
      taskStore.clearTasks()
      const groupsData = await localGroup.getGroupDataById(`${groupId}`)
      if (groupsData === null)
        return
      groupsData.forEach((groupData) => {
        const group = {
          id: groupData.id,
          name: groupData.name,
          icon: groupData.icon,
          categoryId: groupData.categoryId,
        }
        this.groups.push(group)
        groupData.taskData.forEach(task => taskStore.addTask(task))
      })
    },

    addNewGroup() {
      this.idCount++
      const categoryStore = useCategoryStore()
      this.groups.push({
        id: this.idCount,
        name: 'New Group',
        icon: '📬',
        categoryId: categoryStore.activeCategoryId,
      })
    },

    updateGroupNameById(id, newName) {
      const groupIndex = this.groups.findIndex(group => group.id === id)
      if (groupIndex === -1)
        return
      this.groups[groupIndex].name = newName
    },

    async storeGroup() {
      if (this.groups.length === 0)
        return
      const taskStore = useTaskStore()
      const groupsData = []
      for (let i = 0; i < this.groups.length; i++) {
        const groupData = {
          id: this.groups[i].id,
          name: this.groups[i].name,
          icon: this.groups[i].icon,
          taskData: taskStore.copyTaskByGroupID(this.groups[i].id),
          categoryId: this.groups[i].categoryId,
        }
        groupsData.push(groupData)
      }
      await localGroup.localSetItem(`${this.groups[0].categoryId}`, groupsData)
    },

    async refreshGroup(categoryId) {
      await this.initGroup(categoryId)
    },

    async switchToCategory(categoryId) {
      await this.storeGroup()
      await this.refreshGroup(categoryId)
    },
  },
})
