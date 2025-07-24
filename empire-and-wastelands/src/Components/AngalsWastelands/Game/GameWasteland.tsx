import classes from "../../Styles/Games.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";

export const GameWasteland = () => {
    return (
        <div>
            <div className={classes.topbar}><HomeButton/>Игра<BackButton/></div>
             GameWasteland </div>
    )
}