import { makeStyles } from "@material-ui/core/styles";

import Image from 'assets/claudio.jpg'

export const useCalendarStyle = makeStyles({
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    content: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: 10,
        fontFamily: "Google Sans,Roboto,Arial,sans-serif",
        padding: 30,
    },
    navigation: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: '0 0 0 80%'
    },
    dateWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 250,
    },
    date: {
        minWidth: 150,
        textAlign: "center",
    },
    dayWeek: {
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        gridGap: 1,
        color: "#70757a",
    },
    nameDay: {
        display: "flex",
        justifyContent: "center",
        width: 135,
    },
    table: {
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        gridTemplateRows: "repeat(6,1fr)",
        gridGap: 3,
    },
    button: {
        width: 30,
        height: 30,
        marginRight: 10,
        borderRadius: "50%",
        cursor: "pointer",
        border:"none",
        background:"none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            color: "red",
            backgroundColor: "#eeeeee",
        }
    },
    buttonToDay: {
        cursor: "pointer",
        display: "inline-block",
        border: "1px solid #dadce0",
        padding: 10,
        borderRadius: 5,
        background:"none",
        "&:hover": {
            backgroundColor: "#f1f3f4",
        }
    },
})
