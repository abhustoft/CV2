import * as React from 'react';

class Person extends React.Component {

  render() {
    const careerStyle = {};
    console.log('Person props:', this.props);
      this.props.route.props.dispatch({type: 'WARP_PERSON_BUTTON'});

    return (
      <div style={careerStyle}>
        <div>
          <h3>This is my person: {this.props.route.props.user}</h3>
        </div>
      </div>
    )
  }
}

module.exports = Person;
