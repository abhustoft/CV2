import { fork } from 'redux-saga/effects';
import githubSaga from './GitHub/state/sagas';
import frontpageSaga from './FrontPage/state/sagas';

export default function* rootSaga() {
    yield [
        fork(githubSaga),
        fork(frontpageSaga)
    ];
}
