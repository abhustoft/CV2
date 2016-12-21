import * as React from 'react';

class Person extends React.Component {

  render() {

    const careerStyle = {};
    return (

      <div style={careerStyle}>
        <div>
          <h3>This is my person</h3>
        </div>
      </div>
    )
  }
}

module.exports = Person;
