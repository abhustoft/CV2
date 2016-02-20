import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Todos from './components/Todos'

let reactElement = document.getElementById('simple-redux')
render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  reactElement
)
