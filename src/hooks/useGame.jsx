import { useContext } from "react";
import { GuessContext } from "../contexts/GuessContext";


const useGame = () => useContext(GuessContext)

export default useGame