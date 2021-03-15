import React from 'react'
import InputCalendarMonth from "./InputCalendarMonth"
import InputEmployees from "./InputEmployees"
import InputPositions from "./InputPositions"
import InputShifts from "./InputShifts"


function InputConatiner() {
  return (
    <div>
    <InputPositions/>
      <InputCalendarMonth/>
      <InputEmployees/>
      <InputShifts/>
    </div>
  )
}

export default InputConatiner
