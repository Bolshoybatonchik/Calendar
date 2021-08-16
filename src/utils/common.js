import moment from "moment";

import { getLocalStorage, setLocalStorage } from "./localStorage";

export const getDateFormat = (date = new Date()) => {
    const check = moment(date, 'YYYY/MM/DD');
    const month = check.format('M');
    const day   = check.format('D');
    const year  = check.format('YYYY');
    return  {month, day, year}
}

export const generateData = (count, year, month) => {
    const data = []
    for (let i = 1; i <= count; i++) {
        data.push({
            id: `${year}-${month}-${i}`,
            year,
            month,
            day: i,
            actions: []
        })
    }
    return data
}

export const getMonthBefore = (year,month) => {
    return  moment(`${year}-${month}`, "YYYY-MM")
        .subtract(1,'month')
        .endOf('month');
}

export const getMonthAfter = (year,month) => {
    return  moment(`${year}-${month}`, "YYYY-MM")
        .add(1, 'M')
        .endOf('month');
}

export const getCountDayList = (countSlice, weekDayName, yearNow, monthNow, isAfter) => {
    let dateFrom = isAfter ? getMonthAfter(yearNow, monthNow) : getMonthBefore(yearNow, monthNow)
    const {year, month, day} = getDateFormat(dateFrom)

    let data = getLocalStorage(`${year}-${month}`)
    data = data ? JSON.parse(data) : []
    if(data.length === 0) {
        data = generateData(day, year, month)
        setLocalStorage(`${year}-${month}`, JSON.stringify(data))
    }
    if(isAfter) {
        return data.slice(0, countSlice)
    }
    return data.slice(Math.max(data.length - countSlice, 0))
}

const daysWeek = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
}

export const getData = (year, month) => {
    let data = getLocalStorage(`${year}-${month}`)
    data = data ? JSON.parse(data) : []
    const countDays = moment(`${year}-${month}`, "YYYY-MM").daysInMonth()
    const weekDayName = moment(`${year}-${month}-1`, "YYYY-MM-DD").format('dddd')
    const lastWeekDayName = moment(`${year}-${month}-${countDays}`, "YYYY-MM-DD").format('dddd')
    const countSliceBefore = daysWeek[weekDayName]
    const dataBefore = getCountDayList(countSliceBefore, weekDayName, year, month)
    const sliceAfter = Math.abs(countDays + countSliceBefore - 42)
    const dataAfter = getCountDayList(sliceAfter, lastWeekDayName, year, month, true)

    if(data.length === 0) {
        data = generateData(countDays, year, month)
        setLocalStorage(`${year}-${month}`, JSON.stringify(data))
    }

    return [...dataBefore,...data,...dataAfter]
}
