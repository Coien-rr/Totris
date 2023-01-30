<script setup>
import CategoryGroup from '../components/CategoryGroup.vue'
</script>

<template>
  <main>
    <section id="tagHeader">
      <button id="wpButton" class="button">
        <span class="icon is-small">
          <i class="fa-solid fa-box-archive" />
        </span>
      </button>
      <CategoryGroup />
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
</style>
