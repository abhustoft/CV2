import { createStore } from 'redux';
import rootReducers from './reducers'

// Replaced this:
//export default createStore(rootReducers)

//with this to enable Redux tools in Chrome:
export default function configureStore(initialState) {
  const store = createStore(rootReducers, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}
