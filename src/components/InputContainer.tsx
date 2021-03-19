import React from "react";

import InputCalendarMonth from "./InputCalendarMonth";
import InputEmployees from "./InputEmployees";
import InputPositions from "./InputPositions";
import InputShifts from "./InputShifts";
import FileUpload from "./FileUpload"


function InputConatiner() {
  return (
    <div>
      {/* <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
    <button className='btn'>Upload</button>
      </ReactFileReader> */}
      {/* <InputPositions />
      <InputEmployees />
      <InputShifts />
      <InputCalendarMonth /> */}
      <FileUpload/>

    </div>
  );
}

export default InputConatiner;
