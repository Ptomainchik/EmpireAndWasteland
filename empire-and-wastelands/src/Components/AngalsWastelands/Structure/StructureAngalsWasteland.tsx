import classes from "../../Styles/Structures.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useState } from "react";
import imageRegion from "../../../Images/AngalsWastelandsImage/WastelandBackgruondChoice.jpg";

export const StructureAngalsWasteland = () => {
    const [showRegionModal, setShowRegionModal] = useState(null);

    function handleOpenModalRegion(id:any) {
        setShowRegionModal(id);
    }

    function handleCloseModalRegion() {
        setShowRegionModal(null);
    }

    return (
        <div className={classes.structurePageWasteland}>
            <div className={classes.topbar} style={{background: "darkolivegreen"}}><HomeButton/>Структура<BackButton/></div>
            
            <div className={classes.blockButtonStructure}>
                <button className={classes.region1Button} id={"1"} onClick={() => {handleOpenModalRegion("1")}}>Region1</button>
                <button className={classes.region2Button} id={"2"} onClick={() => {handleOpenModalRegion("2")}}>Region2</button>
                <button className={classes.region3Button} id={"3"} onClick={() => {handleOpenModalRegion("3")}}>Region3</button>
            </div>

            <button className={classes.regionMotherButton} id={"4"} onClick={() => {handleOpenModalRegion("4")}}>RegionMother</button>

            {showRegionModal === "1" &&
            <div className={classes.regionModal}>
                <img className={classes.imageRegion} src={imageRegion} alt="images" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Region1</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    In accusantium, odit quae quibusdam adipisci quo soluta sed voluptas, sequi non, debitis voluptatum tempora unde earum rem deserunt laudantium sapiente. 
                    Consectetur!
                </p>
                <button className={classes.closeButton} onClick={handleCloseModalRegion}>Закрыть</button>
            </div> }

            {showRegionModal === "2" &&
            <div className={classes.regionModal}>
                <img className={classes.imageRegion} src={imageRegion} alt="images" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Region2</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    In accusantium, odit quae quibusdam adipisci quo soluta sed voluptas, sequi non, debitis voluptatum tempora unde earum rem deserunt laudantium sapiente. 
                    Consectetur!
                </p>
                <button className={classes.closeButton} onClick={handleCloseModalRegion}>Закрыть</button>
            </div> }

            {showRegionModal === "3" &&
            <div className={classes.regionModal}>
                <img className={classes.imageRegion} src={imageRegion} alt="images" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Region3</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    In accusantium, odit quae quibusdam adipisci quo soluta sed voluptas, sequi non, debitis voluptatum tempora unde earum rem deserunt laudantium sapiente. 
                    Consectetur!
                </p>
                <button className={classes.closeButton} onClick={handleCloseModalRegion}>Закрыть</button>
            </div> }

            {showRegionModal === "4" &&
            <div className={classes.regionMotherModal}>
                <img className={classes.imageRegion} src={imageRegion} alt="images" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Region4</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    In accusantium, odit quae quibusdam adipisci quo soluta sed voluptas, sequi non, debitis voluptatum tempora unde earum rem deserunt laudantium sapiente. 
                    Consectetur!
                </p>
                <button className={classes.closeButton} onClick={handleCloseModalRegion}>Закрыть</button>
            </div> }
            
        </div>
    )
}