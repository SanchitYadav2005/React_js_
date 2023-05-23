export default {
    palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    paletteColors: {
        height: "90%"
    },
    goBack:{
        width: "20%",
        height: "40%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        opacity: 1,
        backgroundColor: "black",
        "& a":{
            color: "white",
            width: "100px",
            height: "30px",
            position: "absloute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "80px",
            marginTop: "60px",
            textAlign: "center",
            outline: "none",
            backgroundColor: "(255,255,255,0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
            textDecoration: "none"
        }
    }
};