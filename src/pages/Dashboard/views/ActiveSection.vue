<script setup>
import { ref } from 'vue'
const activeTasks = ref(0)
</script>

<template>
  <section id="tagHeader">
    <button id="show" class="button">
      <span class="icon is-small">
        <i class="fa-solid fa-check-double" />
      </span>
    </button>
    <p id="taskMsg">
      <b>{{ activeTasks }} </b>
      ACTIVE TASKS 🎯
    </p>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
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

#show {
  border-radius: 7px;
  z-index: 3;
  box-shadow: rgb(142 149 173 / 50%) 0px 2px 6px 0px, rgb(255 255 255 / 81%) 1px 1px 1px 0px inset, rgb(226 228 233) -1px -1px 1px 0px inset;
  position: absolute;
  left: 23%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgb(237, 240, 244);
}

#show:hover {
  background-color: rgb(255, 255, 255);
}

#taskMsg {
  font-family: 'Itim', cursive;
  font-size: 15px;
  letter-spacing: 0.9px;
  z-index: 3;
  color: rgb(85, 93, 108);
  width: 60%;
  position: absolute;
  top: 53%;
  transform: translateX(-50%) translateY(-50%);
  left: 65%
}
</style>
