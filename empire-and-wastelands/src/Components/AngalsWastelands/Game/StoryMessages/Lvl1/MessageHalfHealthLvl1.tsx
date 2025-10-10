import classes from "../../../../Styles/StoryMessages.module.css";
import AngalSon from "../../../../../Images/AngalsWastelandsImage/AngalSon.jpg";

export const MessageHalfHealthLvl1 = ({setShowStoryMessages}: any) => {

    function handleCloseMessage() {
        setShowStoryMessages((prev: any) => ({...prev, halfHealth: false, countForMessage: 1}))
    };

    return (
        <div className={classes.messageAtHalfHealthWasteland}>
            <img className={classes.leftImage} style={{border: "solid 0.3vw darkolivegreen"}} src={AngalSon} alt="AngalSon" draggable="false"/>
            <p>
                Посреди сражения к расположению командира впопыхах и с потрёпанным видом подбежал молодой, совсем ещё юный ангал.
                Этим юношей был Гесит, сын Пембура, недавно поступивший на службу в армию Пустоши. Идя по стопам отца, он хотел доказать, а скорее выслужиться перед женщинами и даже самой Матерью.
                — Какого фамильяра ты здесь делаешь? — громко и удивлённо спросил военачальник.
                — Я же приказал тебе оставаться в Пустоши, — добавил он.
                Протягивая отцу сжатый в руке изодранный стяг Империи, юноша с испугом произнёс:
                — Нет толку слоняться по Дому, когда я могу в бою доказать свою преданность Матери.
                Протяжно выдохнув, отец взял запачканную кровью ткань, которую Гесит протягивал ему.
                — Что это? Откуда это у тебя? Неужели это то, о чём я думаю? — тихо пробормотал Пембур.
                — Ты что, был в сражении? — с укоризной в голосе отец поднял взгляд на сына.
                — Да, но не волнуйся ты так. Эти эльфы совсем не умеют сражаться. Это было легко, — с явной гордостью проговорил юноша.
                Покачав головой из стороны в сторону, Пембур в приказном тоне сказал сыну:
                — Ни шагу от меня, пока битва не закончится.
            </p>
            <button className={classes.nextButtonWasteland} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}