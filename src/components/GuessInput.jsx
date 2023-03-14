import { useState } from "react"
import useGame from "../hooks/useGame";
const GuessInput = () => {
    const gamedata = useGame();
    const [test, setTest] = useState('')
    return (
        <div>
            <input type="number" min="0" max="100" onChange={(e) => setTest(e.target.value)}
                value={test}
            />
            <button onClick={() => {
                gamedata.compare(Number(test))
            }}>Guess</button>
        </div>


    )
}
export default GuessInput