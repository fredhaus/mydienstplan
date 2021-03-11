import React, { useState } from "react";
import Calendar, { MonthView } from "react-calendar";

function CalendarInterface() {
  const [value, setValue] = useState<any>(new Date());

  const ReturnDay = (dayNr: number) => {
    switch (dayNr) {
      case 6:
        return "Saturday";
      case 0:
        return "Sunday";

      default:
        break;
    }
  };

  console.log("value", value);

  return (
    <div>
      <Calendar
        onChange={setValue}

        value={value}
        defaultView="year"
        onClickMonth={(value: any) => console.log("value______MONTH", value)}
        onClickDay={(value: any) => console.log("value______DAY", value)}
        tileContent={({ date, view }) =>
          view === "month" && ReturnDay(date.getDay()) ? (
            <p style={{ backgroundColor: "red" }}>WE !</p>
          ) : null
        } // 0 = Sun, 6 = Sat
      />
      {/* <MonthView
      activeStartDate={new Date(2021, 1, 1)} // 1.2.2021 wegen Index 0
    /> */}
    </div>
  );
}

export default CalendarInterface;
