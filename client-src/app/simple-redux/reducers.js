import Immutable from 'immutable'
import {combineReducers} from  'redux'

function listReducer(state = ['Code More!'], action) {
  switch(action.type) {
    case 'addTodo':
      return [...state, action.todo]

    case 'editNew':
      return [...state, action.txt]

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
