import React from 'react'
import { connect } from 'react-redux'

var NewTodo = React.createClass({
  render: function() {
    const {onChange, onClick, editMe} = this.props;
    const divStyle = {
      color: editMe.edit ? 'blue' : 'grey'
    };
    return (
      <div onClick={onClick}>
        <h3 style={divStyle}>New</h3>
        <input type="text" onKeyUp={onChange}/>
      </div>
    )
  }
});

export default NewTodo
