import * as React from 'react';
import * as ReactDom from 'react-dom';
import {MainContent} from '../main-content/main-content';
import {CondensedInfo} from '../condensed-info/condensed-info';

var FrontPage = React.createClass({
  render: function() {
    return (
      <div className="front-page">
        <MainContent />
        <CondensedInfo />
      </div>
    );
  }
});

export {FrontPage}
