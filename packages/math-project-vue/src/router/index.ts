import { createRouter, createWebHistory } from 'vue-router'
import ZhiHuHot from '../components/ZhiHuHot.vue'
import Apifox from '../pages/Apifox.vue'
import ColorTheme from '../pages/ColorTheme.vue'
// import HomeView from '../pages/HomeView.vue'
import I18n from '../pages/i18n.vue'
import MockView from '../pages/MockView.vue'

const routes = [
  // { name: 'home', path: '/', component: HomeView },
  { name: 'mock', path: '/mock', component: MockView },
  { name: 'theme', path: '/theme', component: ColorTheme },
  { name: 'zhihu', path: '/zhihu', component: ZhiHuHot },
  { name: 'Apifox', path: '/api', component: Apifox },
  { name: 'i18n', path: '/i18n', component: I18n },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
