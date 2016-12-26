const NOT_RUNNING = 'not running';

export default function starter(state = NOT_RUNNING, action) {
  switch (action.type) {
    case 'START':
      return action.text;

    case 'USER_FETCH_REQUESTED':
      console.log('Reducer got user_fetch_requested, for:', action.user);
      return {
        user: action.user,
        repos: undefined
      };

    case 'USER_FETCH_SUCCEEDED':
          console.log('Reducer got user_fetch_succeeded, and:', action);
          return {
            user: undefined,
            repos: action.repos
          };

    default:
      return state
  }
}
