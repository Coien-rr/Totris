import { defineStore } from 'pinia'
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    /** @type {{ todo: string, priority: number, deadline: string }[]} */
    tasks: [
      {
        id: 1,
        todo: 'testTask',
        priority: 1,
        deadline: '01-31 23:00',
      },
      {
        id: 2,
        todo: 'finish taskCard',
        priority: 2,
        deadline: '01-31 23:30',
      },
      {
        id: 3,
        todo: 'add task store',
        priority: 3,
        deadline: '01-31 23:59',
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
      this.tasks.push({
        id: this.tasks.length,
        todo: newTask.todo,
        priority: newTask.priority,
        deadline: `${newTask.deadline.split('-')[1]}-${newTask.deadline.split('-')[2].split('T')[0]} ${newTask.deadline.split('T')[1]}`,
      })
      this.sortByPriority()
    },
  },
})
