import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Logo} from '../logo/logo';
import {Photo} from '../photo/photo';
import {Profile} from '../description/description';
import {KeyInfo} from '../keyInfo/keyInfo';

var MainContent = React.createClass({
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
      <div className="cv-profile">
        <Logo />
        <Profile profileTexts = {this.state.profileTexts}
        name = {this.state.name}/>
        <Photo />
        <KeyInfo />
      </div>
    );
  }
});

export {MainContent}
