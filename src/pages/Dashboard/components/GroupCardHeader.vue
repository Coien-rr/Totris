<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  taskCount: Number,
  groupName: String,
  groupIcon: String,
})

const emit = defineEmits(['groupNameUpdate'])

const groupName = ref(props.groupName)

watch(() => groupName.value, (newVal) => {
  emit('groupNameUpdate', newVal)
})
</script>

<template>
  <div class="card-header">
    <div class="card-header-icon is-inline-flex">
      {{ groupIcon }}
    </div>
    <div class="card-header-content is-flex is-flex-direction-column">
      <div class="card-header-name is-inline-flex">
        <input v-model.lazy="groupName" type="text" class="card-header-input">
      </div>
      <div class="card-header-count is-flex">
        {{ taskCount }} tasks 🧩
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-header {
  width: 300px;
  padding-left: 8px;
  box-shadow: none;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  height: 64px;
  margin-top: 16px;
}

.card-header-icon {
  border-radius: 8px;
  font-weight: 300;
  height: 64px;
  width: 64px;
  font-size: 47px;
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  padding-right: 12px;
  z-index: 2;
  margin-left: 18px;
  line-height: 1.2;
}

.card-header-icon:hover {
  background-color: rgb(237, 240, 244);
}

.card-header-content {
  margin-left: 16px;
}

.card-header-name {
  max-width: 80%;
  white-space: nowrap;
  font-weight: 700;
  color: rgb(26, 32, 44);
  font-size: 20px;
  padding-top: 3px;
  padding-bottom: 6px;
  padding-right: 5px;
  padding-left: 5px;
}

.card-header-name:hover {
  background-color: rgb(237, 240, 244);
  border-radius: 8px;
}

.card-header-input {
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: 700;
  color: rgb(26, 32, 44);
  padding-top: 5px;
  padding-bottom: 3px;
  padding-right: 5px;
  padding-left: 5px;
}

.card-header-count {
  background-color: rgb(237, 240, 244);
  height: 24px;
  font-weight: 14px;
  width: max-content;
  border-radius: 0.25rem;
  line-height: 1.2;
  padding: 6px 8px 8px 12px;
  align-items: center;
  margin-top: 3px;
  color: rgb(53, 60, 73);
  font-weight: 600;
}
</style>
