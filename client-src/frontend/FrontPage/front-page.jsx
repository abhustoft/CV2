import * as React from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import {connect} from 'react-redux';

import Circle from './components/circle.jsx'
import PersonButton from './components/personButton.jsx'
import Header from './components/header.jsx'
import Title from './components/title.jsx'
import Name from './components/name.jsx'
import Projects from '../Projects/projects.jsx'
import Tech from   '../Tech/tech.jsx'
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

  function lazyLoadComponent(lazyModule) {
    return (location, cb) => {
      lazyModule(module => {
         cb(null, module);
         // cb(null, props => <module {...props} items='myItem' />)
      })
    }
  }

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
      <Route path='/career'                     getComponent={lazyLoadComponent(Career)}   />
      <Route path='/person'   user={props.user} getComponent={lazyLoadComponent(Person)}   />
      <Route path='/projects'                   getComponent={lazyLoadComponent(Projects)} />
      <Route path='/tech'                       getComponent={lazyLoadComponent(Tech)}     />
      <Route path='*' component={NotFound} />
    </Router>
  )
};

function mapStateToProps(state) {
    console.log('state to map:', state);
  return {
    user: state.user,
    repos: state.gitHub_repositories
  };
}

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
