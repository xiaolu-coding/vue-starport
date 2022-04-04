<script setup lang="ts">
let size = $(useStorage('size', 100))

function enlarge() {
  size += 20
}

function reset() {
  size = 100
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
        <button btn @click="enlarge()">
          Enlarge
        </button>
        <button btn @click="reset()">
          Reset
        </button>
      </div>
      <div m10 flex="~ col sm:row gap-4" items-center>
        <FloatProxy :style="{width: size + 'px', height: size + 'px'}" rounded="1/2" />
        <p flex-1>
          dsakdjkasd sdjajsdkasdw wo asdakdja edwposa, asjdkasjdkak ,asdalsdkalsd, adlkadlakwadasdas,asdkaskdjwjaksdkaslkdlakdzxcas. asdadadk adkal,.casd
        </p>
      </div>
    </div>
  </div>
</template>
