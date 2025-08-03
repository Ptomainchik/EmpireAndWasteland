import classes from "../../Styles/Pages.module.css";
import { useNavigate } from "react-router-dom";

export const GameButtonEmpire = () => {
    const navigate = useNavigate();
    function handleButtonGame(){
        navigate("/gameemp")
    }
    return (
        <button className={classes.buttonPageEmpire} onClick={handleButtonGame} style={{border:"solid 0.1vw black"}}>Игра Империи</button>
    )
}