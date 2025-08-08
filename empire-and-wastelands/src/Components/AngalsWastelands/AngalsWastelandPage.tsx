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

            <div className={classes.topbar} style={{backgroundColor: "darkolivegreen", backgroundImage: "linear-gradient(180deg, black -20%, darkolivegreen 47%, darkolivegreen 53%, black 120%)"}}>
                <HomeButton/>Пустоши Ангалов<BackButton/>
            </div>

            <img className={classes.imageMainCharacter} src={imageCharacter} alt="imageCharacter" draggable={false}/>
            
            <div className={classes.blockInfoPage} style={{background: "rgb(99, 53, 53)"}}>
                <p>
                    Архаичное общество ангалов построено на матриархате, где мужчины не имеют никаких прав.
                    Одной из важнейших основ жизненного уклада Пустошей является ангалим - симбиотический договор между ангалом и животным.
                    В расе ангалов женщины физически превосходят мужчин: они крупнее и выше.
                    Сами представители мужского пола обычно низкорослые и худощавые, поскольку с детства довольствуются малым, исполняя капризы и прихоти женщин.
                    Лишь солдаты армии выглядят более развитыми, но всё равно уступают в силе ангалкам.
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