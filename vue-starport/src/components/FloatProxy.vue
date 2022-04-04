<script setup lang="ts">

import { metadata, proxyEL } from '~/composables/floating'

const props = defineProps<{

}>()

const attrs = useAttrs()
const el = ref<HTMLElement>()

metadata.props = props
metadata.attrs = attrs
// 挂在时获取el信息，Contianer那里通过useElementBounding监听proxyEl，去更新style
onMounted(() => {
  proxyEL.value = el.value
})
</script>

<template>
  <div ref="el" bg-gray-400:10>
    <slot />
  </div>
</template>
