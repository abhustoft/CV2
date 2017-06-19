import * as React from 'react';
import {connect} from 'react-redux';
import injectSheet from 'react-jss'
import styles from './styles.js';

class Person extends React.Component {

    constructor(props) {
        super(props);

        // fetch('/api/Names')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({name: json});
        //     });

        fetch('/api/ProfileTexts')
            .then(response => response.json())
            .then(json => {
                console.log('profile:', json);
                this.setState({profileTexts: json});
            });
    }

    componentDidMount() {
        this.props.dispatch({type: 'WARP_PERSON'});
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={this.props.classes.person}>
                <div className={this.props.classes.photo}>
                    The photo
                </div>

                <div className={this.props.classes.about}>
                    <h3>about</h3>
                </div>

                <ul className={this.props.classes.profile}>
                    profile
                </ul>


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
