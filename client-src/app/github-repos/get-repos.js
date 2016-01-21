import * as React from 'react';
import * as ReactDom from 'react-dom';

var GetRepos = React.createClass({
  render: function() {
    return (
      <form className="repoForm" onSubmit={this.props.handleSubmit}>
        <input className="repoButton" type="submit" value="Get repos" />
      </form>
    );
  }
});

export {GetRepos}
