import { createApp } from 'vue'
import router from './router'
import '~/style/style.css'
import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#app')
