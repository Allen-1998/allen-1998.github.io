<template>
  <div select-none w-full>
    <NavBar />
    <main w-full h-screen box-border flex flex-col pt-12>
      <router-view flex-1 />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Allen' },
    { property: 'og:image', content: 'https://avatars.githubusercontent.com/u/73213399?v=4' },
    { name: 'description', content: "Allen's Portfolio" },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@allen1998___' },
  ],
})
</script>
<style lang="scss"></style>
