import * as React from 'react';
import {Link} from 'react-router';

export default class PersonButton extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    const children = this.props.children;
    const personStyle = {
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'space-around',
      width: '30vw',
      height: '30vw',
      backgroundColor: 'hotpink',
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

