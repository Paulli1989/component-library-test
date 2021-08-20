<template>
  <div>
    <label v-if="label" class="mb-2 font-semibold block">
      {{ label }}
    </label>
    <input
      :type="type"
      class="w-full"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    type: { type: String as PropType<'text' | 'email' | 'password'>, default: 'text', required: false },
    label: { type: String, required: false },
    placeholder: { type: String, default: '' },
    modelValue: { type: String }
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const onChange = (e: any) => { // should be e: Event, but throws error
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    return {
      onChange
    }
  }
})
</script>