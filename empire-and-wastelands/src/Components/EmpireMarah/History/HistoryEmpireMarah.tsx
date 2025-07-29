import classes from "../../Styles/Histories.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useState } from "react";
import TracesOfHunting from "../../../Images/ImpireMarahImage/TracesOfHunting.jpg";
import Elder from "../../../Images/ImpireMarahImage/Elder.jpg";
import ElfFury from "../../../Images/ImpireMarahImage/ElfFury.jpg";
import Emperor from "../../../Images/ImpireMarahImage/Emperor.jpg";
import ElfSoldier from "../../../Images/ImpireMarahImage/ElfSoldier.jpg";

export const HistoryEmpireMarah = () => {
    const [showHeadsModalId, setShowHeadsModalId] = useState(null);

    function handleOpenHeadModal(id:any) {
        setShowHeadsModalId(id);
    }

    function handleCloseHeadModal() {
        setShowHeadsModalId(null);
    }

    return (
        <div className={classes.historyPage}>
            <div className={classes.topbar} style={{background: "cadetblue"}}><HomeButton/>История<BackButton/></div>
            <div className={classes.blockButtonHistory}>
                <button className={classes.buttonHead} id={"1"} onClick={() => {handleOpenHeadModal("1")}} style={{background: "cadetblue"}}>Head1</button>
                <button className={classes.buttonHead} id={"2"} onClick={() => {handleOpenHeadModal("2")}} style={{background: "cadetblue"}}>Head2</button>
                <button className={classes.buttonHead} id={"3"} onClick={() => {handleOpenHeadModal("3")}} style={{background: "cadetblue"}}>Head3</button>
                <button className={classes.buttonHead} id={"4"} onClick={() => {handleOpenHeadModal("4")}} style={{background: "cadetblue"}}>Head4</button>
                <button className={classes.buttonHead} id={"5"} onClick={() => {handleOpenHeadModal("5")}} style={{background: "cadetblue"}}>Head5</button>
            </div>

            {showHeadsModalId === "1" && <div id={"1"} className={classes.head}>
                <img className={classes.imageHead} src={Emperor} alt="Emperor" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
                <h3>Head1</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "2" && <div id={"2"} className={classes.head}>
                <img className={classes.imageHead} src={Elder} alt="Elder" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
                <h3>Head2</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "3" && <div id={"3"} className={classes.head}>
                <img className={classes.imageHead} src={ElfFury} alt="ElfFury" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
                <h3>Head3</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "4" && <div id={"4"} className={classes.head}>
                <img className={classes.imageHead} src={ElfSoldier} alt="ElfSoldier" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
                <h3>Head4</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus, consequatur velit omnis minima veniam asperiores libero voluptatum ex. 
                    Voluptas repudiandae nostrum, deserunt culpa porro perspiciatis tempora explicabo fugiat voluptates non?
                </p>
                <button className={classes.closeButton} onClick={handleCloseHeadModal}>Закрыть</button>
            </div> }

            {showHeadsModalId === "5" && <div id={"5"} className={classes.head}>
                <img className={classes.imageHead} src={TracesOfHunting} alt="TracesOfHunting" style={{border: "solid 0.3vw cadetblue"}} draggable={false}/>
                <h3>Head5</h3>
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