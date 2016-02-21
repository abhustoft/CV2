import React from 'react'
import { connect } from 'react-redux'

var NewTodo = React.createClass({
  render: function() {
    const {onChange, onClick, editMe} = this.props;
    const colorClass = editMe.edit ? 'blue' : 'grey';
    const divStyle = {color: colorClass};
    return (
      <div>
        <h3 style={divStyle}
            className={colorClass}
            onClick={onClick}>
          New
        </h3>
        <input type="text" onKeyUp={onChange}/>
      </div>
    )
  }
});

export default NewTodo
