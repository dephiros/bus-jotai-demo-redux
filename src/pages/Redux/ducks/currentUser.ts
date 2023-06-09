import { Dispatch } from 'redux';
import { updateEntityActionCreator } from '../../Redux/ducks/entities';
export function reducer(state: any, action: any) {
  // this is done through utility in the real app
  switch(action.type) {
    case 'fetchUserStart': {
      return { status: 'loading' }
    }
    case 'fetchUserDone': {
      return { status: 'done ', data: action.user }
    }
    default:
      return state;
  }
}

function getUser() {
  return Promise.resolve({
    id: 1,
    name: 'root',
  });
}

export function fetchCurrentUserActionCreator() {
  return async (dispatch: Dispatch) => {
    // we have a utility for this in the real app
    // ignore error for now
    dispatch({
      type: 'fetchUserStart',
    });
    const user = await getUser();
    dispatch({
      type: 'fetchUserDone',
      user,
    });
    // skip normalizer
    dispatch(updateEntityActionCreator('user', user));
  };
}