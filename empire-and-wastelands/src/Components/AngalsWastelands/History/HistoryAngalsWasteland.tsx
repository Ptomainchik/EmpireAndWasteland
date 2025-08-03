import classes from "../../Styles/Histories.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useState } from "react";
import AngalsMother from "../../../Images/AngalsWastelandsImage/AngalsMother.jpg";
import AngalShapeshifter from "../../../Images/AngalsWastelandsImage/AngalShapeshifter.jpg";
import FirstHunt from "../../../Images/AngalsWastelandsImage/FirstHunt.jpg";
import AngalSoldier from "../../../Images/AngalsWastelandsImage/AngalSoldier.jpg";
import WomanAngal from "../../../Images/AngalsWastelandsImage/WomanAngal.jpg";
import CoatOfArmsOfWasteland from "../../../Images/AngalsWastelandsImage/CoatOfArmsOfWasteland.webp";

export const HistoryAngalsWasteland = () => {
    const [showHeadsModalId, setShowHeadsModalId] = useState(null);
    
        function handleOpenHeadModal(id:any) {
            setShowHeadsModalId(id);
        }
    
        function handleCloseHeadModal() {
            setShowHeadsModalId(null);
        }
    

    return (
        <div className={classes.historyPageWasteland}>

            <div className={classes.topbar} style={{backgroundColor: "darkolivegreen", backgroundImage: "linear-gradient(180deg, black -20%, darkolivegreen 47%, darkolivegreen 53%, black 120%)"}}>
                <HomeButton/>История<BackButton/>
            </div>

            <div className={classes.blockButtonHistory}>
                <button className={classes.buttonHeadWasteland} id={"1"} onClick={() => {handleOpenHeadModal("1")}}>Глава 1</button>
                <button className={classes.buttonHeadWasteland} id={"2"} onClick={() => {handleOpenHeadModal("2")}}>Глава 2</button>
                <button className={classes.buttonHeadWasteland} id={"3"} onClick={() => {handleOpenHeadModal("3")}}>Глава 3</button>
                <button className={classes.buttonHeadWasteland} id={"4"} onClick={() => {handleOpenHeadModal("4")}}>Глава 4</button>
                <button className={classes.buttonHeadWasteland} id={"5"} onClick={() => {handleOpenHeadModal("5")}}>Глава 5</button>
            </div>

            <div className={classes.backgroundCoatWasteland}>
                <img className={classes.coatOfArms} title="Герб Пустоши" src={CoatOfArmsOfWasteland} alt="CoatOf Arms Of Wasteland Of Arms Empire" draggable={false}/>
            </div>

            {showHeadsModalId === "1" && <div id={"1"} className={classes.head}>
                <img className={classes.imageHead} src={AngalsMother} alt="AngalsMother" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Глава 1</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "2" && <div id={"2"} className={classes.head}>
                <img className={classes.imageHead} src={WomanAngal} alt="WomanAngal" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Глава 2</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "3" && <div id={"3"} className={classes.head}>
                <img className={classes.imageHead} src={AngalShapeshifter} alt="AngalShapeshifter" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Глава 3</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "4" && <div id={"4"} className={classes.head}>
                <img className={classes.imageHead} src={AngalSoldier} alt="AngalSoldier" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Глава 4</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "5" && <div id={"5"} className={classes.head}>
                <img className={classes.imageHead} src={FirstHunt} alt="FirstHunt" style={{border: "solid 0.3vw darkolivegreen"}} draggable={false}/>
                <h3>Глава 5</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

        </div>
    )
}