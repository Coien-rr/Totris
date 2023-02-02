<script setup>
import CategoryGroup from '../components/CategoryGroup.vue'
import GroupCard from '../components/GroupCard.vue'
import { useGroupStore } from '~/store'

const groupStore = useGroupStore()

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
</script>

<template>
  <div>
    <header id="tagHeader" class="is-flex">
      <button id="wpButton" class="button">
        <span class="icon is-small">
          <i class="fa-solid fa-box-archive" />
        </span>
      </button>
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
        <GroupCard v-for="group in groupStore.groups" :key="group.id" :item="group" @group-name-update="updateGroupName" />
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
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  text-align: center;
  margin-right: 2vw;
  border: 0px;
  margin: 1.5rem 1rem;
}
</style>
