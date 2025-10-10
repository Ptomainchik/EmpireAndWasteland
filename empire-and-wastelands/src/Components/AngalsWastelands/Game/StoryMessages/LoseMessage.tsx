import classes from "../../../Styles/StoryMessages.module.css";
import DeadAngal from "../../../../Images/AngalsWastelandsImage/DeadAngal.webp";
import { useNavigate } from "react-router-dom";

export const LoseMessage = () => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        navigate("/");
    };

    return (
        <div className={classes.loseMessageWasteland}>
            <img className={classes.centerImageLoseWasteland} src={DeadAngal} alt="DeadAngal" draggable="false"/>
            <p>
                Эльфы наступали волна за волной, от стрел невозможно было укрыться, а ангальский навал превратился в пыль, прибиваемую дождём к земле.
                Не в силах побороть и сдержать имперские войска, Пембур приказал отступать.
                Все, кто уцелел, боялись не поражения, а того, что ждёт их Дома.
                Гнев Матери и её дочерей куда губительнее позора.
            </p>
            <button className={classes.nextButtonWasteland} onClick={handleCloseMessage}>На главную</button>
        </div>
    )
}