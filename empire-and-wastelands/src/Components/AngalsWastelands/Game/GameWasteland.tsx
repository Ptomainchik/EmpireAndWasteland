import classes from "../../Styles/Games.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useState } from "react";

export const GameWasteland = () => {
    const [resources, setResources] = useState(2250);
    const [showShop, setShowShop] = useState(false);
    const [reserve, setReserve] = useState({
        wastelandHunter: 0,
        wastelandJavelin: 0,
        wastelandMaces: 0,
        wastelandAngalit: 0,
    });
    const [reserveSoldier, setReserveSoldier] = useState(
        {wastelandSoldier: {
        wastelandHunter: {
            attack: 10, 
            defense: 5,
            id: 1,
        },
        wastelandJavelin: {
            attack: 15, 
            defense: 5,
            id: 2,
        },
        wastelandMaces: {
            attack: 20, 
            defense: 10,
            id: 3,
        },
        wastelandAngalit: {
            attack: 30, 
            defense: 5,
            id: 4,
        },
        },
    },
        
    );
    const [valuesId, setValuesId] = useState(0);
    const [stateButtonsSkills, setStateButtonsSkills] = useState(false);
    const [stateStyleSoldier, setStateStyleSoldier] = useState(0);
    const [activeButtonId, setActiveButtonId] = useState<string | null>(null);
    const [styledButtons, setStyledButtons] = useState<Record<string, number>>({});
    const [stateButtonSoldiers, setStateButtonSoldiers] = useState({
        wastelandButtonHunter: false,
        wastelandButtonJavelin: false,
        wastelandButtonMaces: false,
        wastelandButtonAngalit: false,
    });

    function handleOpenShop() {
        setShowShop(true);
    }

    function handleCloseShop() {
        setShowShop(false);
    }

    function handleBuyHunter() {
        setResources(prev => prev - 50);
        setReserve(prevReserve => ({
        ...prevReserve,
        wastelandHunter: prevReserve.wastelandHunter + 1,
    }));
    }

    function handleBuyJavelin() {
        setResources(prev => prev - 50);
        setReserve(prevReserve => ({
        ...prevReserve,
        wastelandJavelin: prevReserve.wastelandJavelin + 1,
    }));
    }

    function handleRequestForHunterReserves() {
        setReserve(prevReserve => ({
        ...prevReserve,
        wastelandHunter: prevReserve.wastelandHunter - 1,
    }));
        setStateButtonsSkills(true);
        setStateStyleSoldier(1);
        setStateButtonSoldiers({
            wastelandButtonHunter: true,
            wastelandButtonJavelin: false,
            wastelandButtonMaces: false,
            wastelandButtonAngalit: false,
        });
    }

    function handleRequestForJavelinReserves() {
        setReserve(prevReserve => ({
        ...prevReserve,
        wastelandJavelin: prevReserve.wastelandJavelin - 1,
    }));
        setStateButtonsSkills(true);
        setStateStyleSoldier(2);
        setStateButtonSoldiers({
            wastelandButtonHunter: false,
            wastelandButtonJavelin: true,
            wastelandButtonMaces: false,
            wastelandButtonAngalit: false,
        });
    }

    function handleTroopDeployment(id: string, values: any) {
    setStateButtonsSkills(false);
    setStateStyleSoldier(0);
    if(["E1", "E2", "E3", "E4", "E5", "E6"].includes(id) && stateButtonSoldiers.wastelandButtonHunter === true && valuesId === 0) {
        setValuesId(1);
        setStateButtonSoldiers({
            wastelandButtonHunter: false,
            wastelandButtonJavelin: false,
            wastelandButtonMaces: false,
            wastelandButtonAngalit: false,
        });
        setStyledButtons(prev => ({
            ...prev,
            [id]: 1 // 1 - охотник
        }));
    }
    if(["E1", "E2", "E3", "E4", "E5", "E6"].includes(id) && stateButtonSoldiers.wastelandButtonJavelin === true && valuesId === 0) {
        setValuesId(2);
        setStateButtonSoldiers({
            wastelandButtonHunter: false,
            wastelandButtonJavelin: false,
            wastelandButtonMaces: false,
            wastelandButtonAngalit: false,
        });
        setStyledButtons(prev => ({
            ...prev,
            [id]: 2 // 2 - метатель
        }));
    }
    else{
        return
    }
    
}

    const getButtonClass = (id: string) => {
    const soldierType = styledButtons[id];
    if (soldierType === 1) {
        return classes.unitWastelandHunter;
    }
    else if (soldierType === 2) {
        return classes.unitEmpireEastArcher;
    }
    return classes.cell;
};

    return (
        <div className={classes.gamePageWasteland}>
            
            <div className={classes.topbar} style={{backgroundColor: "darkolivegreen", backgroundImage: "linear-gradient(180deg, black -20%, darkolivegreen 47%, darkolivegreen 53%, black 120%)"}}>
                <HomeButton/>Игра<BackButton/>
            </div>
        
            <div className={classes.skillsBlockEmpire}>

            </div>

                <button className={classes.shopButton} onClick={handleOpenShop}>Магазин</button>

                {showShop && <div className={classes.shop}>
                    <button className={classes.unitWastelandHunter} onClick={handleBuyHunter} disabled={resources <= 0 || stateButtonsSkills === true}>Ангальские охотники</button>
                    {resources} resurs {reserve.wastelandHunter} soldiki
                    <button className={classes.unitWastelandHunter} onClick={handleBuyJavelin} disabled={resources <= 0 || stateButtonsSkills === true}>Ангальские метатели</button>
                    {resources} resurs {reserve.wastelandJavelin} soldiki
                    <button className={classes.closeButton} onClick={handleCloseShop}>Закрыть</button>
                </div>}

            <div className={classes.skillsBlockWasteland}>
                <button className={classes.angalsButtonSkillsHunters} onClick={handleRequestForHunterReserves} disabled={stateStyleSoldier === 2 || stateStyleSoldier === 3 || stateStyleSoldier === 4 ||  stateButtonSoldiers.wastelandButtonHunter === true || reserve.wastelandHunter === 0}>Анагалы охотники: {reserve.wastelandHunter}</button> 
                <button className={classes.angalsButtonSkillsJavelin} onClick={handleRequestForJavelinReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 3 || stateStyleSoldier === 4 || stateButtonSoldiers.wastelandButtonJavelin === true || reserve.wastelandJavelin === 0}>Анагалы метатели: {reserve.wastelandJavelin}</button>
            </div>

            <div className={classes.blockUnits}>
                {/* <button className={classes.unitEmpireEastArcher}></button>
                <button className={classes.unitEmpireEastArcher}></button>
                <button className={classes.unitEmpireEastArcher}></button>
                <button className={classes.unitEmpireEastArcher}></button>
           
                <button className={classes.unitWastelandMaces}></button>
                <button className={classes.unitWastelandMaces}></button>
                <button className={classes.unitWastelandMaces}></button>
                <button className={classes.unitWastelandMaces}></button> */}

                <div className={classes.blockFlex1}>
                    <button className={classes.cell} id={"A1"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.unitEmpireEastArcher} id={"A2"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.unitEmpireEastArcher} id={"A3"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.unitEmpireEastArcher} id={"A4"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.unitEmpireEastArcher} id={"A5"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"A6"}>+</button>
                </div>

                <div className={classes.blockFlex2}>
                    <button className={classes.cell} id={"B1"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"B2"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"B3"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"B4"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"B5"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"B6"} disabled={stateButtonsSkills === true}>+</button>
                </div>

                <div className={classes.blockFlex3}>
                    <button className={classes.cell} id={"C1"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"C2"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"C3"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"C4"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"C5"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"C6"} disabled={stateButtonsSkills === true}>+</button>
                </div>

                <div className={classes.blockFlex4}>
                    <button className={classes.cell} id={"D1"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"D2"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"D3"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"D4"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"D5"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"D6"} disabled={stateButtonsSkills === true}>+</button>
                </div>

                <div className={classes.blockFlex5}>
                    <button 
                        className={getButtonClass("E1")} 
                        id={"E1"} 
                        onClick={() => handleTroopDeployment("E1", valuesId)} 
                        
                    >+</button>
                    <button 
                        className={getButtonClass("E2")}
                        id={"E2"} 
                        onClick={() => handleTroopDeployment("E2", valuesId)} 
                        
                    >+</button>
                    <button 
                        className={getButtonClass("E3")}
                        id={"E3"} 
                        onClick={() => handleTroopDeployment("E3", 0)} 
                        
                    >+</button>
                    <button 
                        className={getButtonClass("E4")}
                        id={"E4"} 
                        onClick={() => handleTroopDeployment("E4", 0)} 
                        
                    >+</button>
                    <button 
                        className={getButtonClass("E5")} 
                        id={"E5"} 
                        onClick={() => handleTroopDeployment("E5", 0)} 
                        
                    >+</button>
                    <button 
                        className={getButtonClass("E6")} 
                        id={"E6"} 
                        onClick={() => handleTroopDeployment("E6", 0)} 
                        
                    >+</button>
                </div>
                    
            </div>
            
        </div>
    )
}