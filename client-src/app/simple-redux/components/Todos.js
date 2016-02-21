import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo } from '../actions'
import { editNew } from '../actions'

var Todos = React.createClass({
  render: function() {
    const {dispatch, myState} = this.props
    const sendIt = function () {
      console.log('Clicked the profile');
      dispatch(editNew('clicked to edit'));
    }
    return (
      <div>
        <h1>Todos</h1>
        <NewTodo onChange={e => {
            if(e.keyCode == 13){
              dispatch(addTodo(e.target.value))
              e.target.value = ''
            }
          }}
          onClick={sendIt}
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
