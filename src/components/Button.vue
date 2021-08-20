<template>
  <button class="btn" :type="type === 'link' ? 'button' : type" :class="classes" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium'
    },
    type: {
      type: String as PropType<'button' | 'link' | 'submit'>,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String as PropType<'primary' | 'secondary' | 'alert'>,
      default: 'primary'
    }
  },
  setup(props) {
    return {
      classes: computed(() => ([
        `btn-type-${props.type}`,
        props.type !== 'link' ? `btn-size-${props.size}` : '',
        props.type !== 'link' ? `btn-${props.variant}` : '',
      ]))
    }
  },
})
</script>

<style scoped>
  .btn {
    @apply text-sm text-center inline-block font-semibold rounded border-transparent border-2 py-3 px-4 leading-5 cursor-pointer;
  }
  .btn-primary {
    @apply bg-blue text-white border-blue;
  }
  .btn-alert {
    @apply bg-red text-white border-red;
  }
  .btn-secondary {
    @apply text-black border-blue;
  }
  .btn-size-small {
    @apply text-4xs py-2;
  }
  .btn-size-large {
    @apply px-8 py-3;
  }
  .btn:disabled:not(.btn-type-link) {
    @apply border-2 border-grey-200 text-grey-500 opacity-50;
  }
  .btn:disabled:not(.btn-secondary):not(.btn-type-link) {
    @apply bg-grey-200;
  }
  .btn-type-link {
    @apply text-blue;
  }
  .btn-type-link:disabled {
    @apply text-grey-500 opacity-50;
  }
</style>
