import classes from "../../Styles/Pages.module.css";
import { useNavigate } from "react-router-dom";

export const HistoryButtonEmpire = () => {
    const navigate = useNavigate();
    function handleButtonHistory(){
        navigate("/historyemp")
    }
    return (
        <button className={classes.buttonPageEmpire} onClick={handleButtonHistory} style={{border:"solid 0.1vw black"}}>История Империи</button>
    )
}