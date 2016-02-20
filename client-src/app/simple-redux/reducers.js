import Immutable from 'immutable'
import {combineReducers} from  'redux'

function listReducer(state = Immutable.List(['Code More!']), action) {
  switch(action.type) {
    case 'addTodo':
      console.log('Handle action addTodo, set state ', action);
      return state.unshift(action.todo)
    case 'editNew':
      console.log('Handle action editNew, set state ', action);
      return state.unshift(action.txt)
    default:
      return state
  }
}

function editReducer(state = {'edit': false}, action) {
  switch (action.type) {
    case 'editNew':
      return Object.assign({}, {'edit': !state.edit})
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todosList: listReducer,
  edit: editReducer
})

export default rootReducer;
