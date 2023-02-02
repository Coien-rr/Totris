import { defineStore } from 'pinia'
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    /** @type { idCount:number } */
    idCount: 5,
    /** @type {{ todo: string, priority: number, deadline: string, groupID: string }[]} */
    tasks: [
      {
        id: 1,
        todo: 'testTask',
        priority: 1,
        deadline: '02-11 23:00',
        groupID: 1,
      },
      {
        id: 2,
        todo: 'add register',
        priority: 1,
        deadline: '02-11 23:30',
        groupID: 2,
      },
      {
        id: 3,
        todo: 'add login',
        priority: 2,
        deadline: '02-11 23:59',
        groupID: 2,
      },
      {
        id: 4,
        todo: 'add task filter',
        priority: 3,
        deadline: '02-11 23:59',
        groupID: 1,
      },
      {
        id: 5,
        todo: 'refactor task store',
        priority: 1,
        deadline: '02-11 23:59',
        groupID: 1,
      },
    ],
  }),
  persist: {
    key: 'my-tasks-key',
  },
  getters: {
    getTaskCount() {
      return this.tasks.length
    },
  },
  actions: {
    sortByPriority() {
      this.tasks.sort((a, b) => {
        return b.priority - a.priority
      })
    },

    addTask(newTask) {
      this.idCount++
      this.tasks.push({
        id: this.idCount,
        todo: newTask.todo,
        priority: newTask.priority,
        deadline: `${newTask.deadline.split('-')[1]}-${newTask.deadline.split('-')[2].split('T')[0]} ${newTask.deadline.split('T')[1]}`,
        groupID: newTask.groupID,
      })
      this.sortByPriority()
    },

    getTaskByGroupID(groupID) {
      return this.tasks.filter(task => task.groupID === groupID)
    },

    getTaskCountByGroupID(groupID) {
      return this.tasks.filter(task => task.groupID === groupID).length
    },

    updateTaskByID(taskID, taskNewContent) {
      const taskIndex = this.tasks.findIndex(task => task.id === taskID)
      if (taskIndex === -1)
        return
      this.tasks[taskIndex].todo = taskNewContent
    },

    removeTaskByID(taskID) {
      const taskIndex = this.tasks.findIndex(task => task.id === taskID)
      if (taskIndex === -1)
        return
      this.tasks.splice(taskIndex, 1)
    },
  },
})
