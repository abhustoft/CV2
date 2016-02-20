export function addTodo(todo){
  return {
    type: 'addTodo',
    todo
  }
}

export function deleteTodo(index){
  return {
    type: 'addTodo',
    index
  }
}

export function editNew(txt){
  return {
    type: 'editNew',
    txt
  }
}

