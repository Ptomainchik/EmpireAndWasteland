import classes from "../../Styles/Structures.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";

export const StructureEmpireMarah = () => {
    return (
        <div className={classes.historyPage}>
            <div className={classes.topbar} style={{background: "cadetblue"}}><HomeButton/>Структура<BackButton/></div>
            
        </div>
    )
}