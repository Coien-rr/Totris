<script setup>
import { computed } from 'vue'
import GroupItemCard from './CategoryItemCard.vue'
import AddGroupButton from './addCategoryButton.vue'
import { useWorkplaceStore } from '~/store/modules/workplace'
import { useCategoryStore } from '~/store/modules/category'

const currItem = defineProps({
  workplace: Object,
})

const workplaceStore = useWorkplaceStore()
const categoryStore = useCategoryStore()

const createNewCategory = () => {
  const categoryId = categoryStore.addNewCategory()
  workplaceStore.addNewCategoryToWorkplace(currItem.workplace.id, categoryId)
}

const isCategoryEmpty = computed(() => {
  return workplaceStore.getWorkplaceById(currItem.workplace.id).length < 5
})
</script>

<template>
  <div class="workplace-item-card">
    <div class="card-header">
      <span class="card-header-content">
        {{ workplace.icon }} {{ workplace.name }}
      </span>
    </div>
    <div class="card-body is-flex">
      <GroupItemCard v-for="category in workplaceStore.getWorkplaceById(currItem.workplace.id)" :key="category.id" :category="category" />
      <div v-if="isCategoryEmpty" class="new-group-button" @click="createNewCategory">
        <AddGroupButton />
      </div>
    </div>
  </div>
</template>

<style scoped>
.workplace-item-card {
  height: 180px;
  padding: 4px, 8px;
  border: 3px solid rgba(195, 198, 206, 0.5);
  border-radius: 20px;
  transition: 0.25s ease-out;
  margin-bottom: 18px;
}

.workplace-item-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.1);
}

.card-header{
  /* background-color: aqua; */
  height: 45px;
  box-shadow: none;
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
}

.card-header-content {
  left: 50%;
  margin-top: 3px;
  font-size: 25px;
  font-weight: 600;
}

.card-body {
  height: 70%;
  padding-left: 10px;
}

.new-group-button {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
</style>