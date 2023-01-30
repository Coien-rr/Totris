<script setup>
import { reactive } from 'vue'

const categories = reactive([
  {
    id: 1,
    name: '🚀QuickStart',
    isActive: true,
  },
  {
    id: 2,
    name: '📓Doc',
    isActive: false,
  },
  {
    id: 3,
    name: '🛠️Tools',
    isActive: false,
  },
  {
    id: 4,
    name: '🔭Read later',
    isActive: false,
  },
  {
    id: 5,
    name: '🪄ToTry',
    isActive: false,
  },
])

function toggleActiveCategory(category) {
  categories.forEach((c) => {
    c.isActive = false
  })
  category.isActive = true
}
</script>

<template>
  <main>
    <section id="tagHeader">
      <button id="wpButton" class="button">
        <span class="icon is-small">
          <i class="fa-solid fa-box-archive" />
        </span>
      </button>
      <div class="is-flex is-11 is-offset-1 categories ">
        <div v-for="category in categories" :key="category.id" class="category button" :class="{ active: category.isActive }" @click="toggleActiveCategory(category)">
          {{ category.name }}
        </div>
      </div>
    </section>
  </main>
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

.categories {
  /* background-color: cornflowerblue; */
  margin-left: 6%;
  height: 58px;
  padding-top: 15px;
  top: 50%;
}

.category {
  z-index: 1;
  padding: 4px 24px;
  margin-left: -10px;
  background-color: rgb(230, 234, 239);
  border: 0px;
  border-radius: 8px;
  color: rgb(53, 60, 73);
  font-size: 16px;
  font-weight: 600;
  height: 32px;
}

.active {
  z-index: 2;
  color: rgb(255, 255, 255);
  background-color: rgb(230, 234, 239);
  background-image: linear-gradient(145deg, rgb(93, 171, 254) 0%, rgb(51, 145, 255) 100%);
  box-shadow: rgb(49 144 255 / 54%) 0px 12px 18px -10px;
}
</style>
