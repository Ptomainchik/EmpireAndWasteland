import classes from "../../../../Styles/StoryMessages.module.css";
import WastelandVictory from "../../../../../Images/AngalsWastelandsImage/WastelandVictory.jpg";
import { useNavigate } from "react-router-dom";

export const OutroWastelandGameLvl4 = (props:any) => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        props.setShowStoryMessages((prev: any) => ({...prev, outro: false, countForMessage: 2 }));
        navigate("/"); 
    };
    
    return (
        <div className={classes.outroWastelandFin}>
            <img className={classes.centerImage} style={{border: "solid 0.3vw darkolivegreen"}} src={WastelandVictory} alt="WastelandVictory" draggable="false"/>
            <p>
                Победа? Да, это победа... Но стоила ли она тех жизней, которые пришлось отдать за неё?
                Тысячи загубленных солдат заплатили за неуёмное желание других.
                Для них, тех других, жизнь продолжится и заиграет новыми красками, оплаченная кровью измученных судеб.
                Пир продолжится, и они не заметят ничего, словно этого и не происходило.
                А что мы? Мы так же продолжим кланяться и исполнять всё, что они потребуют?
                Похоже, что да. Но теперь, стоя у погребального костра, на котором сжигали тела его братьев и его собственного сына,
                Пембур ощутил нарастающую ненависть к своему дому и своей незыблемой королеве.
                Потеряв практически все войска, они вернутся после грандиозной охоты с трофеями обратно в логово ненасытного зверя, чтобы залечить свои раны и вновь устремиться выполнять приказы Матери.
                А эльфы? Для них мы останемся безумной толпой и агрессивным соседом.
                Всё, что останется нам, это только мучать себя вопросом — зачем?  
            </p>
            <button className={classes.nextButtonEmpire} onClick={handleCloseMessage}>На главную</button>
        </div>
    )
}