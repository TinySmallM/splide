<script setup lang="ts">
import { type Post } from '~/api-types/objects/Post';

const apiPatch = 'https://jsonplaceholder.typicode.com'

const { data: posts, pending: isLoading, error } = await useFetch<Post[]>(`${apiPatch}/posts`, {
  server: true,

  params: {
    _limit: 10
  },
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  default: () => []
})
</script>

<template>
  <div class="information">
    <div class="information_container">
      <h1 class="information__title">Полезные видео</h1>
      
      <span v-if='isLoading'>Идет загрузка</span>
      <span v-if='error'>Мы не смогли загрузить страницу</span>
      <template v-else>
        <SlideList :posts="posts" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.information {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

.information_container {
  width: 100%;
  max-width: 1280px;
  padding: 0 15px;
}

.information__title {
  text-align: center;
  font-size: 28px;
  color: black;
}
</style>