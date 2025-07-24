import classes from "../Styles/OverallButtons.module.css";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();
    function handleBackButton() {
        navigate(-1);
    }
    return (
        <button className={classes.backButton} onClick={handleBackButton}>Назад</button>
    )
}