import * as React from 'react';
import * as ReactDom from 'react-dom';

var WorkRoleForm = React.createClass({
  getInitialState: function() {
    return {company: '', description: ''};
  },

  handleCompanyChange: function(e) {
    this.setState({company: e.target.value});
  },

  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var company = this.state.company.trim();
    var description = this.state.description.trim();
    if (!description || !company) {
      return;
    }

    this.props.onCommentSubmit({company: company, description: description});
    this.setState({company: '', description: ''});
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Company"
          value={this.state.company}
          onChange={this.handleCompanyChange}
        />
        <input
          type="text"
          placeholder="Company description..."
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

export {WorkRoleForm}
