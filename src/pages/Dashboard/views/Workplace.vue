<script setup>
import { computed, reactive } from 'vue'
import CategoryGroup from '../components/CategoryGroup.vue'
import TaskCard from '../components/TaskCard.vue'

const tasks = reactive([
  {
    id: 1,
    todo: 'testTask',
    priority: 1,
    deadline: '1-31 23:00',
  },
  {
    id: 2,
    todo: 'finish taskCard',
    priority: 2,
    deadline: '1-31 23:30',
  },
  {
    id: 3,
    todo: 'add task store',
    priority: 3,
    deadline: '1-31 23:59',
  },
])

const isSorted = computed(tasks.sort((a, b) => b.priority - a.priority))
</script>

<template>
  <div>
    <header id="tagHeader">
      <button id="wpButton" class="button">
        <span class="icon is-small">
          <i class="fa-solid fa-box-archive" />
        </span>
      </button>
      <CategoryGroup />
    </header>
    <main>
      <section class="group">
        <div class="card">
          <div class="card-header is-flex">
            <div class="card-header-icon is-inline-flex">
              📬
            </div>
            <div class="card-header-content is-flex is-flex-direction-column">
              <div class="card-header-name is-inline-flex">
                Totris tasks
              </div>
              <div class="card-header-count is-flex">
                10 tasks 🧩
              </div>
            </div>
          </div>
          <div class="card-content">
            <TaskCard v-for="task in tasks" :key="task.id" :item="task" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
#tagHeader {
  align-items: center;
  height: 58px;
  padding-bottom: 10px;
  padding-left: 24px;
  padding-right: 18px;
  margin-top: 24px;

  position: relative;
  /* background-color: aqua; */
}

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

.group {
  display: block;
  width: 367px;
  overflow: hidden;
  text-align: center;
  margin-right: 2vw;
  border: 0px;
  border-radius: 18px;
  box-shadow: rgb(165 182 185 / 36%) 0px 32px 36px -30px, rgb(171 174 181 / 18%) 0px 8px 16px -4px;
  margin-left: 28px;
  margin-top: 23px;
}

.card {
  position: relative;
  user-select: auto;
  background: rgb(255, 255, 255);
  width: 367px;
  height: 83vh;
  max-width: 2495px;
  min-width: 240px;
  box-sizing: border-box;
  flex-shrink: 0;
}

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
  /* background-color: cadetblue; */
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
  /* background-color: aqua; */
  max-width: 100%;
  white-space: nowrap;
  font-weight: 700;
  color: rgb(26, 32, 44);
  font-size: 20px;
  padding-top: 6px;
}

.card-header-count{
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

.card-content {
  padding: 100px 8px 16px;
  height: 100%;
  width: 100%;
  min-height: 240px;
}
</style>
