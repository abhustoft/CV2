import * as React from 'react';
import {Link} from 'react-router';
import injectSheet from 'react-jss'

import styles from './person-button-styles.js';

class PersonButton extends React.Component {

    constructor(props) {
        super(props);
    }

  render() {
    const children = this.props.children;
    const center = {
      alignSelf: 'center'
    };

    return (
      <div className={this.props.classes.personButton} role="button">
        <div style={center}>
          <h3>
            <Link to="person">{children}</Link>
          </h3>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(PersonButton);

