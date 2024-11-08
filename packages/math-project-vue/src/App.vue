<script setup lang="ts">
import { Person } from '@HLY-H/tools'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import ZhiHuHot from './components/ZhiHuHot.vue'
import { useDark } from './composables/useDarks'
// import i18n from './pages/i18n.vue'
// import MockView from './pages/MockView.vue'

const p = new Person('Junmping', 'math')

const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark()

onMounted(() => {
  applySavedTheme()
})

// function openAleart() {
//   showMsg({
//     title: '标题',
//     content: '1234567',
//     closeable: true,
//     showCancle: true,
//     onCancel: () => {
//       console.log('cancle :>>')
//     },
//     onConfirm: () => {
//       console.log('Confirm :>>')
//     },
//   })
// }
</script>

<template>
  <!-- <div>  <MockView /></div>
  <div> <i18n /></div> -->

  <div class="p-2 dark:bg-purple-200 md:bg-pink-100 sm:bg-blue-3">
    <div
      class="-4 m-auto size-100 bg-pink hover:(bg-cyan text-4xl) md:bg-pink sm:bg-blue-3"
      flex
      content-center
      items-center
      justify-center
      transition-1000
    >
      <button btn>
        OnClick
      </button>
      <div class="i-carbon-logo-github" />
    </div>

    <!-- <button @click="openAleart">
      openAleart
    </button> -->

    <!-- 路由渲染 -->
    <div>
      <main class="j-70vh m-2 overflow-scroll rounded-xl bg-pink-200 p-2 dark:bg-purple-300">
        <p>
          <strong>Current route path: </strong> {{ $route.fullPath }}
        </p>
        <header flex justify-center gap-4 text-xl>
          <RouterLink to="/zhihu">
            知乎热榜
          </RouterLink>
          <RouterLink to="/theme">
            主题切换
          </RouterLink>
          <RouterLink to="/mock">
            以赝顶真
          </RouterLink>
          <RouterLink to="/api">
            Apifox
          </RouterLink>
          <RouterLink to="/i18n">
            i18n
          </RouterLink>
          <RouterLink to="/messageBox">
            openAleart
          </RouterLink>
        </header>
        <RouterView />
      </main>
    </div>

    <!-- <div class="flex justify-center gap-5">
      <button class="rounded-md bg-white px-4 py-2 dark:bg-slate-200" @click="disableDarkMode">
        Light
      </button>
      <button class="rounded-md bg-white px-4 py-2 dark:bg-slate-200" @click="enableDarkMode">
        Dark
      </button>
    </div> -->
    <section
      class="grid grid-cols-3 gap-2 rounded-md bg-yellow-100 dark:bg-yellow-200"
    >
      <div class="h-10 flex items-center justify-center bg-pink-300 dark:bg-pink-400">
        1
      </div>
      <div class="bg-sky-300 dark:bg-sky-400">
        2
      </div>
      <div class="bg-blue-300 dark:bg-blue-400">
        3
      </div>
      <div class="bg-green-300 dark:bg-green-400">
        4
      </div>
    </section>
    <div class="bg-purple-300 dark:bg-purple-400 md:bg-amber-400 sm:bg-blue-300" />
    <div>
      <div class="my-4">
        当前时间{{ dayjs().format('YYYY年MM月DD日 HH:mm:ss') }}
      </div>
      <div>{{ p.name }} : {{ p.slogan }}</div>
      <a href="https://vitejs.dev" target="_blank" class="my-4">
        <img src="/vite.svg" class="logo" alt="Vite logo">
      </a>
      <a href="https://vuejs.org/" target="_blank" class="my-4">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" class="my-4" />
    <ZhiHuHot class="my-4" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.dark {
  background-color: black;
  color: white;
}
</style>;
