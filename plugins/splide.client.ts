// @ts-ignore  //Не понял почему он не поддерживает ts когда в пакете npm есть иконка TS а не DTS.
import VueSplide from '@splidejs/vue-splide';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide);
});

export const splideOptions = {
  perPage: 3,   // Показывать 3 слайда
  gap: '10px',  // Отступ между карточками
  pagination: false, // Убрать точки (если не нужны)
  arrows: true, // Оставить стрелки (по желанию)
  breakpoints: {
    768: {
      gap: '5px',
      perPage: 1,
    },
    1024: {
      perPage: 2,
    }
  },
};