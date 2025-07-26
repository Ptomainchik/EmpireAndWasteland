import classes from "../../Styles/Structures.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";

export const StructureAngalsWasteland = () => {
    return (
        <div className={classes.structurePage}>
            <div className={classes.topbar} style={{background: "darkolivegreen"}}><HomeButton/>Структура<BackButton/></div>
            
        </div>
    )
}