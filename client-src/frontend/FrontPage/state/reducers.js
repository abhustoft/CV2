import Projects from '../../Projects/projects.jsx'
import Tech from   '../../Tech/tech.jsx'
import Person from '../../Person/person.jsx'
import Career from '../../Career/career.jsx'
import * as React from 'react';

const initialState = {
    warpPersonButton: false,
    loadingComponents: false,
    user: 'unknown'
};

export default function starter(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_COMPONENTS':
            // Trigger webpack loader to fetch the chunk
            //Person(component => component);
            setTimeout(Person,   2000, (reactComponent) => reactComponent);
            setTimeout(Career,   3000, (reactComponent) => reactComponent);
            setTimeout(Tech,     4000, (reactComponent) => reactComponent);
            setTimeout(Projects, 4000, (reactComponent) => reactComponent);
            return Object.assign({}, state, {
                loadingComponents: true,
                user:'Alf Bjørn'
            });
        case 'WARP_PERSON_BUTTON':

            return Object.assign({}, state, {
                warpPersonButton: true
            });

        default:
            return state
    }
}
