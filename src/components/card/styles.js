import { makeStyles } from "@material-ui/core/styles";

export const useCardStyle = makeStyles({
    day: {
        width: 135,
        height: 135,
        overflowY: "auto",
        border: "solid 1px #dadce0",
        background: "white",
        paddingTop: 5,
        borderRadius: 5,
        '&:hover': {
            transform: 'scale(1.05)'
        }
    },
    dayNow: {
        color: "red",
        display: "flex",
        justifyContent: "center",
        marginTop: 8,
        marginBottom: 8,
        fontSize: 15,
        fontWeight: 500,
    },
    selectDay: {
        color: "black",
        marginBottom: 8,
        display: "flex",
        justifyContent: "center",
        marginTop: 8,
        fontSize: 15,
        fontWeight: 500,
    },
})
