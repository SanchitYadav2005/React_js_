import chroma from 'chroma-js';

export default {
    colorBox: {
        width: "20%",
        height: "40%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover button":{
            opacity: 1
        }
    },
    colorName: {
        color: props =>
            chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    seeMore:{
        color: 
            props => chroma(props.background).luminance() >= 0.7 ? "black" : "white", 
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton:{
        color: 
            props => chroma(props.background).luminance() <= 0.7 ? "black" : "white", 
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
        textDecoration: "none",
        opacity: 0
    },
    boxContent:{
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    }
}