import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './GitHub/reducers'
import mySaga from './GitHub/sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);


window.setTimeout(store.dispatch, 4000, {type: 'FETCH_GITHUB_REPOSITORIES', user: 'abhustoft'});
//store.dispatch({type: 'FETCH_GITHUB_REPOSITORIES', user: 'abhustoft'});

import FrontPage from './front-page/front-page.jsx';

ReactDom.render(
  <Provider store={store}>
    <FrontPage />
  </Provider>,
  document.getElementById('front-page')
);

