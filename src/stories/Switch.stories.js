import Switch from '../components/Switch.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'UI/Switch',
  component: Switch,
  argTypes: {
    type: { 
      type: 'select', 
      description: "<code style='font-size: 11px; margin-right: 5px;'>'text'</code><code style='font-size: 11px; margin-right: 5px;'>'password'</code><code style='font-size: 11px; margin-right: 5px;'>'email'</code> :",
      options: ['text', 'email', 'password'] 
    },
  },
}

const Template = (args) => ({
  components: { Switch },
  setup() {
    const onChange = action('change')
    return { args, onChange }
  },
  template: '<Switch v-bind="args" @change="onChange" />',
})

export const Default = Template.bind({})
Default.args = {
}
Default.parameters = {
  docs: { source: { code: `<Switch />` } },
}
