import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import Todos from './components/Todos'


const initialState = {
  todosList: ['First and foremost', ' Second'],
  edit: {edit: true}
}

const store = configureStore(initialState);

store.subscribe(() => {
  console.log('Current state: ', store.getState());
});

let reactElement = document.getElementById('simple-redux')
render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  reactElement
)
