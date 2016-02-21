import * as React from 'react';
import * as ReactDom from 'react-dom';

var Description = React.createClass({

  render: function() {
    const
      name = this.props.name.map(({FullName}) => FullName),
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
      <div className="cv-description">
        <div className="cv-description__heading">Konsulentprofil</div>
        <div className="cv-description__name">{name}</div>
        {paragraphs}
      </div>
    );
  }
});

export {Description}
