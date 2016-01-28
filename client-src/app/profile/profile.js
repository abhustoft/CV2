import * as React from 'react';
import * as ReactDom from 'react-dom';

var Profile = React.createClass({

  render: function() {
    const
      name       = this.props.name.map(({FullName}) => FullName),
      paragraphs = this.props.profileTexts
        .map(function({Paragraph, Sequence}) {
          return (
            <div key={Sequence}>
              <p>{Paragraph}</p>
            </div>
          );
        })
        .sort((a, b) => {return a.key - b.key;});

      return (
      <div className="profile">
        <div className="consultant-heading">Konsulentprofil</div>
        <div className="consultant-name">{name}</div>
        {paragraphs}
      </div>
    );
  }
});

export {Profile}
