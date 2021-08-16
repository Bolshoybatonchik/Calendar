import { makeStyles } from "@material-ui/core/styles";

export const useEditModalAddStyle = makeStyles({
    content: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 15,
        padding: "20px 50px 20px",
        backgroundColor: "#EEEEEE",
        top: "40%",
        left: "40%",
        transform: "translate(-10%, -10%)",
    },
    title:{
        marginBottom:20,
    },
    input: {
        width: "399px",
        height: "199px",
        resize: "none",
        border: "none",
        borderRadius: 5,
        marginBottom: 20,
    },
    add: {
        width: "fit-content",
        backgroundColor: "#4169E1",
    },
    closeButton: {
        width: 30,
        height: 30,
        position: "absolute",
        top: 10,
        left: 450,
        cursor: "pointer",
        '&:hover': {
            fill: 'red'
        }
    },
})
