<script setup>
import { useCategoryStore } from '~/store'

const categoryStore = useCategoryStore()

const updateCategoryIconById = (categoryId) => {
  categoryStore.updateCategoryIconById(categoryId)
}
</script>

<template>
  <div class="is-flex is-11 is-offset-1 categories ">
    <div
      v-for="category in categoryStore.categories" :key="category.id" class="category button" :class="{ active: category.isActive }"
      @click="categoryStore.switchCategory(category.id)"
    >
      <span @click.stop="updateCategoryIconById(category.id)">
        {{ category.icon }}
      </span>
      {{ category.name }}
    </div>
  </div>
</template>

<style scoped>
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
