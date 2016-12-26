import { call, put, takeEvery } from 'redux-saga/lib/effects'


//const url = `https://api.github.com/users/${this.props.user}/repos`;
const url = `https://api.github.com/users/abhustoft/repos`;

//worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const Response = yield call(window.fetch, url, {method: "GET"});
    const json = yield Response.json();
    yield put({type: 'USER_FETCH_SUCCEEDED', repos: json});
  } catch (e) {
    yield put({type: 'USER_FETCH_FAILED', message: e.message});
  }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

export default mySaga;
