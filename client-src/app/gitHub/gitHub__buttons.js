import * as React from 'react';
import * as ReactDom from 'react-dom';

var GetRepos = React.createClass({
  render: function() {
    return (
      <div className="cv-gitHub__buttons">
        <button className="cv-gitHub__btn js-gitHub__btn--get">get repos</button>
        <button className="cv-gitHub__btn js-gitHub__btn--clear">Clear</button>
      </div>
    );
  }
});

export {GetRepos}
