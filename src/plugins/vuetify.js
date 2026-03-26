// src/plugins/vuetify.js

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        colors: {
          background: '#e8e0d1',
          primary: '#993939',
          secondary: '#6e6e6e'
        }
      }
    }
  }
})