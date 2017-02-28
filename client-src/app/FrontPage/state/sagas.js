import {call, put, takeEvery} from 'redux-saga/lib/effects'

function* loadComponents() {
    yield put({type: 'FETCH_GITHUB_REPOSITORIES', user: 'abhustoft'});
}

function* frontpageSaga() {
    yield takeEvery('LOAD_COMPONENTS', loadComponents);
}

export default frontpageSaga;
