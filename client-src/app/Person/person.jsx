import * as React from 'react';
import {connect} from 'react-redux';
import styles from './person.styl';

class Person extends React.Component {

    componentDidMount() {
        this.props.dispatch({type: 'WARP_PERSON'});
    }

    render() {
        return (
            <div className={styles.personStyle}>
                <div>
                    <h3>This is my person: {this.props.user}</h3>
                    {this.props.warpPersonButton && <div>warp me</div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Person);
