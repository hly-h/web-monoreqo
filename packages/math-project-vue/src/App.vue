<script setup lang="ts">
import { Person } from '@HLY-H/tools'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import ZhiHuHot from './components/ZhiHuHot.vue'
import { useDark } from './composables/useDarks'

const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark()

onMounted(() => {
  applySavedTheme()
})

const p = new Person('Junmping', 'math')
</script>

<template>
  <div class="dark:bg-red">
    <div class="flex justify-center gap-5">
      <button @click="disableDarkMode">
        Light
      </button>
      <button @click="enableDarkMode">
        Dark
      </button>
    </div>
  </div>
  <div class="bg-#a992d5 dark:bg-pink" />
  <section
    class="grid grid-cols-3 w-800px items-center gap-2 rounded-md bg-yellow"
  >
    <div class="h-10 place-content-center bg-pink">
      1
    </div>
    <div bg-sky>
      2
    </div>
    <div>3</div>
    <div>4</div>
  </section>
  <button btn>
    <div i-carbon-logo-github text-xl hover:bg-red />
  </button>
  <div class="bg-#a992d5 md:bg-amber-4 sm:bg-blue-3" />
  <div>
    <div>当前时间{{ dayjs().format('YYYY年MM月DD日 HH:mm:ss') }}</div>
    <div>{{ p.name }} : {{ p.slogan }}</div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <ZhiHuHot />
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
</style>
