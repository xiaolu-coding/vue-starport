<script setup lang="ts">
import type { StyleValue } from 'vue'
import { metadata, proxyEL } from '~/composables/floating'

// const rect = reactive(useElementBounding(proxyEL))
let rect = $ref<DOMRect | undefined>()

const style = computed((): StyleValue => {
  return {
    transition: 'all .5s ease-in-out',
    position: 'fixed',
    left: `${rect?.left ?? 0}px`,
    top: `${rect?.top ?? 0}px`,
  }
})

function update() {
  rect = proxyEL.value?.getBoundingClientRect()
}

useMutationObserver(proxyEL, update, {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: true,
})

useEventListener('resize', update)

watchEffect(update)

</script>

<template>
  <div :style="style">
    <slot v-bind="metadata.attrs" />
  </div>
</template>
