import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyle } from './core/styles/global'
import App from './App'

ReactDOM.render(
  <>
    <GlobalStyle />
      <App />
  </>,
  document.getElementById('root')
)
