<script setup>
import ActiveSection from './views/ActiveSection.vue'
import Workplace from './views/Workplace.vue'
</script>

<template>
  <div class="App container is-fluid">
    <section class="columns">
      <div class="column is-2 active">
        <ActiveSection />
      </div>
      <div class="column is-10 is-offset-2 workplace">
        <Workplace />
      </div>
    </section>
  </div>
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
}

.workplace {
  z-index: 3;
  height: 100vh;
  background-color: rgb(244, 245, 247);
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  box-shadow: rgb(166 166 167 / 30%) -4px 0px 18px 0px;
}
</style>
