import { makeStyles } from "@material-ui/core/styles";

export const useCardAddStyle = makeStyles({
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
    input: {
        width: "399px",
        height: "199px",
        resize: "none",
        border: "none",
        borderRadius: 5,
        marginBottom: 20,
    },
    close: {
        width: 30,
        height: 30,
        position: "absolute",
        top: 10,
        left: 470,
        cursor: "pointer",
        '&:hover': {
            fill: 'red'
        }
    },
    add: {
        width: "fit-content",
        backgroundColor: "#4169E1",
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
    },
})

