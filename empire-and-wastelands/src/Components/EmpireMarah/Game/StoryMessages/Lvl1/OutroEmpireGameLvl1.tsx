import classes from "../../../../Styles/StoryMessages.module.css";
import EmpireWin from "../../../../../Images/EmpireMarahImage/EmpireWin.webp";
import { useNavigate } from "react-router-dom";

export const OutroEmpireGameLvl1 = (props:any) => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        props.setResources(props.resources + 350);
        props.setShowStoryMessages((prev: any) => ({...prev, outro: false, countForMessage: 2 }));
        navigate("/gameemplvl2");
    };

    return (
        <div className={classes.outroEmpire}>
            <img className={classes.centerImageWin} src={EmpireWin} alt="EmpireWin" draggable="false"/>
            <p>
                Как только битва утихла, Фурия бросилась на поле боя. Громко и чётко распоряжаясь по пути, чтобы уцелевшие немедленно помогали раненым.
                Присев и наклонившись над одним из лучников, у которого была рваная рана на предплечье, она быстро сняла один из ремешков на своей броне и затянула им руку солдата, чтобы он не истёк кровью,
                при этом мягко приговаривая, что всё будет в порядке, как бы успокаивая раненого.
                Потом она резко приподнялась и стала рыться в своей набедренной сумке, ища травы, которые использовались для остановки крови.
                Затем, выхватив охапку листочков, сунула их в рот и быстро начала их жевать.
                Далее она выплюнула эту массу себе на ладонь и резким движением наложила её на рану, затянув сверху своим платком.
            </p>
            <h1>+350 GOLD</h1>
            <button className={classes.nextButtonEmpire} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}