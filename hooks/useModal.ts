export const useModal = <T>() => {
  const isOpen = ref(false);
  const element = ref<T | null>(null);

  const open = <T>(item: T) => {
    isOpen.value = true;
    element.value = item;
  };

  const close = () => {
    isOpen.value = false;
  };

  return {
    isOpen,
    element,
    open,
    close,
  };
}