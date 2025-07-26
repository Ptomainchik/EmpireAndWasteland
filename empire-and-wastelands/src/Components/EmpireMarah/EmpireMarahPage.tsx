import classes from "../Styles/Pages.module.css";
import { BackButton } from "../Buttons/BackButton";
import { HomeButton } from "../Buttons/HomeButton";
import { HistoryButtonEmpire } from "./ButtonsPage/HistoryEmpireButton";
import { StructureButtonEmpire } from "./ButtonsPage/StructureEmpireButton";
import { GameButtonEmpire } from "./ButtonsPage/GameEmpireButton";
import imageCharacter from "../../Images/ImpireMarahImage/EmpireBackgroundChoice.jpg";

export const EmpireMarahPage = () => {
    return (
        <div className={classes.empirePage}>
            <div className={classes.topbar} style={{background: "cadetblue"}}><HomeButton/>Империя Марах<BackButton/></div>
            <img className={classes.imageMainCharacter} src={imageCharacter} alt="imageCharacter" draggable={false}/>
            <div className={classes.blockInfoPage}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam quod error tempore cumque eligendi nemo, molestiae, saepe ipsa obcaecati sint at dolorum? 
                    Quis reiciendis, repellendus nulla et eos consequuntur facere.
                </p>
            </div>
            <div className={classes.blockButtonsPages}>
                <HistoryButtonEmpire/>
                <StructureButtonEmpire/>
                <GameButtonEmpire/>
            </div>
            
        </div>
    )
}