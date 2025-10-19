import classes from "../Styles/OverallButtons.module.css";
import { useNavigate } from "react-router-dom";

export const RestartButtonEmpire = () => {
    const navigate = useNavigate();
    function handleRestartButton() {
        navigate("/transition");
        setTimeout(() => {
            navigate("/gameemplvl1");
        },100);
    }
    return (
        <button className={classes.restartButton} onClick={handleRestartButton}>Заново</button>
    )
}