import * as React from 'react';         // eslint-disable-line no-unused-vars
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux'  // eslint-disable-line no-unused-vars

import FrontPage from './FrontPage/front-page.jsx'; // eslint-disable-line no-unused-vars

import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './FrontPage/state/reducers'
import frontpageSaga from './FrontPage/state/sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(frontpageSaga);

window.setTimeout(store.dispatch, 6000, {type: 'FETCH_GITHUB_REPOSITORIES', user: 'abhustoft'});
store.dispatch({type: 'LOAD_COMPONENTS'});

ReactDom.render(
  <Provider store={store}>
    <FrontPage />
  </Provider>,
  document.getElementById('front-page')
);

