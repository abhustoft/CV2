import * as React from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import {connect} from 'react-redux';

import Circle from './circle.jsx'
import PersonButton from './personButton.jsx'
import Header from './header.jsx'
import Title from './title.jsx'
import Name from './name.jsx'
import Projects from '../Projects/projects.jsx'
import Tech from '../Tech/tech.jsx'
import Person from '../Person/person.jsx'
import Career from '../Career/career.jsx'

const FrontPage = (props) => {
  const style = {
    backgroundColor: 'bisque',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingBottom: '5vw',
    paddingLeft: '5vw',
    paddingRight: '5vw'
  };

  console.log('frontpage got props:', props);

  function lazyLoadComponent(lazyModule) {
    return (location, cb) => {
      lazyModule(module => cb(null, module))
    }
  }

  // Trigger webpack loader to immediately fetch the chunk
  //Person((reactComponent) => reactComponent);

  // Trigger delayed fetch of chunk
  window.setTimeout(Person, 2000, (reactComponent) => reactComponent);
  window.setTimeout(Career, 3000, (reactComponent) => reactComponent);

  const Home = () =>
    <div style={style}>
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

  const NotFound = () => (
    <h1>404.. This page is not found!</h1>);

  return (
    <Router history={hashHistory}>
      <Route path='/' component={Home} />
      <Route path='/career' component={lazyLoadComponent(Career)} />
      <Route path='/person' getComponent={lazyLoadComponent(Person)} />
      <Route path='/projects' component={Projects} />
      <Route path='/tech' component={Tech} />
      <Route path='*' component={NotFound} />
    </Router>
  )
};

function mapStateToProps(state) {
  console.log('Mapping state to props:', state);
  return {
    user: state.user,
    repos: state.gitHub_repositories
  };
}

export default connect(mapStateToProps)(FrontPage);
