import classes from "../../../../Styles/StoryMessages.module.css";
import WastelandWin from "../../../../../Images/AngalsWastelandsImage/WastelandWin.webp";
import { useNavigate } from "react-router-dom";

export const OutroWastelandGameLvl3 = (props:any) => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        props.setResources(props.resources + 550);
        props.setShowStoryMessages((prev: any) => ({...prev, outro: false, countForMessage: 2 }));
        navigate("/gamewaslvl4");
    };
    
    return (
        <div className={classes.outroWasteland}>
            <img className={classes.centerImageWin} src={WastelandWin} alt="WastelandWin" draggable="false"/>
            <p>
                Тишину разрывали стоны и крики раненых солдат, большинство из которых получили тяжёлые ранения от шиловидных стрел.
                Как оказалось, лучников в армиях Империи огромное количество, а то, с чем ангалы столкнулись сегодня, повергло их в шок и смятение.
                Целые ряды стрелков поднимались из сухой травы перед несущимися в навале солдатами Пустоши.
                А их выстрелы поражали точно в цель, порой пробивая черепа насквозь.
                Не выдерживая натиска, Пембуру пришлось прибегнуть к атаке ангалитов и разорвать их ангалимы, дабы те в гуще сражения становились безумными звероподобными существами. 
                Победа, но какой ценой.
            </p>
            <h1>+550 GOLD</h1>
            <button className={classes.nextButtonWasteland} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}