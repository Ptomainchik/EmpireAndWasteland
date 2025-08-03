import classes from "../../Styles/Histories.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useState } from "react";
import TracesOfHunting from "../../../Images/ImpireMarahImage/TracesOfHunting.jpg";
import Elder from "../../../Images/ImpireMarahImage/Elder.jpg";
import ElfFury from "../../../Images/ImpireMarahImage/ElfFury.jpg";
import Emperor from "../../../Images/ImpireMarahImage/Emperor.jpg";
import ElfSoldier from "../../../Images/ImpireMarahImage/ElfSoldier.jpg";
import CoatOfArmsEmpire from "../../../Images/ImpireMarahImage/CoatOfArmsEmpire.webp";

export const HistoryEmpireMarah = () => {
    const [showHeadsModalId, setShowHeadsModalId] = useState(null);

    function handleOpenHeadModal(id:any) {
        setShowHeadsModalId(id);
    }

    function handleCloseHeadModal() {
        setShowHeadsModalId(null);
    }

    return (
        <div className={classes.historyPageEmpire}>

            <div className={classes.topbar} style={{backgroundColor: "cadetblue", backgroundImage: "linear-gradient(180deg, black -20%, cadetblue 47%, cadetblue 53%, black 120%)"}}>
                <HomeButton/>История<BackButton/>
            </div>

            <div className={classes.blockButtonHistory}>
                <button className={classes.buttonHeadEmpire} id={"1"} onClick={() => {handleOpenHeadModal("1")}}>Глава 1</button>
                <button className={classes.buttonHeadEmpire} id={"2"} onClick={() => {handleOpenHeadModal("2")}}>Глава 2</button>
                <button className={classes.buttonHeadEmpire} id={"3"} onClick={() => {handleOpenHeadModal("3")}}>Глава 3</button>
                <button className={classes.buttonHeadEmpire} id={"4"} onClick={() => {handleOpenHeadModal("4")}}>Глава 4</button>
                <button className={classes.buttonHeadEmpire} id={"5"} onClick={() => {handleOpenHeadModal("5")}}>Глава 5</button>
            </div>

            <div className={classes.backgroundCoatEmpire}>
                <img className={classes.coatOfArms} title="Герб Империи Марах" src={CoatOfArmsEmpire} alt="Coat Of Arms Empire" draggable={false}/>
            </div>

            {showHeadsModalId === "1" && <div id={"1"} className={classes.head}>
                <img className={classes.imageHead} src={Emperor} alt="Emperor" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
                <h3>Глава 1</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "2" && <div id={"2"} className={classes.head}>
                <img className={classes.imageHead} src={Elder} alt="Elder" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
                <h3>Глава 2</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "3" && <div id={"3"} className={classes.head}>
                <img className={classes.imageHead} src={ElfFury} alt="ElfFury" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
                <h3>Глава 3</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "4" && <div id={"4"} className={classes.head}>
                <img className={classes.imageHead} src={ElfSoldier} alt="ElfSoldier" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
                <h3>Глава 4</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "5" && <div id={"5"} className={classes.head}>
                <img className={classes.imageHead} src={TracesOfHunting} alt="TracesOfHunting" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
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