<script setup>
import { ref } from 'vue'
const activeTasks = ref(0)
</script>

<template>
  <main class="App container is-fluid">
    <section class="columns">
      <div class="column is-2 active">
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
      </div>
      <div class="column is-10 is-offset-2 workplace">
        Second column
      </div>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
.App {
  text-align: center;
  background: rgb(237, 240, 244);
  padding: 10px;
}
.active {
  height: 100vh;
  position: absolute;
  left: 0px;
  background-color: rgb(237, 240, 244)
  /* z-index: 1;
  position: absolute;
  left: 0px;
  width: 264px;
  height: 100%;
  background-color: rgb(237, 240, 244); */
}

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
  left: 28%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgb(237, 240, 244);
}

#show:hover {
  background-color: rgb(255, 255, 255);
}

#taskMsg {
  font-family: 'Itim', cursive;
  font-size: 14px;
  letter-spacing: 0.9px;
  z-index: 3;
  color: rgb(85, 93, 108);
  width: 60%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  left:68%
}

.workplace {
  z-index: 3;
  height: 100vh;
  background-color: rgb(244, 245, 247);
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  box-shadow: rgb(166 166 167 / 30%) -4px 0px 18px 0px;
}

.logo {
  height: 4.5em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
