<script lang="ts" setup>
import type { ZhiHuHot, ZhiHuHotList } from '../types/zhihu'
import { onMounted, ref } from 'vue'


const list = ref<ZhiHuHot[]>([])

const getData = async () => {
  const url = '/api/v3/feed/topstory/hot-lists/total'
  const response = await fetch(url, { mode: 'no-cors' })
  const res: ZhiHuHotList = await response.json()
  list.value = res.data
}

onMounted(() => {
  getData()
})

const toggleHot = (id: number) => {
  window.open(`https://www.zhihu.com/question/${id}`)
}

const a = ref('⭐知乎⭐')
const arr = ref()
</script>


<template>
  <div class="mx-auto p-5">
    <!-- 知乎整个框架页面 -->
    <div class="mb-3 text-center text-13 text-gray-700">
      <!-- 知乎 -->
      {{ a }}
    </div>
    <div class="mb-7.5 flex flex-wrap gap-2.5">
      <div v-for="(item, index) in arr" :key="index" class="border rounded bg-gray-50 p-3.75 text-gray-400 md:border">
        {{ index }} - {{ item }}
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-5">
      <!-- 知乎中每一个内容的背景、边框样式 -->
      <section v-for="(item, index) in list" :key="item.id" class="w-72 flex flex-col border border-gray-400 rounded-md bg-yellow-100 p-3.75 shadow-sm hover:bg-yellow-200" @click="toggleHot(item.target.id)">
        <span>{{ index + 1 }}</span>
        <div class="flex-1">
          <h1 class="mb-1.25 truncate text-4xl text-blue-500">
            {{ item.target.title }}
          </h1>
          <p class="mb-2.5 truncate text-sm text-gray-500">
            {{ item.target.excerpt }}
          </p>
          <div class="text-sm text-gray-700">
            {{ item.detail_text }}
          </div>
        </div>
        <img :src="item.children[0].thumbnail" :alt="item.target.title" class="mt-2.5 h-60 w-full rounded-sm object-cover">
      </section>
    </div>
  </div>
</template>


<!-- <template>
  <div class="main-content">
    <div class="a-content">
      {{ a }}
    </div>
    <div class="arr-content">
      <div v-for="(item, index) in arr" :key="index" class="arr-item">
        {{ index }} - {{ item }}
      </div>
    </div>
    <div class="list">
      <section v-for="(item, index) in list" :key="item.id" class="hot" @click="toggleHot(item.target.id)">
        <span>{{ index + 1 }}</span>
        <div class="hot-content">
          <h1 class="ellipsis_2">
            {{ item.target.title }}
          </h1>
          <p class="ellipsis_1">
            {{ item.target.excerpt }}
          </p>
          <div style="text-align: start;" class="detail-text">
            {{ item.detail_text }}
          </div>
        </div>
        <img :src="item.children[0].thumbnail" alt="" class="hot-image">
      </section>
    </div>
  </div>
</template> -->

<!-- <style scoped>
.main-content {
    padding: 20px;
    margin: 0 auto;
}

.a-content {
    font-size: 28px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

.arr-content {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
}

.arr-item {
    border: 2px solid #ddd;
    padding: 8px 15px;
    border-radius: 10px;
    background-color: #f9f9f9;
}

.list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.hot {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    width: 300px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background-color:#fffff0;
}

.hot-content {
    flex: 1;
}

.ellipsis_1,.ellipsis_2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.ellipsis_2 {
    font-size: 18px;
    color: #007bff;
    margin-bottom: 5px;
}

.ellipsis_1 {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
}

.detail-text {
    font-size: 14px;
    color: #333;
}

.hot-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-top: 10px;
}
</style> -->
