import { defineStore } from 'pinia'
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    /** @type { idCount:number } */
    idCount: 5,
    /** @type {{ todo: string, priority: number, deadline: string, group: string }[]} */
    tasks: [
      {
        id: 1,
        todo: 'testTask',
        priority: 1,
        deadline: '02-11 23:00',
        group: 'Dashboard',
      },
      {
        id: 2,
        todo: 'add register',
        priority: 1,
        deadline: '02-11 23:30',
        group: 'LoginPage',
      },
      {
        id: 3,
        todo: 'add login',
        priority: 2,
        deadline: '02-11 23:59',
        group: 'LoginPage',
      },
      {
        id: 4,
        todo: 'add task filter',
        priority: 3,
        deadline: '02-11 23:59',
        group: 'Dashboard',
      },
      {
        id: 5,
        todo: 'refactor task store',
        priority: 1,
        deadline: '02-11 23:59',
        group: 'Dashboard',
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
        group: newTask.group,
      })
      this.sortByPriority()
    },

    getTaskByGroup(group) {
      return this.tasks.filter(task => task.group === group)
    },

    getTaskCountByGroup(group) {
      return this.tasks.filter(task => task.group === group).length
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
