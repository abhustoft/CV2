import { compose, createStore } from 'redux';
import rootReducer from './reducers'

//export default createStore(rootReducer)

import persistState from 'redux-localstorage'

const createPersistentStore = compose(
  persistState()
)(createStore)

export default createPersistentStore(rootReducer)
