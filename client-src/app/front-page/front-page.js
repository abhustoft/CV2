import * as React from 'react';
import * as ReactDom from 'react-dom';
import {MainContent} from '../main-content/main-content';
import {CondensedInfo} from '../condensed-info/condensed-info';

var FrontPage = React.createClass({

  loadProfileText: function() {
    fetch('/api/ProfileTexts')
      .then(response => response.json())
      .then(json => {
        this.setState({profileTexts: json});
        console.log(json);
      });
  },

  getInitialState: function() {
    return {profileTexts: []};
  },

  componentDidMount: function() {
    this.loadProfileText();
  },
  render: function() {
    return (
      <div className="front-page">
        <MainContent profileTexts = {this.state.profileTexts} />
        <CondensedInfo />
      </div>
    );
  }
});

export {FrontPage}
