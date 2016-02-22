import * as React from 'react';
import * as ReactDom from 'react-dom';
import { connect } from 'react-redux'

import {Logo} from '../logo/logo';
import {Photo} from '../photo/photo';
import {Description} from '../description/description';
import {KeyInfo} from '../keyInfo/keyInfo';

import { editNew } from '../redux/actions'

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
    const {dispatch, myState} = this.props
    const sendIt = function () {
      dispatch(editNew('clicked to edit'));
    }
    return (
      <div className="cv-profile" onClick={sendIt}>
        <Logo />
        <Description
          dispatch={dispatch}
          profileTexts = {this.state.profileTexts}
          name = {this.state.name}
        />
        <Photo dispatch={dispatch} showPhoto={myState.showingPhoto}/>
        <KeyInfo />
      </div>
    );
  }
});


function mapStateToProps(myState) {
  return {
    myState
  }
}

export default connect(mapStateToProps)(MainContent)
