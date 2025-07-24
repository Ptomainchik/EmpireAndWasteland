import classes from "../../Styles/Pages.module.css";
import { useNavigate } from "react-router-dom";

export const HistoryButtonWasteland = () => {
    const navigate = useNavigate();
    function handleButtonHistory(){
        navigate("/historywas")
    }
    return (
        <button className={classes.buttonPage} onClick={handleButtonHistory}>История Пустоши</button>
    )
}