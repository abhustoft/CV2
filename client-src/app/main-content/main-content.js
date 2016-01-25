import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Logo} from '../logo/logo';
import {Profile} from '../profile/profile';

var MainContent = React.createClass({
  render: function() {
    return (
      <div className="main-content">
        <Logo />
        <Profile />
      </div>
    );
  }
});

export {MainContent}