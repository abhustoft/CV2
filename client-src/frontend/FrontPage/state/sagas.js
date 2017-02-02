import {call, put, takeEvery} from 'redux-saga/lib/effects'

function* loadComponents() {
    console.log('Saga ready');
}

function* mySaga() {
    yield takeEvery('LOAD_COMPONENTS', loadComponents);
}

export default mySaga;
