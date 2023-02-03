import { defineStore } from 'pinia'
// import { useCategoryStore } from '../category'
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    /** @type { idCount:number } */
    idCount: 5,
    /** @type {{ todo: string, priority: number, deadline: string, groupID: string }[]} */
    tasks: [],
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

    addTask(task) {
      this.tasks.push({
        id: task.id,
        todo: task.todo,
        priority: task.priority,
        deadline: task.deadline,
        groupID: task.groupID,
      })
    },

    clearTasks() {
      this.tasks = []
    },

    sortByPriority() {
      this.tasks.sort((a, b) => {
        return b.priority - a.priority
      })
    },

    addNewTask(newTask) {
      this.idCount++
      // const categoryStore = useCategoryStore()
      this.tasks.push({
        id: this.idCount,
        todo: newTask.todo,
        priority: newTask.priority,
        deadline: `${newTask.deadline.split('-')[1]}-${newTask.deadline.split('-')[2].split('T')[0]} ${newTask.deadline.split('T')[1]}`,
        groupID: newTask.groupID,
        // categoryId: categoryStore.activeCategoryId,
      })
      this.sortByPriority()
    },

    getTaskByGroupID(groupID) {
      return this.tasks.filter(task => task.groupID === groupID)
    },

    copyTaskByGroupID(groupID) {
      const tasks = this.getTaskByGroupID(groupID)
      const copyTasks = []
      tasks.forEach((task) => {
        const copyTask = {
          id: task.id,
          todo: task.todo,
          priority: task.priority,
          deadline: task.deadline,
          groupID: task.groupID,
        }
        copyTasks.push(copyTask)
      })
      return copyTasks
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
