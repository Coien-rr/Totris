<script setup>
defineProps({
  taskCount: Number,
  groupName: String,
  groupIcon: String,
})
</script>

<template>
  <div class="card-header">
    <div class="card-header-icon is-inline-flex">
      {{ groupIcon }}
    </div>
    <div class="card-header-content is-flex is-flex-direction-column">
      <div class="card-header-name is-inline-flex">
        {{ groupName }}
      </div>
      <div class="card-header-count is-flex">
        {{ taskCount }} tasks 🧩
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-header {
  width: 367px;
  padding-left: 8px;
  cursor: grab;
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
  max-width: 100%;
  white-space: nowrap;
  font-weight: 700;
  color: rgb(26, 32, 44);
  font-size: 20px;
  padding-top: 6px;
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
