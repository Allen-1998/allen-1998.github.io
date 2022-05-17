<template>
  <div select-none cursor-pointer op70 title="Toggle Color Scheme" @click="toggleDark">
    <div v-show="isDark" i-ri-moon-line />
    <div v-show="!isDark" i-ri-sun-line />
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/logics'
</script>
