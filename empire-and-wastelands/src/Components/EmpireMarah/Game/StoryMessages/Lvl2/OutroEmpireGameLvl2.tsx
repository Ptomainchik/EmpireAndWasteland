import classes from "../../../../Styles/StoryMessages.module.css";
import EmpireWin from "../../../../../Images/EmpireMarahImage/EmpireWin.webp";
import { useNavigate } from "react-router-dom";

export const OutroEmpireGameLvl2 = (props:any) => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        props.setResources(props.resources + 550);
        props.setShowStoryMessages((prev: any) => ({...prev, outro: false, countForMessage: 2 }));
        navigate("/gameemplvl3");
    };

    return (
        <div className={classes.outroEmpire}>
            <img className={classes.centerImageWin} src={EmpireWin} alt="EmpireWin" draggable="false"/>
            <p>
                — Столько крови... — тихо прошептала Бия, оглядывая равнину, где лежали тела убитых в сражении сородичей.
                — Зачем ангалам наши леса? Неужели у них наступил голод? Раньше их можно было заметить только здесь, на севере Пустошей.
                Зачем им наши земли? — задумалась Фурия, медленно следуя к своей палатке.
                На этот раз у неё не было сил совсем, и как только она вошла внутрь, то тут же рухнула на соломенную подстилку, накрытую плащом, который с заботой оставил Тэман.  
            </p>
            <h1>+550 GOLD</h1>
            <button className={classes.nextButtonEmpire} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}