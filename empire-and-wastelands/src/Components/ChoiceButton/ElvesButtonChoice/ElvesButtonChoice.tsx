import { useNavigate } from "react-router-dom";
import classes from "../../Styles/StartPage.module.css";

export const ElvesButtonChoice = () => {
    const navigate = useNavigate();
        function transition() {
        navigate("empire");
        }
    return (
        <div className={classes.elvesChoiceBackground}>
            <button className={classes.elvesChoice} onClick={transition}></button>
        </div>
    )
}