// plugins/pinia-plugin.ts
import { defineNuxtPlugin } from '#app';
import { createPinia } from 'pinia';
import persistedState from 'pinia-plugin-persistedstate';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  pinia.use(persistedState); // Agrega el plugin de persistencia
  nuxtApp.vueApp.use(pinia); // Instala Pinia en la aplicación Nuxt
});
