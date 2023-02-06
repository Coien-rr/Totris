import { createApp } from 'vue'
import localforage from 'localforage'
import router from './router'
import piniaStore from './store'
import '~/style/style.css'
import App from './App.vue'

localforage.config({
  name: 'localTotris',
  storeName: 'totris',
})

createApp(App)
  .use(piniaStore)
  .use(router)
  .mount('#app')
