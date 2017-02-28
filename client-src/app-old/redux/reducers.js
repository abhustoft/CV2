import {combineReducers} from  'redux'
import { ADD_PROJECT, TOGGLE_PROJECT, TOGGLE_DESCRIPTION } from './actions'

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


function descriptionReducer(state = {'hide': true}, action) {
  switch (action.type) {

    case TOGGLE_DESCRIPTION:

      const newState = {
        ...state,
        hide: !state.hide
      };
      console.log('Reducer returning:', state);
      return newState;

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
      };

    case TOGGLE_PROJECT:
      if (state.id !== action.id) {
        return state
      }

      const nyst = {
        ...state,
        hide: !state.hide
      };
      return nyst;

    default:
      return state
  }
}

function projectsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_PROJECT':
      const alreadyInState = state.findIndex(project => {
        return project.id === action.id
      });

      if (alreadyInState > -1) {
        return state
      }

      return [
        ...state,
        projectReducer(undefined, action)
      ];
    case 'TOGGLE_PROJECT':
      return state.map(project => {
        return projectReducer(project, action)
      });
    default:
      return state
  }
}


const rootReducer = combineReducers({
  editing: editReducer,
  showingPhoto: photoReducer,
  showProjects: projectsReducer,
  showDescription: descriptionReducer
});

export default rootReducer;
