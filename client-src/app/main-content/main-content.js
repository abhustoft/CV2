import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Logo} from '../logo/logo';
import {Photo} from '../photo/photo';
import {Profile} from '../profile/profile';
import {CondensedInfo} from '../condensed-info/condensed-info';

var MainContent = React.createClass({
  render: function() {
    return (
      <div className="main-content">
        <Logo />
        <Profile profileTexts = {this.props.profileTexts}
        name = {this.props.name}/>
        <Photo />
        <CondensedInfo />
      </div>
    );
  }
});

export {MainContent}
