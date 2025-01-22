import { useState, useEffect } from "react"

export function useTypingEffect(text, typingSpeed = 50) {
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        let i = 0
        setDisplayedText("")
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i))
                i++
            } else {
                clearInterval(typingInterval)
            }
        }, typingSpeed)
        return () => clearInterval(typingInterval)
    }, [text, typingSpeed])

    return displayedText
}

