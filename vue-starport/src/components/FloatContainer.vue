<script setup lang="ts">
import type { StyleValue } from 'vue'
import { metadata, proxyEL } from '~/composables/floating'

const rect = reactive(useElementBounding(proxyEL))

const style = computed((): StyleValue => {
  return {
    transition: 'all .5s ease-in-out',
    position: 'fixed',
    left: `${rect?.left ?? 0}px`,
    top: `${rect?.top ?? 0}px`,
  }
})
</script>

<template>
  <div :style="style">
    <slot v-bind="metadata.attrs" />
  </div>
</template>
