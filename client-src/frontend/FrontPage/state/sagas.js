import {call, put, takeEvery} from 'redux-saga/lib/effects'

function* loadComponents() {
    console.log('Frontpage saga ready');
}

function* frontpageSaga() {
    yield takeEvery('LOAD_COMPONENTS', loadComponents);
}

export default frontpageSaga;
