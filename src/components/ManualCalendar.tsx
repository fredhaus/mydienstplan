import React from 'react'

function ManualCalendar() {

  const getMonthlyAmoutDays = (month: number, year:number): number => {
    return new Date(year, month, 0).getDate()
  }
  const getWeekDay = (month: number, year: number, day: number ) => {
    return new Date(year, month, (0-getMonthlyAmoutDays(month, year))+day).getDay()
  } 


  const year = 2021
  const month = 3
  const daysPerMonths = getMonthlyAmoutDays(month, year)
  const test_1003 = getWeekDay(3, 2021, 10)
  const weekdayObj = {1: "Mon", 2: "Tue", 3: "Wed", 4: "Thur", 5: "Fri", 6: "Sat", 7: "Sun"}

  

  

  return (
    <div>
      <b>March2021 days:</b> {daysPerMonths} <br/>
      <b>10.03. Wochentag:</b> {test_1003}
    </div>
  )
}

export default ManualCalendar



