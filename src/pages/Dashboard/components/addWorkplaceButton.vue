<script setup>

</script>

<template>
  <button class="noselect">
    <span class="text">Create</span><span class="icon"><svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    ><!-- ! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
      />
    </svg></span>
  </button>
</template>

<style scoped>
button {
  width: 160px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: #10b981;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
}

button,
button span {
  transition: 200ms;
}

button .text {
  transform: translateX(35px);
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
}

button .icon {
  position: absolute;
  border-left: 1px solid #10b981;
  transform: translateX(110px);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button svg {
  width: 15px;
  fill: #eee;
}

button:hover {
  background: #10b981;
}

button:hover .text {
  color: transparent;
}

button:hover .icon {
  width: 150px;
  border-left: none;
  transform: translateX(0);
}

button:focus {
  outline: none;
}

button:active .icon svg {
  transform: scale(0.8);
}
</style>
