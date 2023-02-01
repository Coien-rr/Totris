import { defineStore } from 'pinia'
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    /** @type {{ todo: string, priority: number, deadline: string }[]} */
    tasks: [
      {
        id: 1,
        todo: 'testTask',
        priority: 1,
        deadline: '1-31 23:00',
      },
      {
        id: 2,
        todo: 'finish taskCard',
        priority: 2,
        deadline: '1-31 23:30',
      },
      {
        id: 3,
        todo: 'add task store',
        priority: 3,
        deadline: '1-31 23:59',
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
      console.log('add!')
      console.log(newTask)
    },
  },
})
