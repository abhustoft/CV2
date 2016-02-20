import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo } from '../actions'
import { editNew } from '../actions'

var Todos = React.createClass({
  render: function() {
    const dispatch  = this.props.dispatch;
    const myToDos   = this.props.myState.todosList;
    const editState = this.props.myState.edit;

    console.log('This state for Todos: ', this.props);
    return (
      <div>
        <h1>Todos</h1>
        <NewTodo onChange={e => {
            if(e.keyCode == 13){
              console.log(e.target.value);
              dispatch(addTodo(e.target.value))
              e.target.value = ''
            }
          }}
          onClick={e => {
            console.log(e.target);
            dispatch(editNew('cliecked to edit'));
          }}
          editMe = {editState}
        />
        {myToDos.map((todo, index) => <p key={index}>{todo}</p>)}
      </div>
    )
  }
});

function mapStateToProps(myState) {
  return {
    myState
  }
}

export default connect(mapStateToProps)(Todos)
