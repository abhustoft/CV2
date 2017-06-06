import * as React from 'react';
import {Router, Route, hashHistory, browserHistory} from 'react-router';

import Projects from '../Projects/projects.jsx'
import Tech     from '../Tech/tech.jsx'
import Person   from '../Person/person.jsx'
import Career   from '../Career/career.jsx'
import Home     from './components/home.jsx'

const FrontPage = () => {

    function loadComponent(lazyModule) {
        return (location, cb) => {
            lazyModule(module => {
                // console.log('creating module? : ',module);
                cb(null, module,);

            })
        }
    }

    const isReactComponent = (obj) =>
        Boolean(obj && obj.prototype && Boolean(obj.prototype.isReactComponent));

    const component = (component) => {
        return isReactComponent(component) ? {component} :
            {getComponent: (loc, cb) => component(comp => cb(null, comp.default || comp))}
    };

    const NotFound = () => (
        <h1>404.. This page is not found!</h1>);

    return (
        <Router history={hashHistory}>
            <Route path='/'         component={Home}/>
            <Route path='/career'   getComponent={loadComponent(Career)}/>
            <Route path='/person'   {...component(Person)}/>
            <Route path='/projects' {...component(Projects)} />
            <Route path='/tech'     getComponent={loadComponent(Tech)}/>
            <Route path='*'         component={NotFound}/>
        </Router>
    )
};

export default FrontPage;
