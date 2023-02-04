<script setup>
import WorkplaceItemCard from './WorkplaceItemCard.vue'
import { useWorkplaceStore } from '~/store/modules/workplace'

defineProps({
  show: Boolean,
})
defineEmits(['close'])

const workplaceStore = useWorkplaceStore()
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header is-flex">
          <h3>🎮 Workplace Manage</h3>
          <button class="button modal-default-button is-info is-light" @click="$emit('close')">
            Cancel
          </button>
        </div>
        <div class="modal-body">
          <WorkplaceItemCard v-for="workplace in workplaceStore.workplaces" :key="workplace.id" :workplace="workplace" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 1000px;
  min-height: 200px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 15px;
  margin-top: 20px;
  padding-bottom: 0px;
}

.modal-header{
  height: 50px;
}

.modal-header h3 {
  width: 100%;
  margin-top: 0;
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
  color: #000;
  padding-left: 80px;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  height: 50px;
  margin: auto;
}

.modal-default-button {
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  float: right;
}

/*
 * 对于 transition="modal" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
