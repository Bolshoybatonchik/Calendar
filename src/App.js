import React, { useEffect, useState } from 'react';
import moment from "moment";
import { Paper } from "@material-ui/core";

import { getDateFormat, getData, getMonthAfter, getMonthBefore } from 'utils/common';
import Card from "components/card";
import { useCalendarStyle } from "./style";

const DAY_WEEK_LIST = ['пн', 'вт', 'ср', 'чт', 'пт', 'св', 'вс']

const Calendar = () => {
    const [dateNow, setDateNow] = useState(null)
    const [selectDate, setSelectDate] = useState(null)
    const [data, setData] = useState([])
    const classes = useCalendarStyle()

    const updateData = (year, month) => {
        const response = getData(year, month)
        setData(response)
    }

    useEffect(() => {
        const {month, day, year} = getDateFormat()
        updateData(year, month)
        setDateNow({month, day, year})
        setSelectDate({month, day, year})
    }, [])

    const updateMonth  = (date) =>{
        const {year, month, day} = getDateFormat(date)
        setSelectDate({year, month, day})
        updateData(year, month)
    }

    const onClickButton = (isAfter) => {
        const dateFrom = isAfter ?
            getMonthAfter(selectDate.year, selectDate.month) :
            getMonthBefore(selectDate.year, selectDate.month)
        updateMonth(dateFrom)
    }

    const onClickButtonToDay = () => {
        updateMonth()
    }

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.content}>
                <header className={classes.navigation}>
                    <div className={classes.dateWrapper}>
                        <button onClick={() => onClickButton(false)} className={classes.button}>
                            {'<'}
                        </button>
                        <span className={classes.date}>
                            {selectDate?.year} {moment(`${selectDate?.year}-${selectDate?.month}`).format('MMMM')}
                        </span>
                        <button onClick={() => onClickButton(true)} className={classes.button}>
                            {'>'}
                        </button>
                    </div>
                    <button onClick={onClickButtonToDay} className={classes.buttonToDay}>Сегодня</button>
                </header>
                <div className={classes.dayWeek}>
                    {DAY_WEEK_LIST.map((item) => (<div key={item} className={classes.nameDay}>{item}</div>))}
                </div>
                <div className={classes.table}>
                    {data.map((item) => (
                        <Card
                            dateNow={dateNow}
                            updateData={updateData}
                            selectDate={selectDate}
                            item={item}
                            key={item.id}
                        />))}
                </div>
            </Paper>
        </div>
    );
};

export default Calendar
