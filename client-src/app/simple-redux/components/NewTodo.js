import React from 'react'
import { connect } from 'react-redux'

var NewTodo = React.createClass({
  render: function() {
    const {onChange, onClick, editMe} = this.props;
    const colorClass = editMe.edit ? 'blue' : 'grey';
    const divStyle = {color: colorClass};
    return (
      <div onClick={onClick}>
        <h3 style={divStyle} className={colorClass}>New</h3>
        <input type="text" onKeyUp={onChange}/>
      </div>
    )
  }
});

export default NewTodo
