import classes from "../../Styles/Structures.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useState } from "react";
import imageRegion from "../../../Images/AngalsWastelandsImage/WastelandBackgruondChoice.jpg";
import RegionMother from "../../../Images/AngalsWastelandsImage/RegionMother.jpg";
import CentralWastelands from "../../../Images/AngalsWastelandsImage/CentralWastelands.jpg";
import InlandWastelands from "../../../Images/AngalsWastelandsImage/InlandWastelands.jpg";
import OuterWastelands from "../../../Images/AngalsWastelandsImage/OuterWastelands.jpg";

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
                <button className={classes.region1Button} id={"1"} onClick={() => {handleOpenModalRegion("1")}}>Внешние пустоши</button>
                <button className={classes.region2Button} id={"2"} onClick={() => {handleOpenModalRegion("2")}}>Центральные пустоши</button>
                <button className={classes.region3Button} id={"3"} onClick={() => {handleOpenModalRegion("3")}}>Внутренние пустоши</button>
            </div>

            <button className={classes.regionMotherButton} id={"4"} onClick={() => {handleOpenModalRegion("4")}}>Материнские пустоши</button>

            {showRegionModal === "1" &&
            <div className={classes.regionModal}>
                <img className={classes.imageRegion} src={OuterWastelands} alt="Outer Wastelands" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Внешние пустоши</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    In accusantium, odit quae quibusdam adipisci quo soluta sed voluptas, sequi non, debitis voluptatum tempora unde earum rem deserunt laudantium sapiente. 
                    Consectetur!
                </p>
                <button className={classes.closeButton} onClick={handleCloseModalRegion}>Закрыть</button>
            </div> }

            {showRegionModal === "2" &&
            <div className={classes.regionModal}>
                <img className={classes.imageRegion} src={CentralWastelands} alt="Central Wastelands" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Центральные пустоши</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    In accusantium, odit quae quibusdam adipisci quo soluta sed voluptas, sequi non, debitis voluptatum tempora unde earum rem deserunt laudantium sapiente. 
                    Consectetur!
                </p>
                <button className={classes.closeButton} onClick={handleCloseModalRegion}>Закрыть</button>
            </div> }

            {showRegionModal === "3" &&
            <div className={classes.regionModal}>
                <img className={classes.imageRegion} src={InlandWastelands} alt="Inland Wastelands" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Внутренние пустоши</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    In accusantium, odit quae quibusdam adipisci quo soluta sed voluptas, sequi non, debitis voluptatum tempora unde earum rem deserunt laudantium sapiente. 
                    Consectetur!
                </p>
                <button className={classes.closeButton} onClick={handleCloseModalRegion}>Закрыть</button>
            </div> }

            {showRegionModal === "4" &&
            <div className={classes.regionMotherModal}>
                <img className={classes.imageRegion} src={RegionMother} alt="Mother Wastelands" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Материнские пустоши</h3>
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