import * as React from 'react';

class Projects  extends React.Component {

    constructor(props) {
        super(props);
        fetch('/api/Projects')
            .then(response => response.json())
            .then(json => {
                console.log('Projects fetched: ', json);
                this.setState({projects: json});
                json.forEach( (project) => {
                    console.log('dispatch:', project.Company);
                    // this.props.dispatch(addProject(project.Company, project.id))
                })
            });
    }

    render() {
        const careerStyle = {};

        return (
            <div style={careerStyle}>
                <div>
                    <h3>This is my project</h3>
                </div>
            </div>
        )
    };
}

module.exports = Projects;
