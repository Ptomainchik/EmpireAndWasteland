import classes from "../../../Styles/StoryMessages.module.css";
import DeadElf from "../../../../Images/EmpireMarahImage/DeadElf.webp";
import { useNavigate } from "react-router-dom";

export const LoseMessage = () => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        navigate("/");
    };

    return (
        <div className={classes.loseMessageEmpire}>
            <img className={classes.centerImageLoseEmpire} src={DeadElf} alt="DeadElf" draggable="false"/>
            <p>
                Армия ангалов, как лавина, накатывала на войска Бии, проламывая оборону то здесь, то там, отчего рушились все построения эльфов, обнажая арьергард, где находились лучники.
                Неспособные противостоять такому напору, стрелки утопали в этом ангальском навале.
                Видя, что солдаты не справляются, Бия приказала отступать в надежде сохранить жизни эльфов.
                Такой позор... Брат обязательно припомнит не только ей, но и всему Восточному царству.
            </p>
            <button className={classes.nextButtonEmpire} onClick={handleCloseMessage}>На главную</button>
        </div>
    )
}