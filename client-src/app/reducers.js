import {combineReducers} from 'redux'
import github from './GitHub/state/reducers';
import frontpage from './FrontPage/state/reducers';

export default combineReducers({
    github,
    frontpage,
})
