<script setup lang="ts">
// @ts-ignore  //Не понял почему он не поддерживает ts когда в пакете npm есть иконка TS а не DTS.
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { splideOptions } from '~/plugins/splide.client';
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
import '@splidejs/vue-splide/css/core';

import { type Post } from '~/api-types/objects/Post';

const apiPatch = 'https://jsonplaceholder.typicode.com'

const { data: posts, pending: isLoading, error } = await useFetch<Post[]>(`${apiPatch}/posts`, {
  params: {
    _limit: 10
  },
  headers: {
    'Accept': 'application/json'
  },
})

function handleButtonClick() {
  console.log('test click')
}
</script>


<template>
  <div class="container">
    <div class="videos">
      <h1 class="videos__title">Полезные видео</h1>
      
      <span v-if='isLoading'>Идет загрузка</span>
      <span v-if='error'>{{ error.message }}</span>
      <template v-else>
        <Splide :options="splideOptions">
          <SplideSlide v-for="item in posts" :key="item.id">
            <ButtonCard v-bind="item" @click="handleButtonClick" />
          </SplideSlide>
        </Splide>
      </template>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

.videos {
  width: 100%;
  max-width: 1280px;
  padding: 0 15px;
}

.videos__title {
  text-align: center;
  font-size: 28px;
  color: black;
}

.splide__slide {
  padding: 0 20px;
}
</style>