<script setup lang="ts">
type Props = {
  onClose: () => void
}

const props = defineProps<Props>()
const $modalContent= ref(null)
</script>

<template>
  <Teleport to="body">
    <div class="ModalView">
      <div class="ModalView__background" @click='props.onClose' />
      <div className='ModalView_container'>
        <div 
          ref='$modalContent'
          className='ModalView__content' 
          @keydown="(event) => (event.code === 'Escape' && props.onClose())"
          tabIndex='-1'
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.ModalView {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  visibility: hidden;
}

.ModalView__background {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  cursor: pointer;
  visibility: visible;
}

.ModalView_container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 10px;
  visibility: hidden;
}

.ModalView__content {
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.24);
  visibility: visible;
}
</style>