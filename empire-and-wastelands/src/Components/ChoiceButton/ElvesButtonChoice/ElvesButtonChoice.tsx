import { useNavigate } from "react-router-dom";
import classes from "../../Styles/StartPage.module.css";

export const ElvesButtonChoice = () => {
    const navigate = useNavigate();
        function transition() {
        navigate("empire");
        }
    return (
        <button className={classes.elvesChoice} onClick={transition}> Empire </button>
    )
}