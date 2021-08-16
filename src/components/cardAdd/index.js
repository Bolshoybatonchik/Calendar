import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Modal from 'react-modal';

import { getLocalStorage, setLocalStorage } from "utils/localStorage";
import { ReactComponent as CloseIcon } from "assets/close.svg";
import { useCardAddStyle } from "./styles";

Modal.setAppElement('#root');

const CardAdd = ({item, updateData, selectDate, closeModal, modalIsOpen}) => {
    const [content, setContent] = useState('');
    const classes = useCardAddStyle()

    const saveModal = () => {
        let data = getLocalStorage(`${item.year}-${item.month}`)
        data = data ? JSON.parse(data) : []
        data = data.map(day => {
            const newDay = JSON.parse(JSON.stringify(day))
            if (day.id === item.id) {
                newDay.actions.push({
                    id: new Date().getUTCMilliseconds(),
                    content
                })
            }
            return newDay
        })
        setLocalStorage(`${item.year}-${item.month}`, JSON.stringify(data))
        updateData(selectDate.year, selectDate.month)
        closeModal()
        setContent('')
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={classes.content}
                contentLabel="Modal"
            >
                <CloseIcon onClick={closeModal} className={classes.close}/>
                <div className={classes.title}>Создать заметку</div>
                <textarea
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    rows="10"
                    cols="45"
                    className={classes.input}
                />
                <Button
                    disabled={!content}
                    onClick={saveModal}
                    variant="contained"
                    color="primary"
                    className={classes.add}
                >
                    Сохранить
                </Button>
            </Modal>
        </>
    );
};

export default CardAdd;
