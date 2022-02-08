import React from "react"

function Main(props) {
    
    return <div>
        <h1>Who lives in a pineapple under the sea?</h1>
        <h1>I wrote this dumb program to generate memes!</h1>
        <h1>Input some text here:</h1>
        <form>
            <input type="text" placeholder="undefined" name="text" onChange={props.handleChange} />
        </form>
        <h2>Looks like:</h2>
        <h3>{props.sarcasticase(`${props.text.text}`)}</h3>
    </div>
    
}

export default Main