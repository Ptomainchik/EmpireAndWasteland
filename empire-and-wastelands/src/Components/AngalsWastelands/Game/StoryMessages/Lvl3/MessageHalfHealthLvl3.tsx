import classes from "../../../../Styles/StoryMessages.module.css";
import AngalSon from "../../../../../Images/AngalsWastelandsImage/AngalSon.jpg";

export const MessageHalfHealthLvl3 = ({setShowStoryMessages}: any) => {

    function handleCloseMessage() {
        setShowStoryMessages((prev: any) => ({...prev, halfHealth: false, countForMessage: 1}))
    };

    return (
        <div className={classes.messageAtHalfHealthWasteland}>
            <img className={classes.leftImage} style={{border: "solid 0.3vw darkolivegreen"}} src={AngalSon} alt="AngalSon" draggable="false"/>
            <p>
                С безумным взглядом к Пембуру вновь ворвался сын.
                — Мы так растеряем все войска! — в нетерпении прокричал Гесит своему отцу.
                — Я не собираюсь смотреть, как ты погубишь лучших солдат, — с напыщенной наглостью проскрипел юноша.
                — Как ты смеешь заявлять мне такое, щенок шакала! Прочь, пока моё терпение не лопнуло и я не отправил тебя Домой! — возмутился военачальник.
                — Папа, дай мне шанс, я докажу, что прав, — словно скуля, вымолвил парень.
                — С меня хватит! Чего ты хочешь? — в ярости бросил Пембур.
                — Разреши мне пробраться в стан эльфов, и я докажу, на что способен, — умаляюще посмотрев на отца, проговорил Гесит.
                — Ты совсем уже с ума сошёл! — возразил военачальник.
                — Я знаю, где у них что, к тому же я проделывал это уже, — сказав это, его глаза стали шире, словно вымаливая согласие.
                — Не знаю, ну хорошо. Только это будет последний раз, и ты перестанешь подвергать себя опасности в попытках доказать что-то.
                Иди уже, пока я не передумал.
                Услышав эти слова, Гесит, не произнеся ни слова, бросился со всех ног прочь от отца.
            </p>
            <button className={classes.nextButtonWasteland} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}