import * as React  from 'react';
import injectSheet from 'react-jss'

import Circle       from './circle.jsx'
import Header       from './header.jsx'
import Title        from './title.jsx'
import Name         from './name.jsx'
import PersonButton from './person-button.jsx'

import styles from './home-styles';

const Home = ({classes}) =>
    <div className={classes.home}>
        <Header>
            <Title>CV</Title>
            <Name>Alf Bjørn Hustoft</Name>
            <p>Full CV in an app! Press the buttons to see detailed information on employment record, projects I have worked on, technologies I master and have interest in and a general description of my person.</p>
        </Header>
        <PersonButton>Myself</PersonButton>
        <Circle page="career">Career</Circle>
        <Circle page="projects">Projects</Circle>
        <Circle page="tech">Tech</Circle>
    </div>;

export default injectSheet(styles)(Home);
