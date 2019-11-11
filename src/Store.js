import React, { useState, createContext, useContext, useReducer } from 'react';
import { initialState, stateReducer } from './reducers/stateReducer'

export const StateContext = createContext();
export const HistoryContext = createContext();



const Store = ({ children }) => {
  const [history, setHistory] = useState([]);
  return (
    <HistoryContext.Provider value={[history, setHistory]}>
      <StateContext.Provider value={useReducer(stateReducer, initialState)}>
        {children}
      </StateContext.Provider>
    </HistoryContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext)
export default Store;
