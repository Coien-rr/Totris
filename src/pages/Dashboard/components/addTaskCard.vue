<script setup>
import { reactive } from 'vue'
import SelectPriority from './selectPriority.vue'
import { useTaskStore } from '~/store'

const taskStore = useTaskStore()

const newTask = reactive({
  message: '',
  priority: 0,
  deadline: '',
})

const addNewTask = () => {
  taskMessage.value = ''
}

const setNewTaskPriority = (priority) => {
  newTask.priority = priority
}
</script>

<template>
  <!-- TODO: Add hover special effects -->
  <div class="task-card-container">
    <div class="task-card-content is-flex is-flex-direction-row">
      <div class="task-card-icon">
        <i id="addTaskIcon" class="fa-solid fa-rocket" />
      </div>
      <input v-model.trim="newTask.message" class="input add-card-todo" type="text" placeholder="Add Task">
      <div class="add-card-bticon">
        <i id="addButton" class="fa-solid fa-square-plus" @click="addNewTask" />
      </div>
    </div>
    <div class="task-card-info is-flex is-flex-direction-row">
      <div class="task-card-info-prior">
        <SelectPriority @select-priority="setNewTaskPriority" />
      </div>
      <div class="task-card-info-deadline">
        <div id="deadline-select" class="control">
          <input id="deadlineInput" class="input" type="datetime-local" value="2023-02-01T19:30">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-card-container {
  height: 60px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.task-card-content {
  padding-bottom: 2px;
  height: 32px;
  border-bottom: 2px solid rgb(237, 240, 244);
}

#addTaskIcon {
  font-size: 20px;
  margin-top: 6px;
}

.task-card-icon {
  width: 32px;
  height: 100%;
  margin-left: 12px;
}

.add-card-todo {
  font-size: 16px;
  margin-left: 8px;
  font-weight: 630;
  margin-top: -1.5px;
  border: none;
  max-height: 2rem;
}

.add-card-todo:focus {
  border-bottom: .15rem #10B981 solid;
  box-shadow: none;
  transition: border-bottom .1s ease;
}

#addButton {
  font-size: 30px;
  color: #10B981;
  margin-left: 10px;
  margin-right: 5px;
}

.task-card-info {
  height: 28px;
  font-size: 16px;
  font-weight: 500;
}

.task-card-info-prior {
  width: 40%;
}
.task-card-info-deadline {
  width: 60%;
}

#deadlineInput {
  border: none;
  font-size: 13px;
  font-weight: 500;
  width: 80%;
}

#deadline-select {
  font-size: 0.75rem;
  margin-right: 30px;
}
</style>
