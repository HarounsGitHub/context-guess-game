import { createContext, useState } from "react";

export const GuessContext = createContext(
    {
        number: 0,
        compare: () => { },
    }
)
export const GuessProvider = ({ children }) => {
    const [number, setNumber] = useState(Math.floor(Math.random() * 101))
    const compare = (num) => {
        if (num < number) {
            console.log('greater')
        } else if (num > number) {
            console.log('smaller')
        } else
            console.log('You guessed right!')
    }
    return <GuessContext.Provider
        value={{
            number,
            compare,
        }}
    >
        {children}
    </GuessContext.Provider>
}
export default GuessProvider