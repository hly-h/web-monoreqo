<script lang="ts" setup>
import { showMsg } from '../components/MessageBox'

function openAleart() {
  showMsg({
    title: '标题',
    content: '1234567',
    closeable: true,
    showCancle: true,
    onCancel: () => {
      console.log('cancle :>>')
    },
    onConfirm: () => {
      console.log('Confirm :>>')
    },
  })
}
</script>

<template>
  <button @click="openAleart">
    openAleart
  </button>
</template>
