import { call, put, takeEvery } from 'redux-saga/lib/effects'

//const url = `https://api.github.com/users/${this.props.user}/repos`;
const url = `https://api.github.com/users/abhustoft/repos`;

//worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  console.log('fetchUser for :', action.user);
  try {
    //const repositories = yield call(window.fetch, url, {method: "GET"});
     window.fetch(url, {method: "GET"}).then( (response) => {console.log('promis got:', response.json())});

    yield put({type: 'USER_FETCH_SUCCEEDED', reporepo: repositories});
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

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export default mySaga;
