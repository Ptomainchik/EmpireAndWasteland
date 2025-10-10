import classes from "../Styles/Pages.module.css";
import { BackButton } from "../Buttons/BackButton";
import { HomeButton } from "../Buttons/HomeButton";
import { HistoryButtonEmpire } from "./ButtonsPage/HistoryEmpireButton";
import { StructureButtonEmpire } from "./ButtonsPage/StructureEmpireButton";
import { GameButtonEmpire } from "./ButtonsPage/GameEmpireButton";
import imageCharacter from "../../Images/EmpireMarahImage/BiyaMainCharacter.jpg";

export const EmpireMarahPage = () => {
    return (
        <div className={classes.empirePage}>

            <div className={classes.topbar} style={{backgroundColor: "cadetblue", backgroundImage: "linear-gradient(180deg, black -20%, cadetblue 47%, cadetblue 53%, black 120%)"}}>
                <HomeButton/>Империя Марах<BackButton/>
            </div>

            <img className={classes.imageMainCharacter} src={imageCharacter} alt="imageCharacter" draggable={false}/>

            <div className={classes.blockInfoPageEmpire}>
                <p>
                    Империя Марах состоит из двух царств - Западного и Восточного.
                    В столице Сур правит император Кайсар, который также является царём западных земель.
                    А на востоке главенствует Восточная Фурия - царица Бия, по совместительству родная сестра императора.
                    Сами же эльфы незначительно различаются друг от друга: отличие заключается в мировоззрении и цвете волос - жители запада беловолосые, а восточные с естественным окрасом.
                    Но все они представители одного народа - высокие, с атлетичным телосложением, живущие в одной империи, но в разных царствах.
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