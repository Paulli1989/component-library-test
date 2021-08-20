import { action } from '@storybook/addon-actions'
import Button from '../components/Button.vue'

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: { 
      type: 'select', 
      description: "<code style='font-size: 11px; margin-right: 5px;'>'primary'</code><code style='font-size: 11px; margin-right: 5px;'>'secondary'</code><code style='font-size: 11px; margin-right: 5px;'>'alert'</code> :", 
      options: ['primary', 'secondary', 'alert'] 
    },
    size: {
      description: "<code style='font-size: 11px; margin-right: 5px;'>'small'</code><code style='font-size: 11px; margin-right: 5px;'>'medium'</code><code style='font-size: 11px; margin-right: 5px;'>'large'</code> :", 
      control: { type: 'select', options: ['small', 'medium', 'large'] } 
    },
    type: { 
      description: "<code style='font-size: 11px; margin-right: 5px;'>'button'</code><code style='font-size: 11px; margin-right: 5px;'>'link'</code><code style='font-size: 11px; margin-right: 5px;'>'submit'</code> :",
      control: { type: 'select', options: ['button', 'link', 'submit'] } 
    },
    disabled: { control: { type: 'boolean' } }
  }
}

const Template = (args) => ({
  components: { Button },
  setup() {
    const handleClick = action('clicked')
    return { args, handleClick }
  },
  template: '<Button v-bind="args" @click="handleClick" />',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  disabled: false,
  variant: 'primary',
  size: 'medium',
  type: 'button'
}
Primary.parameters = {
  docs: { source: { code: `<Button label="Button" />` } },
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  variant: 'secondary'
}
Secondary.parameters = {
  docs: { source: { code: '<Button label="Button" variant="secondary" />' } },
}

export const Alert = Template.bind({})
Alert.args = {
  label: 'Button',
  variant: 'alert'
}
Alert.parameters = {
  docs: { source: { code: '<Button label="Button" variant="alert" />' } },
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}
Large.parameters = {
  docs: { source: { code: '<Button label="Button" size="large" />' } },
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
Small.parameters = {
  docs: { source: { code: '<Button size="small" label="Button" />' } },
}