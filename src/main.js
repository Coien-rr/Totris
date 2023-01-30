import { createApp } from 'vue'
import router from './router'
import piniaStore from './store'
import '~/style/style.css'
import App from './App.vue'

createApp(App)
  .use(piniaStore)
  .use(router)
  .mount('#app')
