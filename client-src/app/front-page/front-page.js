import * as React from 'react';
import * as ReactDom from 'react-dom';
import {MainContent} from '../main-content/main-content';

var FrontPage = React.createClass({

  loadProfileText: function() {
    fetch('/api/ProfileTexts')
      .then(response => response.json())
      .then(json => {
        this.setState({profileTexts: json});
      });
  },

  loadName: function() {
    fetch('/api/Names')
      .then(response => response.json())
      .then(json => {
        this.setState({name: json});
      });
  },

  getInitialState: function() {
    return {
      profileTexts: [],
      name: []};
  },

  componentDidMount: function() {
    this.loadProfileText();
    this.loadName();
  },
  render: function() {
    return (
      <div className="front-page">
        <MainContent
          profileTexts = {this.state.profileTexts}
          name = {this.state.name}/>
      </div>
    );
  }
});

export {FrontPage}
