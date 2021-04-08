import React, { useState, useEffect } from "react";
import { Store } from "../../../../utils/Store";
import {
  getMonthArr,
  monthChoiceArr,
  yearChoiceArr,
} from "./InputCalendarMonthLogic";

interface ObjShape {
  day: number;
  month: number;
  year: number;
  weekdayString: string;
  isWeekendHolyday: boolean;
  dateString: string
}

function CalendarMonth() {
  // State
  const { state, dispatch } = React.useContext(Store);
  const [selectMonth, setSelectMonth] = useState<any>({
    monthNr: 1,
  });
  const [selectYear, setSelectYear] = useState<any>(2021);

  const [monthArr, setMonthArr] = useState<any>(
    getMonthArr(selectMonth.monthNr, selectYear)
  );
  const [submit, setSubmit] = useState({
    monthYear: true,
    weekendsHolidays: false,
  });

  useEffect(() => {
    const monthArr = getMonthArr(selectMonth.monthNr, selectYear);

    setMonthArr(monthArr);
  }, [selectYear, selectMonth]);

  const submitCalendar = () => {

    

    // const newPayload = {
    //   weekdayString: monthArr.weekdayString,
    //   isWeekendHolyday: monthArr.isWeekendHolyday,
    //   date: date,
    // };

    return dispatch({
      type: "ADD_CALENDERMONTH",
      payload: monthArr ,
    });
  };

  const toggleIsWeekendHolyday = (elem: any) => {
    elem.isWeekendHolyday = !elem.isWeekendHolyday;
    setMonthArr([...monthArr]);
  };

  return (
    <div>
      <h2>Choose Month & Year</h2>
      <select
        className="calenderDropdownMonth"
        onChange={(e) => {
          const val = parseInt(e.target.value);

          setSelectMonth(monthChoiceArr[val - 1]);
        }}
        value={selectMonth.monthNr}
        name=""
        id=""
      >
        {monthChoiceArr.map((elem) => (
          <option key={elem.name} value={elem.monthNr}>
            {elem.name}
          </option>
        ))}
      </select>
      <select
        className="calenderDropdownMonth"
        onChange={(e) => {
          setSelectYear(e.target.value);
        }}
        value={selectYear}
        name=""
        id=""
      >
        {yearChoiceArr.map((elem: any) => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
      </select>
      <br />
      <br />
      {/* <button
              onClick={() => setSubmit({
                ...submit,
                monthYear: !submit.monthYear,
              })}
              type="button"
            >
              Submit Submit
            </button> */}
      {submit.monthYear && (
        <div>
          <h2>Choose weekends and Public Holidays</h2>
          <div>
            {monthArr.map((elem: any) => {
              return (
                <span key={elem.day}>
                  <button
                    className="calenderButton"
                    type="button"
                    onClick={() => toggleIsWeekendHolyday(elem)}
                    style={{
                      width: "50px",
                      background: `${elem.isWeekendHolyday ? "lightblue" : ""}`,
                    }}
                  >
                    {elem.day}
                    <br />
                    {elem.weekdayString}
                  </button>
                  {elem.weekdayString === "Sun" ? <br></br> : null}
                </span>
              );
            })}
          </div>
          <br />
          <br />
          <br />
          <div>
            <button onClick={submitCalendar} type="button">
              Submit Month
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarMonth;
