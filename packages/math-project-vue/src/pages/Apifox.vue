<script setup lang="ts">
import type { Pet, Response } from '../types/type'
import { ref } from 'vue'
// const baseURL = 'http://127.0.0.1:4523/m1/5224793-4891576-default'
const baseURL = import.meta.env.VITE_API_URL

const pet = ref<Pet>()

async function getData() {
  const res = await fetch(`${baseURL}/pet/1`)
  // const data = await res.json()
  const json: Response<Pet> = await res.json()
  // console.log('data :>>', data)
  pet.value = json.data
}
</script>

<template>
  <div>
    <button btn @click="getData">
      获取宠物数据
    </button>
    <div w-full>
      <div>姓名：{{ pet?.name }}</div>
      <div>类别：{{ pet?.category.name }}</div>
      <!-- <img v-for="(url, index) in pet?.photoUrls" :key="index" :src="url" alt=""> -->
    </div>
  </div>
</template>
