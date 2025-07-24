import classes from "../../Styles/Pages.module.css";
import { useNavigate } from "react-router-dom";

export const GameButtonEmpire = () => {
    const navigate = useNavigate();
    function handleButtonGame(){
        navigate("/gameemp")
    }
    return (
        <button className={classes.buttonPage} onClick={handleButtonGame}>Игра Империи</button>
    )
}