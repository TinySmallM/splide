<script setup lang="ts">
import { ROUTE } from '~/consts/consts'
</script>

<template>
  <div class="container">
    <NuxtLoadingIndicator color="#00ff00" />
    <NuxtLink class="link" :to="ROUTE.information">Перейти в раздел полезные видео</NuxtLink>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.link {
  font-size: 22px;
  text-decoration: none;
  padding: 6px;
  background-color: black;
  color: #ffffff;
  border-radius: 6px;
  transition: opacity 0.2s;
}

.link:hover {
  opacity: 0.8;
}
</style>