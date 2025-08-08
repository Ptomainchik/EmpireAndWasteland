import classes from "../../Styles/Structures.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useState } from "react";
import EastEmpireModalImage from "../../../Images/ImpireMarahImage/EastEmpireModalImage.jpg";
import WestEmpireModalImage from "../../../Images/ImpireMarahImage/WestEmpireModalImage.jpg";

export const StructureEmpireMarah = () => {
    const [showModalKingdom, setShowModalKingdom] = useState(null);

    function handleOpenModalKingdom(id:any){
        setShowModalKingdom(id);
    }

    function handleCloseModalKingdom() {
        setShowModalKingdom(null);
    }

    return (
        <div className={classes.structurePageEmpire}>

            <div className={classes.topbar} style={{backgroundColor: "cadetblue", backgroundImage: "linear-gradient(180deg, black -20%, cadetblue 47%, cadetblue 53%, black 120%)"}}>
                <HomeButton/>Структура<BackButton/>
            </div>
           
            <button className={classes.buttonWestKingdom} id={"1"} onClick={() => {handleOpenModalKingdom("1")}}> <h1>Западное царство</h1> </button>

            <button className={classes.buttonEastKingdom} id={"2"} onClick={() => {handleOpenModalKingdom("2")}}> <h1>Восточное царство</h1> </button>

            {showModalKingdom === "1" && 
                <div className={classes.modalWestKingdom} id={"1"}>
                    <img className={classes.imageKingdom} src={WestEmpireModalImage} alt="WestEmpireModalImage" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
                    <h3>Западное царство</h3>
                    <p>
                        В центре западных земель, озарённая лунным светом, возвышается над лесами столица Империи Марах и Западного царства - город Сур.
                        Здесь находится резиденция и дворец императора Кайсара, отсюда исходят законы для всего государства (за исключением Восточного царства).
                        Ночью туман окутывает город, превращая его в сказочный замок в облаках.
                        Днём же здесь кипит жизнь: улочки наполняются народом, а помпезные лавки торговцев привлекают внимание.
                        Ремесленники работают не так, как в других городах континента, а с нарочитой благородностью - медленно, с выверенными движениями, будто участвуют в дворцовом балу.
                        Каменные стены столицы отливают голубым сиянием, подчёркивая её главенствующую роль.
                        Другие города Западного царства, конечно, уступают Суру в величии, но тоже являют собой образцы эльфийской архитектуры.
                        Многие из них, помимо прекрасных зданий, известны своей промышленностью: добыча камня для строительства, металлургические кузни, многочисленные ремесленные мастерские, южные поля, где выращивают хлеб для пропитания жителей.
                    </p>
                    <button className={classes.closeButton} onClick={handleCloseModalKingdom}>Закрыть</button>
            </div>}

            {showModalKingdom === "2" && 
                <div className={classes.modalEastKingdom} id={"2"}>
                    <img className={classes.imageKingdom} src={EastEmpireModalImage} alt="EastEmpireModalImage" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
                    <h3>Восточное царство</h3>
                    <p>
                        Дийна - столица Восточного царства, окутанная лесами и утопающая в кронах деревьев. Она олицетворяет преклонение перед природой, а покой, царящий в её рощах, настраивает на гармонию с окружающим миром. 
                        Здесь звонкий смех эльфов перекликается с птичьей трелью, а шум деревьев, колыхающихся на ветру, успокаивает и вселяет радость в сердца живущих в этом городе.
                        Необыкновенные дома и постройки, выполненные из древесины и покрытые мхом, пересекаются с естественной красотой природы, будто посреди леса вырос живой город. 
                        Попав однажды сюда, не забудешь никогда запах благоухающих ароматов цветов, а извилистые улочки будут вспоминаться с трепетом в сердце.
                        Царица Бия была избрана народом Востока после гражданской войны, когда привела их к миру - хотя все знают, что это была безоговорочная победа.
                        На территории царства находится огромное количество кожевенных мастерских, где выделывают первоклассную кожу для армии и мирских нужд. 
                        Густые леса наполнены ягодами и различными съедобными растениями, которые местные жители выращивают в больших объёмах.
                        Бродя по лесам востока, никогда не поймёшь, когда можно наткнуться на город или поселение, так как они все сливаются с обстановкой и ландшафтом природы.
                    </p>
                    <button className={classes.closeButton} onClick={handleCloseModalKingdom}>Закрыть</button>
            </div>}

        </div>
    )
}