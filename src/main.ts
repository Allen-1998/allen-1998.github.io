// eslint-disable-next-line import/no-unresolved
import 'uno.css'
import '@/styles/index.scss'

import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(head).use(router)

app.mount('#app')
