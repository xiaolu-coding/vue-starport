<script setup lang="ts">
const a = $ref(false)
</script>

<template>
  <div overflow-hidden transition-all @click="a = !a">
    <img v-if="a" src="https://images.unsplash.com/photo-1617128610245-c348bcc22d36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80" alt="">
    <img v-else src="https://images.unsplash.com/photo-1648748275089-7bfbdc9582fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="">
  </div>
</template>
