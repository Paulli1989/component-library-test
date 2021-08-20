<template>
  <div>
    <label v-if="label" class="mb-2 font-semibold block">
      {{ label }}
    </label>
    <div 
      class="dropdown relative cursor-pointer border-2" 
      :class="open ? 'shadow-sm rounded-t-lg border-transparent' : 'rounded-lg border-grey-300 hover:border-grey-100'"
      @click="open = !open"
      ref="dropdownRef"
    >
      <div 
        class="flex justify-between items-center font-semibold py-4 px-5 z-10 relative bg-white dropdown-current" 
        :class="open ? 'rounded-t-lg' : 'rounded-lg hover:bg-grey-100 hover:text-blue dropdown-current-not-active'"
      >
        {{ selected.name }}
        <svg class="ml-4" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.59 0.444534L6 5.02453L1.41 0.444534L0 1.85453L6 7.85453L12 1.85453L10.59 0.444534Z" fill="#141414"/>
        </svg>
      </div>
      <div 
        v-if="open" 
        class="options absolute top-full bg-white shadow-sm w-full z-0 py-2 rounded-b-lg border-t border-grey-300"
        :class="{'active' : open}"
      >
        <div 
          v-for="(option, index) in options" 
          class="font-semibold px-5 py-2" 
          :class="modelValue === option.value ? 'text-blue' : ''" :key="index" @click="handleClick(option)"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export type Option = {
  name: string,
  value: any
}

export type Options = Option[]

export default defineComponent({
  name: 'Select',
  props: {
    modelValue: { type: [String, Object, Number, Array] },
    options: { type: Array as PropType<Options>, required: true },
    label: { type: String, required: false }
  },
  emits: [ 'update:modelValue', 'change' ],
  setup(props, { emit }) {
    const dropdownRef = ref(null)
    const open = ref(false)

    onClickOutside(dropdownRef, () => {
      open.value = false
    })

    const handleClick = (option: Option) => {
      emit('change', option)
      emit('update:modelValue', option.value)
    }

    const selected = computed(() => props.options.find((o) => JSON.stringify(o.value) === JSON.stringify(props.modelValue)) || props.options[0])

    return {
      handleClick,
      open,
      dropdownRef,
      selected
    }
  }
})
</script>

<style scoped>
.dropdown {
  min-width: 240px;
}
.options.active {
  width: calc(100% + 4px);
  left: -2px;
}

.dropdown-current-not-active:hover svg path {
  @apply fill-current text-blue;
}
</style>