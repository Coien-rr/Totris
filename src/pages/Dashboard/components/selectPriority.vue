<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
const props = defineProps(['reset'])
const emit = defineEmits(['selectPriority'])

const trigger = ref(false)
const priorIconColor = ref('#10B981')

onMounted(() => {
  document.addEventListener('click', closeDropDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropDown)
})

// NOTE: you can't watch attributes of reactive objects, you need use getter function like below code
watch(() => props.reset, () => {
  priorIconColor.value = '#10B981'
})

const priorityItem = [
  {
    id: 1,
    iconColor: 'rgb(0, 153, 255)',
    content: 'normal',
  },
  {
    id: 2,
    iconColor: 'rgb(255, 153, 0)',
    content: 'urgent',
  },
  {
    id: 3,
    iconColor: 'rgb(255, 0, 0)',
    content: 'immediate',
  },
]

const dropDownTrigger = () => {
  trigger.value = !trigger.value
}

function closeDropDown() {
  if (trigger.value)
    trigger.value = false
}

const selectPriority = (item) => {
  trigger.value = false
  priorIconColor.value = item.iconColor
  emit('selectPriority', item.id)
}
</script>

<template>
  <div class="dropdown" :class="{ 'is-active': trigger }" @click.stop>
    <div class="dropdown-trigger">
      <div class="prior-trigger" aria-haspopup="true" aria-controls="dropdown-menu" @click="dropDownTrigger">
        <i class="fa-solid fa-circle-exclamation" :style="{ color: priorIconColor }" />
      </div>
    </div>
    <div id="dropdown-menu" class="dropdown-menu prior-menu" role="menu">
      <div class="dropdown-content">
        <a v-for="item in priorityItem" :key="item.id" class="dropdown-item prior-item" @click="selectPriority(item)">
          <i class="fa-solid fa-circle-exclamation" :style="{ color: item.iconColor }" />
          {{ (item.content).toUpperCase() }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prior-trigger {
  border: none;
  font-size: 1rem;
  background-color: "rgb(237, 240, 244)";
  padding-left: 5px;
  margin-left: 40px;
}

.prior-icon {
  font-size: 1rem;
}

.prior-trigger:hover {
  background-color: "rgb(237, 240, 244)";
}

.prior-menu {
  margin-left: 6px;
  width: 70px;
  min-width: 7rem;
}
.prior-item {
  padding-left: 10px;
  text-align: left;
}
</style>
