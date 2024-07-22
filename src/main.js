import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from '@/pages/Home.vue'
import CardDetail from '@/components/CardDetail.vue'
import PostDetail from '@/components/PostDetail.vue'

const app = createApp(App)
const routes = [
  { path: '/', component: Home },
  { path: '/car/:id', component: CardDetail },
  { path: '/car/post/:id', component: PostDetail },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

app.use(router)
app.mount('#app')
