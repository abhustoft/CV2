const NO_STATE = 'State not set';
import Projects from '../../Projects/projects.jsx'
import Tech from   '../../Tech/tech.jsx'
import Person from '../../Person/person.jsx'
import Career from '../../Career/career.jsx'
import * as React from 'react';

export default function starter(state = NO_STATE, action) {
    const agetter = (comp) => {
        console.log('component:', comp);
        const newComp = React.createElement(comp, {toWhat: 'World'}, null);
        console.log('created element:',newComp);
      return comp;
    };
    switch (action.type) {
        case 'LOAD_COMPONENTS':
            // Trigger webpack loader to fetch the chunk
            console.log('the Person function:', Person);
            Person(agetter);
            //setTimeout(Person,   2000, (reactComponent) => reactComponent);
            setTimeout(Career,   3000, (reactComponent) => reactComponent);
            setTimeout(Tech,     4000, (reactComponent) => reactComponent);
            setTimeout(Projects, 4000, (reactComponent) => reactComponent);
            return {
                loadingComponents: true,
                user: 'Alf Bjørn'
            };
        case 'CAREER_LOADED':

        default:
            return state
    }
}
