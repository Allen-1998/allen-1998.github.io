<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <div v-show="isDark" i-ri-moon-line />
    <div v-show="!isDark" i-ri-sun-line />
  </a>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/logics'
</script>
