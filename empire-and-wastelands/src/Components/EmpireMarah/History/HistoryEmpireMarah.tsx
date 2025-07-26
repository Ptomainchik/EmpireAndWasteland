import classes from "../../Styles/Histories.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";

export const HistoryEmpireMarah = () => {
    return (
        <div className={classes.historyPage}>
            <div className={classes.topbar} style={{background: "cadetblue"}}><HomeButton/>История<BackButton/></div>
        
        </div>
    )
}