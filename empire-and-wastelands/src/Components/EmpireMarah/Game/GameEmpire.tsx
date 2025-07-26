import classes from "../../Styles/Games.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";

export const GameEmpire = () => {
    return (
        <div>
            <div className={classes.topbar} style={{background: "cadetblue"}}><HomeButton/>Игра<BackButton/></div>
        
        </div>
    )
}