<script setup>
import { onMounted, onUpdated } from 'vue'
import ShowWorkplace from '../components/showWorkplace.vue'
import CategoryGroup from '../components/CategoryGroup.vue'
import GroupCard from '../components/GroupCard.vue'
import { useGroupStore, useWorkplaceStore } from '~/store'

const groupStore = useGroupStore()
const workplaceStore = useWorkplaceStore()

onMounted(async () => {
  workplaceStore.initWorkplace()
})

onUpdated(async () => {
  await groupStore.storeGroup()
})

const createNewGroup = () => {
  // console.log('create new group')
  if (groupStore.groups.length >= 4) {
    alert('You can only have 4 groups!')
    return
  }
  groupStore.addNewGroup()
}

const updateGroupName = (groupID, newName) => {
  groupStore.updateGroupNameById(groupID, newName)
}

function updateGroupIcon(groupID) {
  groupStore.updateGroupIconById(groupID)
}
</script>

<template>
  <div>
    <header id="tagHeader" class="is-flex">
      <ShowWorkplace />
      <CategoryGroup />
      <div class="addNewGroup">
        <button class="button is-primary" @click="createNewGroup">
          <span class="icon is-small">
            <i class="fa-solid fa-plus" />
          </span>
        </button>
      </div>
    </header>
    <main>
      <section class="group is-flex">
        <GroupCard v-for="group in groupStore.groups" :key="group.id" :item="group" @group-name-update="updateGroupName" @group-icon-update="updateGroupIcon" />
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
}

.addNewGroup {
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.group {
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  text-align: center;
  margin-right: 2vw;
  border: 0px;
  margin: 1.5rem 1rem;
}
</style>
