import React, { useReducer } from "react";
export const initialState = {
  search: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
