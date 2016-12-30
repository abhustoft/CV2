const NO_STATE = 'State not set';

export default function starter(state = NO_STATE, action) {
    switch (action.type) {
    case 'FETCH_GITHUB_REPOSITORIES':
        return {
            user: action.user,
            gitHub_repositories: undefined
        };

    case 'FETCH_GITHUB_REPOSITORIES_SUCCEEDED':
        return {
            user: action.user,
            gitHub_repositories: action.gitHub_repositories
        };

    default:
        return state
    }
}
