<template>
  <Select 
    label="Select" 
    model-value="option1"
    :options="[
      {
        name: 'Option 1',
        value: 'option1'
      },
      {
        name: 'Option 2',
        value: 'option2'
      }
    ]"
    @change="test"
  />
  <RichText />
</template>

<script setup lang="ts">
import Select from './components/Select.vue'
import RichText from './components/RichText.vue'

const test = () => console.log('haha')
</script>