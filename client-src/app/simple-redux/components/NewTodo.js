import React from 'react'
import { connect } from 'react-redux'

var NewTodo = React.createClass({
  render: function() {
    const onChange = this.props.onChange;
    const onClick = this.props.onClick;

    return (
      <div onClick={onClick}>
        <h3>New</h3>
        <input type="text" onKeyUp={onChange}/>
      </div>
    )
  }
});

export default NewTodo
