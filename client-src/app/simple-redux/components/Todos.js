import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo } from '../actions'
import { editNew } from '../actions'

var Todos = React.createClass({
  render: function() {
    const {dispatch, myState} = this.props
    return (
      <div>
        <h1>Todos</h1>
        <NewTodo onChange={e => {
            if(e.keyCode == 13){
              dispatch(addTodo(e.target.value))
              e.target.value = ''
            }
          }}
          onClick={e => {
            dispatch(editNew('cliecked to edit'));
          }}
          editMe = {myState.edit}
        />
        {myState.todosList.map((todo, index) => <p key={index}>{todo}</p>)}
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
