<script lang="ts" setup>
import { onMounted } from 'vue'
import { useDark } from '../composables/useDarks'

const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark()

onMounted(() => {
  applySavedTheme()
})
</script>

<template>
  <div class="flex justify-center gap-5">
    <button class="rounded-md bg-white px-4 py-2 dark:bg-slate-200" @click="disableDarkMode">
      Light
    </button>
    <button class="rounded-md bg-white px-4 py-2 dark:bg-slate-200" @click="enableDarkMode">
      Dark
    </button>
  </div>
</template>

<style scoped>
.dark {
  background-color: black;
  color: white;
}
</style>;

