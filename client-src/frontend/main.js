import * as React from 'react';
import * as ReactDom from 'react-dom';


import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './front-page/reducers'
import mySaga from './front-page/sagas'

import { helloSaga } from './front-page/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);
sagaMiddleware.run(helloSaga)
store.dispatch({type: 'START', text: 'hei sann'});
store.dispatch({type: 'USER_FETCH_REQUESTED', user: 'abhustoft'});



import FrontPage from './front-page/front-page.jsx';

ReactDom.render(
  <FrontPage />,
  document.getElementById('front-page')
);

