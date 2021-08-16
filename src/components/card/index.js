import React, { useState } from 'react';
import { Paper } from "@material-ui/core";

import CardAdd from 'components/cardAdd';
import CardAction from "components/cardAction";
import { useCardStyle } from 'components/card/styles';

const Card = ({item, updateData, selectDate, dateNow}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const classes = useCardStyle()

    const isDayNow = `${dateNow.year}-${dateNow.month}-${dateNow.day}` === item.id
    const styleDay = isDayNow? classes.dayNow : classes.selectDay

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Paper className={classes.day} onClick={openModal}>
                <span className={styleDay}>{item.day}</span>
                {item.actions.map((action) => (
                    <CardAction
                        key={action.id}
                        item={item}
                        action={action}
                        updateData={updateData}
                        selectDate={selectDate}
                    />
                ))}
            </Paper>
            <CardAdd
                updateData={updateData}
                selectDate={selectDate}
                item={item}
                openModal={openModal}
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
            />
        </>
    );
};

export default Card;
