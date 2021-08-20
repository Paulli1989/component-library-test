<template>
  <div 
    class="switch bg-black rounded-full flex transition-all duration-500 items-center"
    :class="[
      toggled ? 'toggled' : '', 
      size, 
      disabled ? 'disabled' : ''
    ]"
    @click="handleToggle"
    :style="{ background: toggled && !disabled ? background : '' }"
  >
    <div class="circle rounded-full bg-white shadow-xs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  name: 'Switch',
  props: {
    disabled: { type: Boolean, default: false, required: false },
    background: { type: String, required: false },
    modelValue: { type: Boolean, default: false },
    size: { type: String as PropType<'small' | 'medium'>, default: 'medium', required: false }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const toggled = ref(props.modelValue)

    const handleToggle = () => {
      if(props.disabled) return
      toggled.value = !toggled.value
      emit('update:modelValue', toggled.value)
      emit('change', toggled.value)
    }

    return {
      toggled,
      handleToggle
    }
  }
})
</script>

<style scoped>
  .switch {
    @apply justify-start cursor-pointer;
    width: 3.5rem;
    height: 2rem;
    padding: 0.25rem;
  }
  .switch.small {
    width: 1.875rem;
    height: 1.125rem;
    padding: 0.0625rem 0.125rem;
  }

  .switch .circle {
    width: 1.5rem;
    height: 1.5rem;
  }

  .switch.small .circle {
    width: 0.875rem;
    height: 0.875rem;
  }

  .switch.toggled {
    @apply justify-end bg-blue;
  }

  .switch.disabled {
    @apply bg-grey-200 cursor-auto;
  }
</style>