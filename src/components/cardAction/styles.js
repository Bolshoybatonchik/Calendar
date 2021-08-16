import { makeStyles } from "@material-ui/core/styles";

export const useCardActionStyle = makeStyles({
    content: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#EEEEEE",
        top: "40%",
        left: "40%",
        transform: "translate(-10%, -10%)",
        maxWidth: 400,
        width: '100%',
    },
    wrapper: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "10px 5px 10px",
        boxSizing: "border-box",
        justifyContent: "flex-end",
    },
    text: {
        marginRight: "auto",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    actionText: {
        maxWidth: 380,
        width: '100%',
        padding: "20px 10px 20px",
        wordWrap: "break-word",
        textAlign:"center",
    },
    close: {
        width: 25,
        height: 25,
        cursor: "pointer",
        '&:hover': {
            fill: 'red'
        }
    },
    container: {
        background: "rgb(3, 155, 229)",
        color: 'white',
        margin: 5,
        display: "flex",
        borderRadius: 5,
        padding: 5,
    },
    icon: {
        marginRight: 15,
        width: 15,
        height: 15,
        cursor: "pointer",
    },
})
