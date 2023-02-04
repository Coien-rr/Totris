<script setup>
import GroupItemCard from './GroupItemCard.vue'
</script>

<template>
  <!-- vue3页面 -->
  <div class="workplace-item-card">
    <div class="card-header">
      <span class="card-header-content">
        📑 Content
      </span>
    </div>
    <div class="card-body is-flex">
      <GroupItemCard />
      <GroupItemCard />
    </div>
  </div>
</template>

<style scoped>
.workplace-item-card {
  height: 160px;
  padding: 4px, 8px;
  border: 3px solid rgba(195, 198, 206, 0.5);
  border-radius: 20px;
  transition: 0.25s ease-out;
  margin-bottom: 20px;
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
</style>
