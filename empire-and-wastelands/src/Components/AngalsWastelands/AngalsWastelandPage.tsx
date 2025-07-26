import classes from "../Styles/Pages.module.css";
import { BackButton } from "../Buttons/BackButton";
import { HomeButton } from "../Buttons/HomeButton";
import { HistoryButtonWasteland } from "./ButtonsPage/HistoryWastelandButton";
import { StructureButtonWasteland } from "./ButtonsPage/StructureWastelandButton";
import { GameButtonWasteland } from "./ButtonsPage/GameWastelandButton";

export const AngalsWastelandPage = () => {
    return (
        <div className={classes.wastelandPage}>
            <div className={classes.topbar} style={{background: "darkolivegreen"}}><HomeButton/>Пустоши Ангалов<BackButton/></div>
            <div className={classes.blockButtonsPages}>
                <HistoryButtonWasteland/>
                <StructureButtonWasteland/>
                <GameButtonWasteland/>
            </div>
        </div>
    )
}