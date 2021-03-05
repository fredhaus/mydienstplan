import React, { useReducer } from "react";
import { IState, IAction } from "./interfaces";

const initialState: IState = {
  shifts: [],
  employees: [],
  positions: [],
};
// const initialState: IState = {
//   shifts: [{
//     shiftName: "Bimi", necesarry: true
//   },{shiftName: "Bimi2", necesarry: true}],
//   employees: [
//     {  fName: "Fred",
//       lName: "haus",
//       workingDays: 12,
//       beingEdited: false,
//       allJobPositions: ["Bimi"]},
//       {  fName: "Fred2",
//       lName: "haus2",
//       workingDays: 12,
//       beingEdited: false,
//       allJobPositions: ["Bimi"]}
//   ],
//   positions: ["Bimi", "Mischer"]
// };

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return { ...state, employees: [...state.employees, action.payload] };
    case "DELETE_EMPLOYEE":
      return { ...state, employees: action.payload };
    case "EDIT_EMPLOYEE":
      return state;
    case "ADD_SHIFT":
      return { ...state, shifts: [...state.shifts, action.payload] };
    case "DELETE_SHIFT":
      return { ...state, shifts: action.payload };
    case "EDIT_SHIFT":
      return state;
    case "ADD_POSITION":
      return { ...state, positions: [...state.positions, action.payload] };
    case "DELETE_POSITION":
      return { ...state, positions: action.payload };
    case "EDIT_POSITION":
      return state;
    default:
      return state;
  }
};

export function StoreProvider({ children }: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
