import React, { useState } from 'react';
import Modal from 'react-modal'

import { getLocalStorage, setLocalStorage } from "utils/localStorage";
import { ReactComponent as CloseIcon } from "assets/close.svg";
import deleteIcon from "assets/delete.svg";
import editIcon from "assets/edit.svg";
import { useCardActionStyle } from "components/cardAction/styles";
import EditModal from "../editModal";

const CardAction = ({item, updateData, selectDate, action}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalActionIsOpen, setModalActionIsOpen] = useState(false);
    const [content, setContent] = useState(action.content);
    const classes = useCardActionStyle()

    const openModal = (event) => {
        event.stopPropagation()
        setIsOpen(true)
    }

    const closeModal = (event) => {
        event.stopPropagation()
        setIsOpen(false)
    }

    const closeActionModal = (event) => {
        event.stopPropagation()
        setModalActionIsOpen(false)
    }

    const deleteAction = (event) => {
        event.stopPropagation()
        let data = getLocalStorage(`${item.year}-${item.month}`)
        data = data ? JSON.parse(data) : []
        data = data.map(day => {
            const newDay = {...day}
            if (day.id === item.id) {
                newDay.actions = newDay.actions.filter(elem => elem.id !== action.id)
            }
            return newDay
        })
        setLocalStorage(`${item.year}-${item.month}`, JSON.stringify(data))
        updateData(selectDate.year, selectDate.month)
        setIsOpen(false)
    }

    const saveModal = (event) => {
        event.stopPropagation()
        let data = getLocalStorage(`${item.year}-${item.month}`)
        data = data ? JSON.parse(data) : []
        data = data.map(day => {
            const newDay = {...day}
            if (day.id === item.id) {
                newDay.actions = newDay.actions.map(elem => {
                    if (elem.id === action.id) {
                        return ({...elem, content})
                    }
                    return elem
                })
            }
            return newDay
        })
        setLocalStorage(`${item.year}-${item.month}`, JSON.stringify(data))
        updateData(selectDate.year, selectDate.month)
        setIsOpen(false)
    }

    const onChangeInput = (event) => {
        setContent(event.target.value)
        event.stopPropagation()
    }

    const showAction = (event) => {
        event.stopPropagation()
        setModalActionIsOpen(true)
    }

    return (
        <>
            <div className={classes.container} onClick={(event) => {
                showAction(event)
            }}>
                <span className={classes.text}>{action.content}</span>
            </div>
            <Modal
                isOpen={modalActionIsOpen}
                onRequestClose={closeActionModal}
                className={classes.content}
                contentLabel="Modal"
            >
                <div
                    onClick={(event) => event.stopPropagation()}
                    className={classes.wrapper}
                >
                    <img className={classes.icon} onClick={openModal} src={editIcon} alt="delete"/>
                    <img className={classes.icon} onClick={deleteAction} src={deleteIcon} alt="delete"/>
                    <CloseIcon
                        onClick={closeActionModal}
                        className={classes.close}
                    />
                </div>
                <div
                    onClick={(event) => event.stopPropagation()}
                    className={classes.actionText}
                >
                    {action.content}</div>
            </Modal>
            <EditModal
                saveModal={saveModal}
                onChangeInput={onChangeInput}
                content={content}
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
            />
        </>
    );
};

export default CardAction;
