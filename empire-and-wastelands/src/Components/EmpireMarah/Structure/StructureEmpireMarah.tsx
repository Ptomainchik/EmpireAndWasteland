import classes from "../../Styles/Structures.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useState } from "react";
import imageKingdom from "../../../Images/ImpireMarahImage/EmpireBackgroundChoice.jpg";

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
            <div className={classes.topbar} style={{background: "cadetblue"}}><HomeButton/>Структура<BackButton/></div>
           
            <button className={classes.buttonWestKingdom} id={"1"} onClick={() => {handleOpenModalKingdom("1")}}></button>

            <button className={classes.buttonEastKingdom} id={"2"} onClick={() => {handleOpenModalKingdom("2")}}></button>

            {showModalKingdom === "1" && 
                <div className={classes.modalWestKingdom} id={"1"}>
                    <img className={classes.imageKingdom} src={imageKingdom} alt="images" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                    <h3>West Kingdom</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Magnam quis animi in deserunt molestias repellendus enim consequatur sequi doloremque eius! 
                        Unde magnam, ratione qui fuga eius quo hic eos voluptatibus!
                    </p>
                    <button className={classes.closeButton} onClick={handleCloseModalKingdom}>Закрыть</button>
            </div>}

            {showModalKingdom === "2" && 
                <div className={classes.modalEastKingdom} id={"2"}>
                    <img className={classes.imageKingdom} src={imageKingdom} alt="images" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                    <h3>East Kingdom</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Magnam quis animi in deserunt molestias repellendus enim consequatur sequi doloremque eius! 
                        Unde magnam, ratione qui fuga eius quo hic eos voluptatibus!
                    </p>
                    <button className={classes.closeButton} onClick={handleCloseModalKingdom}>Закрыть</button>
            </div>}

        </div>
    )
}