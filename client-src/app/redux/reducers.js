import {combineReducers} from  'redux'

function editReducer(state = {'on': false}, action) {
  switch (action.type) {
    case 'editNew':
      return Object.assign({}, {'on': !state.on})

    default:
      return state
  }
}

const rootReducer = combineReducers({
  editing: editReducer
})

export default rootReducer;
