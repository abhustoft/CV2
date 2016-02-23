import {combineReducers} from  'redux'
import { ADD_PROJECT, TOGGLE_PROJECT } from './actions'

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

function projectReducer(state, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        id: action.id,
        name: action.name,
        hide: true
      }

    case TOGGLE_PROJECT:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        hide: !state.hide
      }

    default:
      return state
  }
}


function projectsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_PROJECT':
      const alreadyInState = state.findIndex(project => {
        return project.id === action.id
      })

      if (alreadyInState > -1) {
        return state
      }

      return [
        ...state,
        projectReducer(undefined, action)
      ]
    case 'TOGGLE_PROJECT':
      return state.map(project => {
        projectReducer(project, action)
      })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  editing: editReducer,
  showingPhoto: photoReducer,
  showProjects: projectsReducer
})

export default rootReducer;
