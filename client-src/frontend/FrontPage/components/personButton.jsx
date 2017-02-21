import * as React from 'react';
import {Link} from 'react-router';

import styles from './mystyle.css';

export default class PersonButton extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

  render() {
    console.log('styles:', styles);
    debugger
    const children = this.props.children;
    const center = {
      alignSelf: 'center'
    };

    return (
      <div className={styles.personButtonStyle} role="button">
        <div style={center}>
          <h3>
            <Link to="person">{children}</Link>
          </h3>
        </div>
      </div>
    )
  }
};

