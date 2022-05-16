<template>
  <router-view />
</template>

<script setup lang="ts">
const route = useRouter().getRoutes()
console.log(route)
</script>
<style lang="scss"></style>
