export interface IShift {
  shiftName: string;
  necesarry: boolean;
}

export interface IAppProps {
  test: string;
}

export interface IAction {
  type: string;
  payload: Array<any>
}

export interface IState {
  shifts: Array<any>
  employees: Array<any>
  positions: Array<any>
  calendarMonth: Array<any>
  availability: Array<any>
  bulkPositions: Array<any>
  dataInputTab: Array<any>
}

export interface IEmployee {
  fName: string;
  lName: string;
  workingDays: number;
  months: Array<any>;
  beingEdited: boolean;
  allJobPositions: Array<string>;
}