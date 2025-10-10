import classes from "../../../../Styles/StoryMessages.module.css";
import WastelandIntro from "../../../../../Images/AngalsWastelandsImage/WastelandIntro.jpg";

export const IntroWastelandGameLvl1 = ({setShowStoryMessages}:any) => {

    function handleCloseMessage() {
        setShowStoryMessages((prev: any) => ({...prev, intro: false }))
    };
    
    return (
        <div className={classes.introWasteland}>
            <img className={classes.centerImage} style={{border: "solid 0.3vw darkolivegreen"}} src={WastelandIntro} alt="WastelandIntro" draggable="false"/>
            <p>
                Прибыв в пограничные земли, Пембур окинул взглядом бескрайние золотые поля, за которыми простирались холмы и густые леса Империи Марах.
                Тёплый ветер обдувал его лицо, а лучи закатного солнца бросали тени и блики по заливным лугам, превращая пейзаж словно в бурлящее золотое море.
                От одного вида накатывала какая-то безмятежность и чувство свободы, как будто бы никогда и не было никакой изнуряющей жизни в услужении Матери и её дочерей.
                Здесь, посреди этого великолепия, в голову военачальнику пришла мысль, которая словно искра надежды пробежала по всему телу: «А ведь всё могло быть иначе...».
                Так и не успев до конца её осмыслить, среди рядов солдат кто-то воскликнул: «Враг приближается!».
                Вдалеке, средь полей, показались едва уловимые силуэты эльфов, идущие прямо на них.
                Не подавая вида, Пембур громко приказал готовиться к бою.
            </p>
            <button className={classes.nextButtonWasteland} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}