import Select from '../components/Select.vue'
import { action } from '@storybook/addon-actions'
import { ref } from 'vue'

export default {
  title: 'UI/Select',
  component: Select,
  argTypes: {
  },
}

const options = [
  {
    name: 'Option 1',
    value: { name: '1231231', date: 'awawd' }
  },
  {
    name: 'Option 2',
    value: { name: 'as', date: 'asdadsasd' }
  }
]

const Template = (args) => ({
  components: { Select },
  setup() {
    const onChange = action('change')
    const state = ref(options[0])
    return { args, onChange, state }
  },
  template: '<Select v-bind="args" v-model="state" @change="onChange" />',
})

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  options: options
}
Default.parameters = {
  docs: { source: { code: `<Select label="Label" />` } },
}
