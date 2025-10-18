import classes from "../../../../Styles/StoryMessages.module.css";
import WastelandWin from "../../../../../Images/AngalsWastelandsImage/WastelandWin.webp";
import { useNavigate } from "react-router-dom";

export const OutroWastelandGameLvl2 = (props:any) => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        props.setResources(props.resources + 450);
        props.setShowStoryMessages((prev: any) => ({...prev, outro: false, countForMessage: 2 }));
        navigate("/gamewaslvl3");
    };

    return (
        <div className={classes.outroWasteland}>
            <img className={classes.centerImageWin} src={WastelandWin} alt="WastelandWin" draggable="false"/>
            <p>
                Бой окончился победой ангалов. Элита подоспела как раз вовремя:
                теперь кроме лучников из лесов на них шли эльфы, облачённые в стальные доспехи, бликующие на солнце,
                с длинными, не менее сверкающими мечами. Но что может сталь перед напором и мощью сокрушительных ударов булав?
                «Кто или что дальше ждёт их в бою?» — промелькнуло в голове у военачальника.
            </p>
            <h1>+450 GOLD</h1>
            <button className={classes.nextButtonWasteland} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}