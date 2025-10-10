import classes from "../../../../Styles/StoryMessages.module.css";
import WastelandWin from "../../../../../Images/AngalsWastelandsImage/WastelandWin.webp";
import { useNavigate } from "react-router-dom";

export const OutroWastelandGameLvl1 = (props:any) => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        props.setResources(props.resources + 300);
        props.setShowStoryMessages((prev: any) => ({...prev, outro: false, countForMessage: 2 }));
        navigate("/gamewaslvl2");
    };

    return (
        <div className={classes.outroWasteland}>
            <img className={classes.centerImageWin} src={WastelandWin} alt="WastelandWin" draggable="false"/>
            <p>
                После первой стычки с имперскими войсками Пембур понял, что его сын слукавил, говоря о войсках эльфов с пренебрежением.
                Так как потери среди солдат Пустоши были немалые, а ещё больше было раненых от стрел, которые сыпались на головы солдат словно дождь.
                Но отступать было уже поздно — клич брошен, и на его зов эльфы обязательно ответят. Пока же можно было отпраздновать победу в битве.
            </p>
            <h1>+300 GOLD</h1>
            <button className={classes.nextButtonWasteland} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}