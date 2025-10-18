import classes from "../../../../Styles/StoryMessages.module.css";
import EmpireWin from "../../../../../Images/EmpireMarahImage/EmpireWin.webp";
import { useNavigate } from "react-router-dom";

export const OutroEmpireGameLvl3 = (props:any) => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        props.setResources(props.resources + 650);
        props.setShowStoryMessages((prev: any) => ({...prev, outro: false, countForMessage: 2 }));
        navigate("/gameemplvl4");
    };
    
    return (
        <div className={classes.outroEmpire}>
            <img className={classes.centerImageWin} src={EmpireWin} alt="EmpireWin" draggable="false"/>
            <p>
                Окончив бой, Бия и Тэман вернулись к её палатке,
                где их уже встречал эльф в роскошном одеянии с вышитым на груди штандартом императорской династии Ашу, к которой принадлежала и сама царица Востока.
                Учтиво поклонившись перед Фурией, он громогласно заявил:
                — Император Кайсар требует отвести часть западных войск обратно к столице Сур.
                И протянул ей свиток с серебряным тиснением — такой, какие вручали заграничным вассалам.
                Раскрыв свиток, она увидела корявый почерк своего брата:
                «В связи со сложившейся обстановкой столице требуется большее количество солдат.
                Поэтому я, царь Западного царства и император всех лесов и земель Империи Марах, приказываю отвести часть войска, переданного мной Бии, дабы защитить эльфийский народ».
            </p>
            <h1>+650 GOLD</h1>
            <button className={classes.nextButtonEmpire} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}