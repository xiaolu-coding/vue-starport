<script setup lang="ts">
let size = $(useStorage('size', 100))

function enlarge() {
  size += 20
}

</script>

<template>
  <div flex="~ col" items-center>
    <div>
      <div>Foo</div>
      <div>
        <RouterLink
          class="m-3 text-sm btn"
          to="/"
        >
          Back
        </RouterLink>
        <button @click="enlarge()">
          Enlarge
        </button>
      </div>
      <div m10>
        <FloatProxy :style="{width: size + 'px', height: size + 'px'}" rounded="1/2" />
      </div>
    </div>
  </div>
</template>
