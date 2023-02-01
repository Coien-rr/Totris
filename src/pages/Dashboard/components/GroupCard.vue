<script setup>
import { computed } from 'vue'
import TaskCard from '../components/TaskCard.vue'
import GroupCardHeader from '../components/GroupCardHeader.vue'
import { useTaskStore } from '~/store'

const taskStore = useTaskStore()
// HACK: this store data is not changed with it's action methods
// eslint-disable-next-line unused-imports/no-unused-vars
const isSorted = computed(taskStore.tasks.sort((a, b) => {
  return b.priority - a.priority
}))
</script>

<template>
  <div class="card">
    <GroupCardHeader :task-count="taskStore.getTaskCount" />
    <div class="card-content">
      <TaskCard v-for="task in taskStore.tasks" :key="task.id" :item="task" />
    </div>
  </div>
</template>

<style scoped>
.card {
  display: block;
  position: relative;
  user-select: auto;
  background: rgb(255, 255, 255);
  width: 367px;
  height: 83vh;
  max-width: 2495px;
  min-width: 240px;
  box-sizing: border-box;
  margin-right: 20px;
  border-radius: 8px;
  box-shadow: rgb(165 182 185 / 36%) 0px 32px 36px -30px, rgb(171 174 181 / 18%) 0px 8px 16px -4px;
}

.card-content {
  padding: 100px 8px 16px;
  height: 100%;
  width: 100%;
  min-height: 240px;
}
</style>
