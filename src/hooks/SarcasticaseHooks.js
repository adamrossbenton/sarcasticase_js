import {useState} from "react"

function SarcasticaseHooks() {

    // Convert to sArCaSTiCasE
    const sarcasticase = str => {
        let newStr = ""
        let numCaps = 0
        let numLows = 0
        for (let c of str) {
            let isCaps = Math.floor(Math.random()*2)
            if (isCaps || numLows > numCaps + 1) {
                newStr += c.toUpperCase()
                numCaps++
            } else if (!isCaps || numCaps > numLows + 1) {
                newStr += c.toLowerCase()
                numLows++
            }
        }
    
        return newStr
    }

    // Form hooks
    const [text, setText] = useState("")

    const handleChange = e => {
        setText({...text,
            [e.target.name]: e.target.value
        })
    }

return {
    sarcasticase,
    text,
    handleChange
}

}

export default SarcasticaseHooks