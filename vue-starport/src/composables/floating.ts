/* eslint-disable vue/one-component-per-file */
import { h } from 'vue'
import type { Component, StyleValue } from 'vue'

interface FloatingOptions {
  durations: number
}

export function createFloating<T extends Component>(component: T, options: FloatingOptions = {}) {
  const { durations = 1500 } = options

  const metadata = reactive<any>({
    props: {},
    attrs: {},
  })

  const proxyEL = ref<HTMLElement | null>()
  // 创建container
  const container = defineComponent({
    setup() {
      let rect = $ref<DOMRect | undefined>()

      const style = computed((): StyleValue => {
        const fixed: StyleValue = {
          transition: `all ${durations}ms ease-in-out`,
          position: 'fixed',
        }
        if (!rect || !proxyEL.value) {
          return {
            position: 'fixed',
            opacity: 0,
            pointerEvents: 'none',
          }
        }
        return {
          ...fixed,
          left: `${rect.left ?? 0}px`,
          top: `${rect.top ?? 0}px`,
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

      return () => h('div', { style: style.value }, [
        h(component, metadata.attrs),
      ])
    },
  })
  // 创建proxy
  const proxy = defineComponent({
    setup(props, ctx) {
      const attrs = useAttrs()
      const el = ref<HTMLElement>()

      metadata.attrs = attrs
      // 挂在时获取el信息，Contianer那里通过useElementBounding监听proxyEl，去更新style
      onMounted(() => {
        proxyEL.value = el.value
      })
      // 卸载的话，清空el
      onBeforeUnmount(() => {
        // if (proxyEL.value === el.value)
        // proxyEL.value = null
      })

      return () => h('div', { ref: el }, [
        ctx.slots.default
          ? h(ctx.slots.default)
          : null,
      ])
    },
  })

  return {
    container,
    proxy,
  }
}
