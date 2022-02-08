import React from "react"

function SarcasticaseHooks() {

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

return {
    sarcasticase
}

}

export default SarcasticaseHooks