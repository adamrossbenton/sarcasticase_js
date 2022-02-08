import React from "react"
import "../App.css"

function Main(props) {
    
    const spingBoy = {
        margin: "0 auto",
        height: "480px",
        width: "700px",
        background: "url(spingboy.png)",
        backgroundSize: "auto",
        display: "flex",
        justifyContent: "center",
    }

    // const memeText = {
    //     // marginTop: "auto",
    //     // color: "white",
    //     // textStroke: "2px black",
    //     // fontSize: "2.5em",
    //     // fontWeight: "1000",
    //     // fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
    // }

    return <div>
        <h1>Who lives in a pineapple under the sea?</h1>
        <h1>I wrote this dumb program to generate memes!</h1>
        <h1>Input some text here:</h1>
        <form>
            <input type="text" placeholder="undefined" name="text" onChange={props.handleChange} />
        </form>
        <h2>Looks like:</h2>
        <div style={spingBoy}>
            <h3 className="meme-text">{props.sarcasticase(`${props.text.text}`)}</h3>
        </div>
    </div>
    
}

export default Main