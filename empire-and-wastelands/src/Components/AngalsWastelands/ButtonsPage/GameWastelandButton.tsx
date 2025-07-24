import classes from "../../Styles/Pages.module.css";
import { useNavigate } from "react-router-dom";

export const GameButtonWasteland = () => {
    const navigate = useNavigate();
    function handleButtonGame(){
        navigate("/gamewas")
    }
    return (
        <button className={classes.buttonPage} onClick={handleButtonGame}>Игра Пустоши</button>
    )
}