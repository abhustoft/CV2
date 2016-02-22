import {combineReducers} from  'redux'

function editReducer(state = {'on': false}, action) {
  switch (action.type) {
    case 'editNew':
      return Object.assign({}, {'on': !state.on})
    default:
      return state
  }
}

function photoReducer(state = {'show': true}, action) {
  switch (action.type) {
    case 'togglePhoto':
      return Object.assign({}, {'show': !state.show})
    default:
      return state
  }
}

const rootReducer = combineReducers({
  editing: editReducer,
  showingPhoto: photoReducer
})

export default rootReducer;
