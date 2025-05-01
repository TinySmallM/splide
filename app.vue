<script setup lang="ts">
import './styles.css'

useHead({
  title: 'Splide',
  meta: [
    { name: 'splide', content: 'Карточки превью на splide' }
  ],
})
</script>


<template>
  <!-- header -->
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
  <!-- footer -->
</template>