<script setup lang="ts">
// @ts-ignore  //Не понял почему он не поддерживает ts когда в пакете npm есть иконка TS а не DTS.
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { splideOptions } from '~/plugins/splide.client';
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
import '@splidejs/vue-splide/css/core';

import { type Post } from '~/api-types/objects/Post';
import { useModal } from '~/hooks/useModal';

type Props = {
  posts: Post[]
}

const props = defineProps<Props>()
const {element, isOpen, open, close} = useModal<Post>()
</script>

<template>
  <Splide :options="splideOptions">
    <SplideSlide v-for="item in props.posts">
      <button class="slide__button" :key="item.id" @click="open(item)">
        <h2>{{ item.title }}</h2>
        <p>{{ item.body }}</p>
      </button>
    </SplideSlide>
  </Splide>
  <template v-if="isOpen && element">
    <ModalView :onClose="close">
      <button>
        <h2>{{ element.title }}</h2>
        <p>{{ element.body }}</p>
      </button>
    </ModalView>
  </template>
</template>

<style scoped>
.splide__slide {
  padding: 0 20px;
}

.slide__button {
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border-color: transparent;
  border-radius: 20px;
  height: 100%;
  box-shadow: 0 0 20px #0000001a;
  padding: 20px;
  cursor: pointer;
}
</style>