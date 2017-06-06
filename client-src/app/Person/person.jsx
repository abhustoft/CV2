import * as React from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss'
import styles from './styles.js';

class Person extends React.Component {


    componentDidMount() {
        this.props.dispatch({type: 'WARP_PERSON'});
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={this.props.classes.person}>
                <div className={this.props.classes.about}>
                    <h3>This is my person: {this.props.user}</h3>
                    {this.props.warpPersonButton && <div>warp me</div>}
                </div>

                <div className={this.props.classes.myPhoto}>
                    The photo
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        warpPersonButton: state.warpPersonButton
    };
}

const mapDispatchToProps = (dispatch) => ({dispatch});

const styledPerson = injectSheet(styles)(Person);

export default connect(mapStateToProps, mapDispatchToProps)(styledPerson);
