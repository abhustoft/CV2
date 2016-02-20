import React from 'react'
import { connect } from 'react-redux'

var NewTodo = React.createClass({
  render: function() {
    const onChange = this.props.onChange;
    const onClick = this.props.onClick;
    const edit = this.props.editMe;
    console.log('NewTodo got props: ', this.props);
    var divStyle = {
      color: edit ? 'blue' : 'grey'
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
