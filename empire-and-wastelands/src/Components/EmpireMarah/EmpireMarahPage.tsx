import classes from "../Styles/Histories.module.css";
import { BackButton } from "../Buttons/BackButton";
import { HomeButton } from "../Buttons/HomeButton";
import { HistoryButtonEmpire } from "./ButtonsPage/HistoryEmpireButton";
import { StructureButtonEmpire } from "./ButtonsPage/StructureEmpireButton";
import { GameButtonEmpire } from "./ButtonsPage/GameEmpireButton";

export const EmpireMarahPage = () => {
    return (
        <div className={classes.empirePage}>
            <div className={classes.topbar}><HomeButton/>Империя Марах<BackButton/></div>
            <HistoryButtonEmpire/>
            <StructureButtonEmpire/>
            <GameButtonEmpire/>
            EmpireMarah
        </div>
    )
}