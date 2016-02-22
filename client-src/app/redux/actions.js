export const ADD_PROJECT = 'ADD_PROJECT'
export const TOGGLE_PROJECT = 'TOGGLE_PROJECT'


export function editNew(txt){
  return {
    type: 'editNew',
    txt
  }
}

export function togglePhoto(){
  return {type: 'togglePhoto'}
}

export function showProjects(id){
  return {type: TOGGLE_PROJECT, id}
}

export function addProject(id){
  return {
    type: ADD_PROJECT,
    hide: true,
    id
  }
}




