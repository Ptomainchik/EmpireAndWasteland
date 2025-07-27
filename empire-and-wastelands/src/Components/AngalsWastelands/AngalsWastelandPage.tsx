import classes from "../Styles/Pages.module.css";
import { BackButton } from "../Buttons/BackButton";
import { HomeButton } from "../Buttons/HomeButton";
import { HistoryButtonWasteland } from "./ButtonsPage/HistoryWastelandButton";
import { StructureButtonWasteland } from "./ButtonsPage/StructureWastelandButton";
import { GameButtonWasteland } from "./ButtonsPage/GameWastelandButton";
import imageCharacter from "../../Images/AngalsWastelandsImage/AngalMainCharacter.jpg";

export const AngalsWastelandPage = () => {
    return (
        <div className={classes.wastelandPage}>
            <div className={classes.topbar} style={{background: "darkolivegreen"}}><HomeButton/>Пустоши Ангалов<BackButton/></div>
            <img className={classes.imageMainCharacter} src={imageCharacter} alt="imageCharacter" draggable={false}/>
            <div className={classes.blockInfoPage}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam quod error tempore cumque eligendi nemo, molestiae, saepe ipsa obcaecati sint at dolorum? 
                    Quis reiciendis, repellendus nulla et eos consequuntur facere.
                </p>
            </div>
            <div className={classes.blockButtonsPages}>
                <HistoryButtonWasteland/>
                <StructureButtonWasteland/>
                <GameButtonWasteland/>
            </div>
        </div>
    )
}