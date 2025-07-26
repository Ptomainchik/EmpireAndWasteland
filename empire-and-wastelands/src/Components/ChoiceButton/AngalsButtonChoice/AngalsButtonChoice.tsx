import { useNavigate } from "react-router-dom";
import classes from "../../Styles/StartPage.module.css";

export const AngalsButtonChoice = () => {
    const navigate = useNavigate();
        function transition() {
        navigate("wasteland");
        }
    return (
        <div className={classes.angalsChoiceBackground}>
            <button className={classes.angalsChoice} onClick={transition}></button>
        </div>
        
    )
}