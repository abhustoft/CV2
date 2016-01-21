import * as React from 'react';
import * as ReactDom from 'react-dom';

var WorkRoleForm = React.createClass({
  getInitialState: function() {
    return {company: '', companyDescription: ''};
  },

  handleCompanyChange: function(e) {
    this.setState({company: e.target.value});
  },

  handleCompanyDescriptionChange: function(e) {
    this.setState({companyDescription: e.target.value});
  },

  handleRoleChange: function(e) {
    this.setState({role: e.target.value});
  },

  handleRoleDescriptionChange: function(e) {
    this.setState({roleDescription: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();

    const
      company = this.state.company.trim(),
      companyDescription = this.state.companyDescription.trim(),
      role = this.state.role.trim(),
      roleDescription = this.state.roleDescription.trim();

    if (!companyDescription || !company) {
      return;
    }

    this.props.onRoleSubmit({
      company: company,
      companyDescription: companyDescription,
      role: role,
      roleDescription: roleDescription
    });

    this.setState(
      {
        company: '',
        companyDescription: '',
        role: '',
        roleDescription: ''
      });
  },

  render: function() {
    return (
      <form className="roleForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Company"
          value={this.state.company}
          onChange={this.handleCompanyChange}
        />
        <input
          type="text"
          placeholder="Company description..."
          value={this.state.companyDescription}
          onChange={this.handleCompanyDescriptionChange}
        />
        <input
        type="text"
        placeholder="Role"
        value={this.state.role}
        onChange={this.handleRoleChange}
      />
        <input
          type="text"
          placeholder="Role description..."
          value={this.state.roleDescription}
          onChange={this.handleRoleDescriptionChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

export {WorkRoleForm}
