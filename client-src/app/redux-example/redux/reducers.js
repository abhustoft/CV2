import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilterReducer(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case COMPLETE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: true
      }
    default:
      return state
  }
}

function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todoReducer(undefined, action)
      ]
    case COMPLETE_TODO:
      return state.map(t =>
        todoReducer(t, action)
      )
    default:
      return state
  }
}

const reducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  todos: todosReducer
})

// Equivalent with:
//function reducer(state, action) {
//  return {
//    a: doSomethingWithA(state.a, action),
//    b: processB(state.b, action),
//    c: c(state.c, action)
//  }
//}




export default reducer
