export default function reducer(
  state = {
    contract: null,
    loading: false,
    error: null,
  },
  action,
) {
  const actionType = 'DEPLOY_CONTRACT';
  switch (action.type) {
    case `${actionType}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case `${actionType}_FULFILLED`:
      return {
        ...state,
        loading: false,
        contract: action.payload,
        error: null,
      };

    case `${actionType}_REJECTED`:
      return {
        ...state,
        loading: false,
        contract: null,
        error: action.payload,
      };

    default:
      return state;
  }
}
