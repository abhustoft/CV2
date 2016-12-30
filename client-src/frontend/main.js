import * as React from 'react';         // eslint-disable-line no-unused-vars
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux'  // eslint-disable-line no-unused-vars

import FrontPage from './front-page/front-page.jsx'; // eslint-disable-line no-unused-vars

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './front-page/state/reducers'
import mySaga from './front-page/state/sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

window.setTimeout(store.dispatch, 6000, {type: 'FETCH_GITHUB_REPOSITORIES', user: 'abhustoft'});
store.dispatch({type: 'LOAD_COMPONENTS'});

ReactDom.render(
  <Provider store={store}>
    <FrontPage />
  </Provider>,
  document.getElementById('front-page')
);

