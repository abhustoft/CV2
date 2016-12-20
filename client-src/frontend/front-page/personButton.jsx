import * as React from 'react';
import {Link} from 'react-router';
import PersonLoader from '../Person/personLoader.js'

export default class PersonButton extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    PersonLoader().then((deps) => {
      console.log('Loaded: ', deps);
      });
  }

  render() {
    const personStyle = {
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'space-around',
      width: '30vw',
      height: '30vw',
      backgroundColor: 'blue',
      marginTop: '5vw'
    };

    const center = {
      alignSelf: 'center'
    };

    return (
      <div style={personStyle} role="button">
        <div style={center}>
          <h3>
            <Link to="person">{children}</Link>
          </h3>
        </div>
      </div>
    )
  }
};

