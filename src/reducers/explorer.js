export default function reducer(
  state = {
    contracts: null,
    loading: false,
    error: null,
  },
  action,
) {
  const actionType = 'GET_CONTRACTS';
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
        contracts: action.payload,
        error: null,
      };

    case `${actionType}_REJECTED`:
      return {
        ...state,
        loading: false,
        contracts: null,
        error: action.payload,
      };

    default:
      return state;
  }
}
