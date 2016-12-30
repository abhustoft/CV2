const NO_STATE = 'State not set';
import Projects from '../../Projects/projects.jsx'
import Tech from   '../../Tech/tech.jsx'
import Person from '../../Person/person.jsx'
import Career from '../../Career/career.jsx'

export default function starter(state = NO_STATE, action) {
    switch (action.type) {
        case 'LOAD_COMPONENTS':
            // Trigger webpack loader to fetch the chunk
            setTimeout(Person,   2000, (reactComponent) => reactComponent);
            setTimeout(Career,   3000, (reactComponent) => reactComponent);
            setTimeout(Tech,     4000, (reactComponent) => reactComponent);
            setTimeout(Projects, 4000, (reactComponent) => reactComponent);
            return {
                loadingComponents: true
            };

        default:
            return state
    }
}
