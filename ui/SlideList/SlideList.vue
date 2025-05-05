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

const films = [
  'https://kinescope.io/embed/sbGbsxzE4RRCMSu5xT8W16', 
  'https://kinescope.io/embed/sbGbsxzE4RRCMSu5xT8W16',
  'https://kinescope.io/embed/sbGbsxzE4RRCMSu5xT8W16',
  'https://kinescope.io/embed/sbGbsxzE4RRCMSu5xT8W16',
  'https://kinescope.io/embed/sbGbsxzE4RRCMSu5xT8W16',
  'https://kinescope.io/embed/sbGbsxzE4RRCMSu5xT8W16',
  'https://kinescope.io/embed/sbGbsxzE4RRCMSu5xT8W16',
  'https://kinescope.io/embed/sbGbsxzE4RRCMSu5xT8W16',
  'https://kinescope.io/embed/sbGbsxzE4RRCMSu5xT8W16',
  'https://kinescope.io/embed/sbGbsxzE4RRCMSu5xT8W16',
  'https://kinescope.io/embed/sbGbsxzE4RRCMSu5xT8W16'
]

const updatePosts = props.posts.map((item, index) => ({...item, kino: films[index]}));

const {element, isOpen, open, close} = useModal<typeof updatePosts[number]>()
</script>

<template>
  <Splide :options="splideOptions">
    <SplideSlide v-for="item in updatePosts">
      <button class="slide__button" :key="item.id" @click="open(item)">
        <h2>{{ item.title }}</h2>
        <p>{{ item.body }}</p>
      </button>
    </SplideSlide>
  </Splide>
  <template v-if="isOpen && element">
    <ModalView :onClose="close">
      <div class="iframe-container" v-if="element.kino.length > 0">
        <iframe
          class="iframe__video" 
          title="video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          width="540" 
          height="390" 
          :src='element.kino' 
          frameborder="0" 
          allowfullscreen
        >
        </iframe>
      </div>
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

.Splide__inner {

}

.iframe-container {
  padding-top: 56.25%;
  position: relative;
  width: 100%;
}

.iframe__video {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>