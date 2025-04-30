<script setup lang="ts">
import { type Post } from '~/api-types/objects/Post';

const props = defineProps<Post>()
</script>


<template>
  <button @click="$emit('onClick')" class="card">
    <h2>{{ props.title }}</h2>
    <p>{{ props.body }}</p>
  </button>
</template>

<style scoped>
.card {
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