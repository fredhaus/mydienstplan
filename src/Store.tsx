import React, { useReducer } from "react";
import { IState, IAction } from "./interfaces";

const initialState: IState = {
  shifts: [],
  employees: [],
};

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      console.log(action.type);
      return state;
    case "DELETE_EMPLOYEE":
      console.log(action.type);
      return state;
    case "EDIT_EMPLOYEE":
      console.log(action.type);
      return state;
    case "ADD_SHIFT":
      console.log(action.type);
      console.log(action.payload);
      return {...state, shifts: [...state.shifts, action.payload]};
    case "DELETE_SHIFT":
      console.log(action.type);
      return state;
    case "EDIT_SHIFT":
      console.log(action.type);
      return state;
    default:
      return state;
  }
};

export function StoreProvider ({ children }: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
