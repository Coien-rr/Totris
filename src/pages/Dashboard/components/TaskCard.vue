<script setup>
import { computed, ref, watch } from 'vue'
const task = defineProps({
  item: Object,
})

const emit = defineEmits(['updateTodo', 'doneTask'])

const isNormal = computed(() => {
  return task.item.priority === 1
})

const isUrgent = computed(() => {
  return task.item.priority === 2
})

const isImmediate = computed(() => {
  return task.item.priority === 3
})

const todoContent = ref(task.item.todo)

watch(todoContent, (newValue) => {
  emit('updateTodo', task.item.id, newValue)
})

const doneTask = () => {
  emit('doneTask', task.item.id)
}
</script>

<template>
  <div class="task-card-container">
    <div class="task-card-content is-flex is-flex-direction-row">
      <div class="task-card-icon" @click="doneTask">
        <span class="icon has-text-success">
          <i id="icon" class="fas fa-check-square" />
        </span>
      </div>
      <div class="task-card-todo">
        <input v-model.lazy="todoContent" type="text" class="task-card-input">
      </div>
    </div>
    <div class="task-card-info">
      <i class="fa-solid fa-circle-exclamation priorIcon " :class="{ 'prior-normal': isNormal, 'prior-Urgent': isUrgent, 'prior-immediate': isImmediate }" /> ⏰ {{ item.deadline }}
    </div>
  </div>
</template>

<style scoped>
.task-card-container {
  height: 60px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.task-card-container:hover {
  -webkit-box-shadow: 0px 1px 15px 0px rgba(123, 191, 111, 0.32);
  -moz-box-shadow: 0px 1px 15px 0px rgba(123, 191, 111, 0.32);
  box-shadow: 0px 1px 15px 0px rgba(123, 191, 111, 0.32);
  border-radius: 0.5rem;
}

.task-card-content {
  width: 100%;
  padding-bottom: 2px;
  height: 35px;
  border-bottom: 2px solid rgb(237, 240, 244);
}

.task-card-input{
  border: none;
  outline: none;
  font-size: 22px;
  font-weight: 600;
  margin-top: 0px;
  width: 100%;
}

.task-card-icon {
  width: 32px;
  height: 100%;
  margin-left: 12px;
}

#icon {
  font-size: 25px;
  margin-top: 8px;
}

.priorIcon {
  margin-right: 55px;
}

.prior-normal {
  color: rgb(0, 153, 255);
}

.prior-Urgent {
  color: rgb(255, 153, 0);
}

.prior-immediate {
  color: rgb(255, 0, 0);
}

.task-card-todo {
  font-size: 22px;
  margin-left: 8px;
  font-weight: 600;
  margin-top: 0px;
}

.task-card-info {
  height: 28px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
}
</style>
