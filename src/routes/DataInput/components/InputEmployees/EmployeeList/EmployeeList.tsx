import React, { FC } from "react";
import { Store } from "../../../../../utils/Store";
import EmployeeCard from "./EmployeeCard";

const EmployeeList: FC = (props: Object) => {
  const { state, dispatch } = React.useContext(Store);
  
  return (
    <div>
      <h3>Employees</h3>

      <div className="EmployeeList">
      
        <ul>
          
          {state.employees.map((employee: any, i: number) => (
            <li key={i}>
          {console.log(employee.name)}
              <span>{employee.name}</span>
              <EmployeeCard props={employee} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeList;
