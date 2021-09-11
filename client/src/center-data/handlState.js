export const initialState = {
  search: "",
  user: {
    email: "",
    password: "",
    name: "",
  },
  error: {
    email: "",
    password: "",
    name: "",
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "USER":
      switch (action.payload.field) {
        case "email":
          return {
            ...state,
            user: {
              ...state.user,
              email: action.payload.value,
            },
          };
        case "password":
          return {
            ...state,
            user: {
              ...state.user,
              password: action.payload.value,
            },
          };
        case "name":
          return {
            ...state,
            user: {
              ...state.user,
              name: action.payload.value,
            },
          };

        default:
          return state;
      }

    case "SET_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.field]: action.payload.msg,
        },
      };
    default:
      return state;
  }
};
export default reducer;
