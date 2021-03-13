export const weekdayObj: Record<string, string> = {
  "1": "Mon",
  "2": "Tue",
  "3": "Wed",
  "4": "Thur",
  "5": "Fri",
  "6": "Sat",
  "0": "Sun",
};

export const monthChoiceArr = [
  { name: "Jan", monthNr: 1 },
  { name: "Feb", monthNr: 2 },
  { name: "Mar", monthNr: 3 },
  { name: "Apr", monthNr: 4 },
  { name: "May", monthNr: 5 },
  { name: "Jun", monthNr: 6 },
  { name: "Jul", monthNr: 7 },
  { name: "Aug", monthNr: 8 },
  { name: "Sep", monthNr: 9 },
  { name: "Oct", monthNr: 10 },
  { name: "Nov", monthNr: 11 },
  { name: "Dec", monthNr: 12 },
];
export const yearChoiceArr = [
  2021,
  2022,
  2023,
  2024,
  2025,
  2026,
  2027,
  2028,
  2029,
  2030,
];

const daysPerMonths = (year: number, month: number) => new Date(year, month, 0).getDate();
const getWeekDayString = (year: number, month: number, day: number) => {
  const weekDay = new Date(year, month, 0 - daysPerMonths(year, month) + day)
    .getDay()
    .toString();
  return weekdayObj[weekDay];
};
const getDaysPerMonthsArr = (daysPerMonths: number) => {
  const arr = [];
  for (let index = 0; index < daysPerMonths; index++) {
    arr.push(index + 1);
  }
  return arr;
};

export const getMonthArr = (month: number, year: number) => {
  const daysPerMonth = daysPerMonths(year, month)
  const daysPerMonthArr = getDaysPerMonthsArr(daysPerMonth)

  const monthArr: any = [];
  for (
    let index: number = 0;
    index < daysPerMonthArr.length;
    index++
  ) {
    const day = daysPerMonthArr[index];
    const weekdayString = getWeekDayString(year, month, day);
    let isWeekendHolyday = false;
    if (weekdayString === "Sat" || weekdayString === "Sun") {
      isWeekendHolyday = true;
    }

    let Obj = {
      day,
      month,
      year,
      weekdayString,
      isWeekendHolyday: isWeekendHolyday,
    };

    monthArr.push(Obj);
  }
  
  return monthArr;
};
