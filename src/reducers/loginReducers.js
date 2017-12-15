export const loginReducer = (state = {}, action) => {
console.log(action);
  switch (action.type) {
    case 'LOGIN':
    return {
      ...state,
      token: action.token
      };
    default:
      return state;
  }
};
