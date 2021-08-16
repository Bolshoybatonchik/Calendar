import React from "react";
import { Button } from "@material-ui/core";
import Modal from "react-modal";

import { ReactComponent as CloseIcon } from "assets/close.svg";
import { useEditModalAddStyle } from "components/editModal/style";

const EditModal = ({modalIsOpen,saveModal,closeModal,content,onChangeInput})=>{
    const classes = useEditModalAddStyle()
    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={classes.content}
            contentLabel="Modal"
        >
            <CloseIcon
                onClick={closeModal}
                className={classes.closeButton}
            />
            <div className={classes.title}>Редактировать заметку</div>
            <textarea
                className={classes.input}
                value={content}
                onChange={onChangeInput}
                rows="10"
                cols="45"
                onClick={(event) => event.stopPropagation()}
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
    )
}

export default EditModal
