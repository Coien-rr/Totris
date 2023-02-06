<script setup>
import { ref } from 'vue'
import WorkplaceCard from './WorkplaceCard.vue'

const showModal = ref(false)

const showWorkplace = () => {
  showModal.value = true
}
</script>

<template>
  <button id="wpButton" class="button" @click="showWorkplace">
    <span class="icon is-small">
      <i class="fa-solid fa-box-archive" />
    </span>
  </button>

  <Teleport to="body">
    <!-- 使用这个 modal 组件，传入 prop -->
    <WorkplaceCard :show="showModal" @close="showModal = false" />
  </Teleport>
</template>

<style scoped>
#wpButton {
  border-radius: 7px;
  z-index: 3;
  box-shadow: rgb(142 149 173 / 50%) 0px 2px 6px 0px, rgb(255 255 255 / 81%) 1px 1px 1px 0px inset, rgb(226 228 233) -1px -1px 1px 0px inset;
  position: absolute;
  left: 3%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgb(237, 240, 244);
}

#wpButton:hover {
  background-color: rgb(255, 255, 255);
}
</style>
