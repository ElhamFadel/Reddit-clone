import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./handlState";

const store = createContext(initialState);
//to help us use the store
export const useStore = () => useContext(store);

export const StoreProvider = ({ children }) => (
  <store.Provider value={useReducer(reducer, initialState)}>
    {children}
  </store.Provider>
);
