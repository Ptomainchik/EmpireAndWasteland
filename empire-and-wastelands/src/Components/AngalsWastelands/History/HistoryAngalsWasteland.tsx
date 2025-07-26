import classes from "../../Styles/Histories.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";

export const HistoryAngalsWasteland = () => {
    return (
        <div className={classes.historyPage}>
            <div className={classes.topbar} style={{background: "darkolivegreen"}}><HomeButton/>История<BackButton/></div>
           
        </div>
    )
}