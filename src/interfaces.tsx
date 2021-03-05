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
}

export interface IEmployee {
  fName: string;
  lName: string;
  workingDays: number;
  months: Array<any>;
  beingEdited: boolean;
  allJobPositions: Array<string>;
}