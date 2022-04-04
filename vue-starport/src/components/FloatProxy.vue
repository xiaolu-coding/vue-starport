<script setup lang="ts">

import { metadata, proxyEL } from '~/composables/floating'

const attrs = useAttrs()
const el = ref<HTMLElement>()

metadata.attrs = attrs
// 挂在时获取el信息，Contianer那里通过useElementBounding监听proxyEl，去更新style
onMounted(() => {
  proxyEL.value = el.value
})
</script>

<template>
  <div ref="el">
    <slot />
  </div>
</template>
