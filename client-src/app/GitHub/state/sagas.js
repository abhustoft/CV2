import {call, put, takeEvery} from 'redux-saga/lib/effects'

function* fetchUser(action) {
    const url = `https://api.github.com/users/${action.user}/repos`;
    try {
        const Response = yield call(window.fetch, url, {method: 'GET'});
        const json = yield Response.json();
        yield put({type: 'FETCH_GITHUB_REPOSITORIES_SUCCEEDED', user: action.user, gitHub_repositories: json});
    } catch (e) {
        yield put({type: 'FETCH_GITHUB_REPOSITORIES_FAILED', message: e.message});
    }
}

function* githubSaga() {
    yield takeEvery('FETCH_GITHUB_REPOSITORIES', fetchUser);
}

export default githubSaga;
