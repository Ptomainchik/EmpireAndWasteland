import classes from "../Styles/OverallButtons.module.css";
import { useNavigate } from "react-router-dom";

export const HomeButton = () => {
    const navigate = useNavigate();
    function handleHomeButton() {
        navigate("/");
    }
    return (
        <button className={classes.homeButton} onClick={handleHomeButton}>Главная</button>
    )
}