import * as React from 'react';
import * as ReactDom from 'react-dom';

var WorkRoleForm = React.createClass({
  getInitialState: function() {
    return {company: '', text: ''};
  },

  handleCompanyChange: function(e) {
    this.setState({company: e.target.value});
  },

  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var company = this.state.company.trim();
    var text = this.state.text.trim();
    if (!text || !company) {
      return;
    }

    this.props.onCommentSubmit({company: company, text: text});
    this.setState({company: '', text: ''});
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
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

export {WorkRoleForm}
