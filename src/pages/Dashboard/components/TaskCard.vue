<script setup>
import { computed } from 'vue'
const task = defineProps({
  item: Object,
})

const isNormal = computed(() => {
  return task.item.priority === 1
})

const isUrgent = computed(() => {
  return task.item.priority === 2
})

const isImmediate = computed(() => {
  return task.item.priority === 3
})
</script>

<template>
  <div class="task-card-container">
    <div class="task-card-content is-flex is-flex-direction-row">
      <div class="task-card-icon">
        <i id="icon" class="fa-regular fa-circle-notch" />
      </div>
      <div class="task-card-todo">
        {{ item.todo }}
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
  /* background-color: aquamarine; */
  margin-bottom: 8px;
}

.task-card-container:hover {
  background-color: rgb(237, 240, 244);
}

.task-card-content {
  /* padding-top: 2px; */
  padding-bottom: 2px;
  /* background-color: aqua; */
  /* border-radius: 8px; */
  height: 32px;
  border-bottom: 2px solid rgb(237, 240, 244);
}

.task-card-icon {
  width: 32px;
  height: 100%;
  margin-left: 12px;
}

#icon {
  font-size: 20px;
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
  /* margin-bottom: px; */
}

.task-card-info {
  height: 28px;
  /* background-color: aquamarine; */
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  /* margin-top: 5px; */
}
</style>
