import classes from "../../Styles/Pages.module.css";
import { useNavigate } from "react-router-dom";

export const HistoryButtonWasteland = () => {
    const navigate = useNavigate();
    function handleButtonHistory(){
        navigate("/historywas")
    }
    return (
        <button className={classes.buttonPageWasteland} onClick={handleButtonHistory} style={{border:"solid 0.1vw black"}}>История Пустоши</button>
    )
}