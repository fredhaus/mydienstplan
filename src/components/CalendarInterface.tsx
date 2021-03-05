import React, {useState} from 'react'
import Calendar, {MonthView} from 'react-calendar';


function CalendarInterface() {

  const [value, setValue] = useState<any>(new Date());

  console.log("value", value)

  return (
    <div>
    <Calendar
      onChange={setValue}
      value={value}
      defaultView="year"
      onClickMonth={(value: any) => console.log("value______",value)}   

    />
    <MonthView
      activeStartDate={new Date(2021, 1, 1)} // 1.2.2021 wegen Index 0
    />
  </div>
  )
}



export default CalendarInterface
