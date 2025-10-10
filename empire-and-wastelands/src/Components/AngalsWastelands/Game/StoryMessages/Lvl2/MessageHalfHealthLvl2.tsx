import classes from "../../../../Styles/StoryMessages.module.css";
import AngalSon from "../../../../../Images/AngalsWastelandsImage/AngalSon.jpg";

export const MessageHalfHealthLvl2 = ({setShowStoryMessages}: any) => {

    function handleCloseMessage() {
        setShowStoryMessages((prev: any) => ({...prev, halfHealth: false, countForMessage: 1}))
    };

    return (
        <div className={classes.messageAtHalfHealthWasteland}>
            <img className={classes.leftImage} style={{border: "solid 0.3vw darkolivegreen"}} src={AngalSon} alt="AngalSon" draggable="false"/>
            <p>
                — Как долго ты ещё будешь игнорировать меня? — возмущённо спросил Гесит.
                — Я знаю, как мы можем победить. Просто позволь мне высказаться, — уже тише добавил он.
                Даже не бросив взгляда, Пембур отчеканил:
                — Тебя вообще не должно быть здесь. Кажется, мы уже с тобой об этом говорили.
                Если хочешь действительно помочь — помогай раненым и обрабатывай раны от стрел.
                Но чтобы в бою я тебя не видел, — жёстко высказался военачальник.
                С явным возмущением юноша, казалось, хотел что-то добавить,
                но, увидев серьёзный гневный взгляд отца, тут же отступил и уже направился в сторону, где располагались раненые солдаты,
                лишь напоследок бросив:
                — Ну, может...
                — Что я тебе сказал! — громко оборвал его Пембур.
            </p>
            <button className={classes.nextButtonWasteland} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}