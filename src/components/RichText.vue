<script setup lang="ts">
  export interface RichTextProps {
    label?: string
    placeholder?: string
    modelValue?: string
    rows?: number
  }

  const props = withDefaults(defineProps<RichTextProps>(), {
    rows: 6
  })

  const emit = defineEmits<{
    (e: 'input'): void
    (e: 'update:modelValue', value: string): void
  }>()

  const handleInput = (e: any) => { // should be e: Event, but throws error
    emit('input')
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
</script>
<template>
  <div>
    <label v-if="label" class="mb-2 font-semibold block">
      {{ label }}
    </label>
    <textarea
      class="w-full resize-none"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
      :rows="props.rows"
    />
  </div>
</template>