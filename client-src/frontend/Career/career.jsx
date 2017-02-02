import * as React from 'react';

class Career extends React.Component {

    componentDidMount() {
        console.log('Me mounted:', this.props);
        // this.props.dispatch({type: 'CAREER_MOUNTED'});
    }

    render() {
        return (
            <div className='career'>
                <div>
                    <h3>This is my career</h3>
                </div>
            </div>
        )
    }
}

module.exports = Career;
