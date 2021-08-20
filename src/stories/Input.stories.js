import Input from '../components/Input.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    type: { 
      type: 'select', 
      description: "<code style='font-size: 11px; margin-right: 5px;'>'text'</code><code style='font-size: 11px; margin-right: 5px;'>'password'</code><code style='font-size: 11px; margin-right: 5px;'>'email'</code> :",
      options: ['text', 'email', 'password'] 
    },
  },
}

const Template = (args) => ({
  components: { Input },
  setup() {
    const onChange = action('input')
    return { args, onChange }
  },
  template: '<Input v-bind="args" @input="onChange" />',
})

export const Default = Template.bind({})
Default.args = {
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder'
}
Default.parameters = {
  docs: { source: { code: `<Input label="Label" placeholder="Placeholder" />` } },
}
