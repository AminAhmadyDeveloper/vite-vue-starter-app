import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FloatingVue from 'floating-vue'
import i18n from './i18n'
import App from './App.vue'
import 'floating-vue/dist/style.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

createApp(App).use(createPinia()).use(i18n).use(FloatingVue).mount('#app')
