import React from "react"

function Header() {
    
    const header = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(to right, yellow 35%, white 50%, red 51%, white 52%, white 65%, #371D10 75%, white 95%, black 100%)"
    }

    const titleContainer = {
        padding: "10px",
        paddingLeft: "3px",
    }

    const title = {
        fontSize: "3em",
        margin: "0"
    }

    const subtitle = {
        fontSize: "1.035em",
        margin: "0"
    }

    const img = {
        maxHeight: "70px",
        padding: "10px",
        paddingRight: "3px"
    }

    return <div className="header" style={header}>
        <div style={titleContainer}>
            <h1 style={title}>sArcAsTiCASE</h1>
            <h6 style={subtitle}>What happens when I code after midnight</h6>
        </div>
        <a href="https://www.adamrossbenton.com/"><img style={img} src="adamrossbenton_transparent.png" alt="" /></a>
    </div>
}

export default Header