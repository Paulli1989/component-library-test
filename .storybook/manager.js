import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import logo from './logo.svg'

const theme = create({
  base: 'light',
  brandTitle: 'Cookiebot',
  brandUrl: 'https://cookiebot.com',
  brandImage: logo,
})

addons.setConfig({
  theme: theme,
})