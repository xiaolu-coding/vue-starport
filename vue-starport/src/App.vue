<script setup lang="ts">
import { TheImageContainer } from './composables/image'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <TheNav />
  <main font-sans text="center gray-700 dark:gray-200">
    <router-view />
  </main>
  <TheImageContainer />
  <Footer />
</template>
