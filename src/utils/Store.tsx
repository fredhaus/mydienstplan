import React, { useReducer } from "react";
import { IState, IAction } from "./interfaces";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fa7f38",
      contrastText: "#fff",
    },
  },
});

const initialState: IState = {
  shifts: [],
  employees: [],
  positions: [],
  calendarMonth: [],
  availability: [],
  bulkPositions: [],
  dataInputTab: [],
};

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    // Employee
    case "ADD_EMPLOYEE":
      return { ...state, employees: [...state.employees, action.payload] };
    case "ADD_ALL_EMPLOYEES":
      return {...state, employees: action.payload}
    case "DELETE_EMPLOYEE":
      return { ...state, employees: action.payload };
    case "EDIT_EMPLOYEE":
      // Shift
      return state;
    case "ADD_SHIFT":
      return { ...state, shifts: [...state.shifts, action.payload] };
    case "DELETE_SHIFT":
      return { ...state, shifts: action.payload };
    case "EDIT_SHIFT":
      return state;
    // Position
    case "ADD_POSITION":
      return { ...state, positions: [...state.positions, action.payload] };
    case "ADD_ALL_POSITIONS":
      return { ...state, positions: action.payload };
    case "DELETE_POSITION":
      return { ...state, positions: action.payload };
    case "EDIT_POSITION":
      return state;
    // CalendarMonth
    case "ADD_CALENDERMONTH":
      return { ...state, calendarMonth: action.payload };
    case "ADD_AVAILABILTY":
      return { ...state, availability: action.payload };
    // Tabs
    case "CHANGE_DATAINPUT_TAB":
      return { ...state, dataInputTab: action.payload };
    default:
      return state;
  }
};

export function StoreProvider({ children }: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MuiThemeProvider theme={theme}>
      <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
    </MuiThemeProvider>
  );
}
