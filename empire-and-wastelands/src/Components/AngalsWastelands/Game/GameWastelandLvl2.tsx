import classes from "../../Styles/Games.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useEffect, useState } from "react";
import Avatar from "../../../Images/AngalsWastelandsImage/AngalAvatar.jpg";
import Card from "../../../Images/AngalsWastelandsImage/CoatOfArmsOfWasteland.webp";
import CardAngalHunter from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalHunter.jpg";
import CardAngalJavelin from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalJavelin.jpg";
import CardAngalMaces from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalMaces.jpg";
import WestArcher from "../../../Images/ImpireMarahImage/ImageImpireCardWestArcher.jpg";
import WestSwordsman from "../../../Images/ImpireMarahImage/ImageImpireCardWestSwordsman.jpg";
import { LoseMessage } from "./StoryMessages/LoseMessage";
import { IntroWastelandGameLvl2 } from "./StoryMessages/Lvl2/IntroWastelandGameLvl2";
import { MessageHalfHealthLvl2 } from "./StoryMessages/Lvl2/MessageHalfHealthLvl2";
import { OutroWastelandGameLvl2 } from "./StoryMessages/Lvl2/OutroWastelandGameLvl2";
import { useGameResources } from "./HookForResources/HookResources";

export const GameWastelandLvl2 = () => {
    const [resources, setResources] = useGameResources();
        
    const [showShop, setShowShop] = useState(false);
    const [reserve, setReserve] = useState({
        wastelandHunter: 0,
        wastelandJavelin: 0,
        wastelandMaces: 0,
        wastelandAngalit: 0,
    });
    const [stateButtonStoryMessages, setStateButtonStoryMessages] = useState({
        closeButtonIntro: false,
    });
    const [showStoryMessages, setShowStoryMessages]:any = useState({
        intro: true,
        halfHealth: false,
        outro: false,
        countForMessage: 0,
        lose: false,
    });
    const [stateSkillsHero, setStateSkillsHero] = useState({
        duty: 0,
        call: 0,    
        poultice: 0,
        showDuty: false,
        showCall: false,
        showPoultice: false,
    });
    const [stateChoiceButton, setStateChoiceButton] = useState(true);
    const [showGameField, setShowGameField] = useState(false);
    const [showSkillsSoldierWasteland, setShowSkillsSoldierWasteland] = useState(false);
    const [stateSkillsSoldiersWasteland, setStateSkillsSoldiersWasteland] = useState({
        stateSkillsHunter: false,
        stateSkillsJavelin: false,
        stateSkillsMaces: false,
        showStateSkillsHunter: false,
        showStateSkillsJavelin: false,
        showStateSkillsMaces: false,
        stateHunterQuantitySkills: true,
        stateJavelinQuantitySkills: true,
        stateMacesQuantitySkills: true,
    });
    const [buttonStateGame, setButtonStateGame] = useState({
        stateOverallButton: true,
        stateShopButton: true,
        stateStartButton: false,
        stateAttackButton: true,
        stateFixStartButton: false,
        stateButtonValidationOfStart: false,
    });
    const [stateShowScale, setStateShowScale] = useState({
        C1: true,
        C2: true,
        C3: true,
        C4: true,
        D1: true,
        D2: true,
        D3: true,
        D4: true,
    })
    const [occupiedCellOpponent, setOccupiedCellOpponent] = useState({
            A1:{
                name: "Лучники запада",
                occupied: false,
                health: 30,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A2:{
                name: "Лучники запада",
                occupied: false,
                health: 30,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A3:{
                name: "Лучники запада",
                occupied: false,
                health: 30,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A4:{
                name: "Лучники запада",
                occupied: false,
                health: 30,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A5:{
                name: "Мечники запада",
                occupied: false,
                health: 40,
                attack: 15,
                defense: 5,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A6:{
                name: "Мечники запада",
                occupied: false,
                health: 40,
                attack: 15,
                defense: 5,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
            },
    });
    const [occupiedCell, setOccupiedCell] = useState({
            C1:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
                priority: 0,
            },
            C2:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
                priority: 0,
            },
            C3:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
                priority: 0,
            },
            C4:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
                priority: 0,
            },
            D1:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
                priority: 0,
            },
            D2:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
                priority: 0,
            },
            D3:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
                priority: 0,
            },
            D4:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
                priority: 0,
            },
        }
    );// Не тупи это состояние решение всех наших проблем, просто добавляй всё в обьекты с ключ: значение и дёргай за него. Тут решается всё, ходовка, атаки и хранение данных, attack, defense, health. Пердоль пока пальцы не сотрёшь!!!
    const [stateOfButtonsDuringAttack, setStateOfButtonsDuringAttack] = useState(true);
    const [attackQueue, setAttackQueue] = useState(1);
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
        setButtonStateGame({
            stateOverallButton: true,
            stateShopButton: false,
            stateStartButton: false,
            stateAttackButton: true,
            stateFixStartButton: false,
            stateButtonValidationOfStart: false,
        })
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

    function handleBuyMaces() {
        setResources(prev => prev - 50);
        setReserve(prevReserve => ({
        ...prevReserve,
        wastelandMaces: prevReserve.wastelandMaces + 1,
    }));
    }

    function handleBuyPoultice() {
        setResources(prev => prev - 50);
        setStateSkillsHero(prevReserve => ({
        ...prevReserve,
        poultice: prevReserve.poultice + 1,
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

    function handleRequestForMacesReserves() {
        setReserve(prevReserve => ({
        ...prevReserve,
        wastelandMaces: prevReserve.wastelandMaces - 1,
    }));
        setStateButtonsSkills(true);
        setStateStyleSoldier(3);
        setStateButtonSoldiers({
            wastelandButtonHunter: false,
            wastelandButtonJavelin: false,
            wastelandButtonMaces: true,
            wastelandButtonAngalit: false,
        });
    }

    function handleTroopDeployment(id: string) {
    setStateButtonsSkills(false);
    setStateStyleSoldier(0);
    if(["C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"].includes(id) && stateButtonSoldiers.wastelandButtonHunter === true ) {
        
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
        if(id === "C1"){
        setOccupiedCell(prevOccupiedCell => ({
            ...prevOccupiedCell,
            C1:{
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsHunter: true}));
        }
        else if(id === "C2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C2:{    
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsHunter: true}));
        }
        else if(id === "C3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C3:{    
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsHunter: true}));
        }
        else if(id === "C4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C4:{
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsHunter: true}));
        }
        else if(id === "D1"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D1:{
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsHunter: true}));
        }
        else if(id === "D2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D2:{
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsHunter: true}));
        }
        else if(id === "D3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D3:{
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsHunter: true}));
        }
        else if(id === "D4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D4:{
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsHunter: true}));
        }
    }
    else if(["C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"].includes(id) && stateButtonSoldiers.wastelandButtonJavelin === true ) {
        
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
        if(id === "C1"){
        setOccupiedCell(prevOccupiedCell => ({
            ...prevOccupiedCell,
            C1:{
                name: "Метатели",
                occupied: true,
                health: 30,
                attack: 10,
                defense: 5,
                choice: false,
                classWastlelandSoldier: 2,
                showCard: false,
                priority: 3,
            },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsJavelin: true}));
        }
        else if(id === "C2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C2:{    
                    name: "Метатели",
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsJavelin: true}));
        }
        else if(id === "C3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C3:{    
                    name: "Метатели",
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsJavelin: true}));
        }
        else if(id === "C4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C4:{
                    name: "Метатели",
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsJavelin: true}));
        }
        else if(id === "D1"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D1:{
                    name: "Метатели",
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsJavelin: true}));
        }
        else if(id === "D2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D2:{
                    name: "Метатели",
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsJavelin: true}));
        }
        else if(id === "D3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D3:{
                    name: "Метатели",
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsJavelin: true}));
        }
        else if(id === "D4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D4:{
                    name: "Метатели",
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsJavelin: true}));
        }
    }

    else if(["C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"].includes(id) && stateButtonSoldiers.wastelandButtonMaces === true ) {
        
        setStateButtonSoldiers({
            wastelandButtonHunter: false,
            wastelandButtonJavelin: false,
            wastelandButtonMaces: false,
            wastelandButtonAngalit: false,
        });
        setStyledButtons(prev => ({
            ...prev,
            [id]: 3 // 3 - булавоносец
        }));
        if(id === "C1"){
        setOccupiedCell(prevOccupiedCell => ({
            ...prevOccupiedCell,
            C1:{
                name: "Булавоносцы",
                occupied: true,
                health: 40,
                attack: 10,
                defense: 7,
                choice: false,
                classWastlelandSoldier: 3,
                showCard: false,
                priority: 2,
            },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsMaces: true}));
        }
        else if(id === "C2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C2:{    
                    name: "Булавоносцы",
                    occupied: true,
                    health: 40,
                    attack: 10,
                    defense: 7,
                    choice: false,
                    classWastlelandSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsMaces: true}));
        }
        else if(id === "C3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C3:{    
                    name: "Булавоносцы",
                    occupied: true,
                    health: 40,
                    attack: 10,
                    defense: 7,
                    choice: false,
                    classWastlelandSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsMaces: true}));
        }
        else if(id === "C4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C4:{
                    name: "Булавоносцы",
                    occupied: true,
                    health: 40,
                    attack: 10,
                    defense: 7,
                    choice: false,
                    classWastlelandSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsMaces: true}));
        }
        else if(id === "D1"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D1:{
                    name: "Булавоносцы",
                    occupied: true,
                    health: 40,
                    attack: 10,
                    defense: 7,
                    choice: false,
                    classWastlelandSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsMaces: true}));
        }
        else if(id === "D2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D2:{
                    name: "Булавоносцы",
                    occupied: true,
                    health: 40,
                    attack: 10,
                    defense: 7,
                    choice: false,
                    classWastlelandSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsMaces: true}));
        }
        else if(id === "D3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D3:{
                    name: "Булавоносцы",
                    occupied: true,
                    health: 40,
                    attack: 10,
                    defense: 7,
                    choice: false,
                    classWastlelandSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsMaces: true}));
        }
        else if(id === "D4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D4:{
                    name: "Булавоносцы",
                    occupied: true,
                    health: 40,
                    attack: 10,
                    defense: 7,
                    choice: false,
                    classWastlelandSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsMaces: true}));
        }
    }

    else{
        return
    } 
    setButtonStateGame({
        stateOverallButton: true,
        stateShopButton: false,
        stateStartButton: true,
        stateAttackButton: true,
        stateFixStartButton: false,
        stateButtonValidationOfStart: false,
    });
}

   function handleChoiceCellAttack(id: string) {
    setStateChoiceButton(false);
    setOccupiedCell(prev => ({
        ...prev,
        C1: { ...prev.C1, choice: id === "C1", showCard: id === "C1" },
        C2: { ...prev.C2, choice: id === "C2", showCard: id === "C2" },
        C3: { ...prev.C3, choice: id === "C3", showCard: id === "C3" },
        C4: { ...prev.C4, choice: id === "C4", showCard: id === "C4" },
        D1: { ...prev.D1, choice: id === "D1", showCard: id === "D1" },
        D2: { ...prev.D2, choice: id === "D2", showCard: id === "D2" },
        D3: { ...prev.D3, choice: id === "D3", showCard: id === "D3" },
        D4: { ...prev.D4, choice: id === "D4", showCard: id === "D4" },
    }));
    setButtonStateGame({
            stateOverallButton: false,
            stateShopButton: false,
            stateStartButton: false,
            stateAttackButton: true,
            stateFixStartButton: true,
            stateButtonValidationOfStart: true,
        });
}

    function handleAttack(id:any) {
    setStateChoiceButton(true);
    setButtonStateGame(prev => ({
        ...prev,
        stateAttackButton: false,
    }));
    if (id === "A1" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - (occupiedCell.C1.attack - prev.A1.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - (occupiedCell.C2.attack - prev.A1.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - (occupiedCell.C3.attack - prev.A1.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - (occupiedCell.C4.attack - prev.A1.defense),
                first: false
            }
        }));
        handleCounterattack()
    }

    else if (id === "A2" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.C1.attack - prev.A2.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.C2.attack - prev.A2.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.C3.attack - prev.A2.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.C4.attack - prev.A2.defense),
                first: false
            }
        }));
        handleCounterattack()
    }

    else if (id === "A3" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.C1.attack - prev.A3.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.C2.attack - prev.A3.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.C3.attack - prev.A3.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.C4.attack - prev.A3.defense),
                first: false
            }
        }));
        handleCounterattack()
    }

    else if (id === "A4" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.C1.attack - prev.A4.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.C2.attack - prev.A4.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.C3.attack - prev.A4.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.C4.attack - prev.A4.defense),
                first: false
            }
        }));
        handleCounterattack()
    }

    else if (id === "A5" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 4
            }
        }));
        }

        if (occupiedCell.C1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.C1.attack - prev.A5.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 4
            }
        }));
        }

        if (occupiedCell.C2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.C2.attack - prev.A5.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 4
            }
        }));
        }

        if (occupiedCell.C3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.C3.attack - prev.A5.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 4
            }
        }));
        }

        if (occupiedCell.C4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.C4.attack - prev.A5.defense),
                first: false
            }
        }));
        handleCounterattack()
    }

    else if (id === "A6" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 4
            }
        }));
        }

        if (occupiedCell.C1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - (occupiedCell.C1.attack - prev.A6.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 4
            }
        }));
        }

        if (occupiedCell.C2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - (occupiedCell.C2.attack - prev.A6.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 4
            }
        }));
        }

        if (occupiedCell.C3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - (occupiedCell.C3.attack - prev.A6.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 4
            }
        }));
        }

        if (occupiedCell.C4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - (occupiedCell.C4.attack - prev.A6.defense),
                first: false
            }
        }));
        handleCounterattack()
    }


    else if (id === "A1" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - (occupiedCell.D1.attack - prev.A1.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - (occupiedCell.D2.attack - prev.A1.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - (occupiedCell.D3.attack - prev.A1.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - (occupiedCell.D4.attack - prev.A1.defense),
                first: false
            }
        }));
        handleCounterattack()
    }

    else if (id === "A2" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.D1.attack - prev.A2.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.D2.attack - prev.A2.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.D3.attack - prev.A2.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.D4.attack - prev.A2.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    
    else if (id === "A3" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.D1.attack - prev.A3.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.D2.attack - prev.A3.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.D3.attack - prev.A3.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.D4.attack - prev.A3.defense),
                first: false
            }
        }));
        handleCounterattack()
    }

    else if (id === "A4" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.D1.attack - prev.A4.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.D2.attack - prev.A4.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.D3.attack - prev.A4.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.D4.attack - prev.A4.defense),
                first: false
            }
        }));
        handleCounterattack()
    }

    else if (id === "A5" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 4
            }
        }));
        }

        if (occupiedCell.D1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.D1.attack - prev.A5.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 4
            }
        }));
        }

        if (occupiedCell.D2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.D2.attack - prev.A5.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 4
            }
        }));
        }

        if (occupiedCell.D3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.D3.attack - prev.A5.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 4
            }
        }));
        }

        if (occupiedCell.D4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.D4.attack - prev.A5.defense),
                first: false
            }
        }));
        handleCounterattack()
    }

    else if (id === "A6" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 4
            }
        }));
        }

        if (occupiedCell.D1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - (occupiedCell.D1.attack - prev.A6.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 4
            }
        }));
        }

        if (occupiedCell.D2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - (occupiedCell.D2.attack - prev.A6.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 4
            }
        }));
        }

        if (occupiedCell.D3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - (occupiedCell.D3.attack - prev.A6.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 4
            }
        }));
        }

        if (occupiedCell.D4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 1 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - (occupiedCell.D4.attack - prev.A6.defense),
                first: false
            }
        }));
        handleCounterattack()
    }

    else {
        return
    }
   
};
    
function handleCounterattack() {
    setStateOfButtonsDuringAttack(false);
    
    // Получаем текущего атакующего противника
    const attackerKey = `A${attackQueue}` as keyof typeof occupiedCellOpponent;
    const attacker = occupiedCellOpponent[attackerKey];
    
    if (attacker.health > 0) {
        // Фильтруем только занятые клетки с юнитами
        const potentialTargets = Object.entries(occupiedCell)
            .filter(([_, unit]) => unit.occupied && unit.health > 0)
            .map(([key, unit]) => ({ key, ...unit }));
        
        if (potentialTargets.length > 0) {
            // Сортируем цели по приоритету (по убыванию), затем по здоровью (по возрастанию), затем по choice (true first)
            potentialTargets.sort((a, b) => {
                if (a.priority !== b.priority) return b.priority - a.priority;
                if (a.health !== b.health) return a.health - b.health;
                return (a.choice === b.choice) ? 0 : a.choice ? -1 : 1;
            });
            
            // Берем самую приоритетную цель
            const target = potentialTargets[0];
            const damage = attacker.attack - target.defense - 1; // Формула урона
            
            setTimeout(() => {
                setOccupiedCell(prev => ({
                    ...prev,
                    [target.key]: {
                        ...prev[target.key as keyof typeof prev],
                        health: Math.max(0, prev[target.key as keyof typeof prev].health - damage),
                        first: false
                    }
                }));
                
                setStateOfButtonsDuringAttack(true);
                
                // Функция для поиска следующего живого юнита в очереди
                setTimeout(() => {
                    setOccupiedCellOpponent(currentOpponents => {
                        const findNextAliveAttacker = (currentQueue: number) => {
                            let nextQueue = currentQueue === 6 ? 1 : currentQueue + 1;
                            let attempts = 0;
                            
                            while (attempts < 6) {
                                const nextAttackerKey = `A${nextQueue}` as keyof typeof currentOpponents;
                                if (currentOpponents[nextAttackerKey].health > 0) {
                                    return nextQueue;
                                }
                                nextQueue = nextQueue === 6 ? 1 : nextQueue + 1;
                                attempts++;
                            }
                            return 1;
                        };
                        
                        setAttackQueue(findNextAliveAttacker(attackQueue));
                        return currentOpponents;
                    });
                }, 0);

                setButtonStateGame(prev => ({
                    ...prev,
                    stateAttackButton: true,
                }));
            }, 1000);
        } else {
            // Нет целей для атаки
            setStateOfButtonsDuringAttack(true);


            setTimeout(() => {
                setOccupiedCellOpponent(currentOpponents => {
                    const findNextAliveAttacker = (currentQueue: number) => {
                        let nextQueue = currentQueue === 6 ? 1 : currentQueue + 1;
                        let attempts = 0;
                        
                        while (attempts < 6) {
                            const nextAttackerKey = `A${nextQueue}` as keyof typeof currentOpponents;
                            if (currentOpponents[nextAttackerKey].health > 0) {
                                return nextQueue;
                            }
                            nextQueue = nextQueue === 6 ? 1 : nextQueue + 1;
                            attempts++;
                        }
                        return 1;
                    };
                    
                    setAttackQueue(findNextAliveAttacker(attackQueue));
                    return currentOpponents;
                });
            }, 0);
        }
    } else {
        // Атакующий мертв, переходим к следующему
        setStateOfButtonsDuringAttack(true);
        
        setTimeout(() => {
            setOccupiedCellOpponent(currentOpponents => {
                const findNextAliveAttacker = (currentQueue: number) => {
                    let nextQueue = currentQueue === 6 ? 1 : currentQueue + 1;
                    let attempts = 0;
                    
                    while (attempts < 6) {
                        const nextAttackerKey = `A${nextQueue}` as keyof typeof currentOpponents;
                        if (currentOpponents[nextAttackerKey].health > 0) {
                            return nextQueue;
                        }
                        nextQueue = nextQueue === 6 ? 1 : nextQueue + 1;
                        attempts++;
                    }
                    return 1;
                };
                
                setAttackQueue(findNextAliveAttacker(attackQueue));
                return currentOpponents;
            });
        }, 0);
    }
}
// Здесь происходит атака на юнита противника и проверяется приоритет атаки.

    function handleSkillHunter() {
        if (attackQueue === 1) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - 20
            }
        }));
        }
        else if (attackQueue === 2) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - 20
            }
        }));
        }
        else if (attackQueue === 3) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - 20
            }
        }));
        }
        else if (attackQueue === 4) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - 20
            }
        }));
        }
        else if (attackQueue === 5) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - 20
            }
        }));
        }
        else if (attackQueue === 6) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - 20
            }
        }));
        }

        if (stateSkillsSoldiersWasteland.stateSkillsHunter === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, stateHunterQuantitySkills : false}));
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsHunter: false}));
        }
       
    }

    function handleSkillJavelin() {

        if (attackQueue === 1) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - 10,
                defense: prev.A1.defense - 1
            }
        }));
        }
        else if (attackQueue === 2) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - 10,
                defense: prev.A2.defense - 1
            }
        }));
        }
        else if (attackQueue === 3) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - 10,
                defense: prev.A3.defense - 1
            }
        }));
        }
        else if (attackQueue === 4) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - 10,
                defense: prev.A4.defense - 1
            }
        }));
        }
        else if (attackQueue === 5) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - 10,
                defense: prev.A5.defense - 1
            }
        }));
        }
        else if (attackQueue === 6) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - 10,
                defense: prev.A6.defense - 1
            }
        }));
        }

        if (stateSkillsSoldiersWasteland.stateSkillsJavelin === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, stateJavelinQuantitySkills : false}));
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsJavelin: false}));
        }
        
    }

     function handleSkillMaces() {

        if (attackQueue === 1) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - 15,
                defense: prev.A1.defense - 1
            }
        }));
        }
        else if (attackQueue === 2) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - 15,
                defense: prev.A2.defense - 1
            }
        }));
        }
        else if (attackQueue === 3) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - 15,
                defense: prev.A3.defense - 1
            }
        }));
        }
        else if (attackQueue === 4) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - 15,
                defense: prev.A4.defense - 1
            }
        }));
        }
        else if (attackQueue === 5) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - 15,
                defense: prev.A5.defense - 1
            }
        }));
        }
        else if (attackQueue === 6) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - 15,
                defense: prev.A6.defense - 1
            }
        }));
        }

        if (stateSkillsSoldiersWasteland.stateSkillsMaces === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, stateMacesQuantitySkills : false}));
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsMaces: false}));
        }
        
    }

    function handleSkillPoultice() {
        if (occupiedCell.C1.choice === true && occupiedCell.C1.health !== 0 && occupiedCell.C1.health !== 20 && occupiedCell.C1.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: 20,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C1.choice === true && occupiedCell.C1.health !== 0 && occupiedCell.C1.health !== 30 && occupiedCell.C1.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: 30,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C1.choice === true && occupiedCell.C1.health !== 0 && occupiedCell.C1.health !== 40 && occupiedCell.C1.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: 40,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C1.choice === true && occupiedCell.C1.health !== 0 && occupiedCell.C1.health !== 50 && occupiedCell.C1.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: 50,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.C2.choice === true && occupiedCell.C2.health !== 0 && occupiedCell.C2.health !== 20 && occupiedCell.C2.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: 20,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C2.choice === true && occupiedCell.C2.health !== 0 && occupiedCell.C2.health !== 30 && occupiedCell.C2.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: 30,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C2.choice === true && occupiedCell.C2.health !== 0 && occupiedCell.C2.health !== 40 && occupiedCell.C2.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: 40,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C2.choice === true && occupiedCell.C2.health !== 0 && occupiedCell.C2.health !== 50 && occupiedCell.C2.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: 50,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.C3.choice === true && occupiedCell.C3.health !== 0 && occupiedCell.C3.health !== 20 && occupiedCell.C3.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: 20,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C3.choice === true && occupiedCell.C3.health !== 0 && occupiedCell.C3.health !== 30 && occupiedCell.C3.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: 30,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C3.choice === true && occupiedCell.C3.health !== 0 && occupiedCell.C3.health !== 40 && occupiedCell.C3.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: 40,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C3.choice === true && occupiedCell.C3.health !== 0 && occupiedCell.C3.health !== 50 && occupiedCell.C3.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: 50,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.C4.choice === true && occupiedCell.C4.health !== 0 && occupiedCell.C4.health !== 20 && occupiedCell.C4.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: 20,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C4.choice === true && occupiedCell.C4.health !== 0 && occupiedCell.C4.health !== 30 && occupiedCell.C4.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: 30,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C4.choice === true && occupiedCell.C4.health !== 0 && occupiedCell.C4.health !== 40 && occupiedCell.C4.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: 40,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C4.choice === true && occupiedCell.C4.health !== 0 && occupiedCell.C4.health !== 50 && occupiedCell.C4.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: 50,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.D1.choice === true && occupiedCell.D1.health !== 0 && occupiedCell.D1.health !== 20 && occupiedCell.D1.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: 20,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D1.choice === true && occupiedCell.D1.health !== 0 && occupiedCell.D1.health !== 30 && occupiedCell.D1.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: 30,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D1.choice === true && occupiedCell.D1.health !== 0 && occupiedCell.D1.health !== 40 && occupiedCell.D1.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: 40,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D1.choice === true && occupiedCell.D1.health !== 0 && occupiedCell.D1.health !== 50 && occupiedCell.D1.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: 50,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.D2.choice === true && occupiedCell.D2.health !== 0 && occupiedCell.D2.health !== 20 && occupiedCell.D2.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: 20,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D2.choice === true && occupiedCell.D2.health !== 0 && occupiedCell.D2.health !== 30 && occupiedCell.D2.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: 30,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D2.choice === true && occupiedCell.D2.health !== 0 && occupiedCell.D2.health !== 40 && occupiedCell.D2.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: 40,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D2.choice === true && occupiedCell.D2.health !== 0 && occupiedCell.D2.health !== 50 && occupiedCell.D2.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: 50,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.D3.choice === true && occupiedCell.D3.health !== 0 && occupiedCell.D3.health !== 20 && occupiedCell.D3.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: 20,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D3.choice === true && occupiedCell.D3.health !== 0 && occupiedCell.D3.health !== 30 && occupiedCell.D3.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: 30,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D3.choice === true && occupiedCell.D3.health !== 0 && occupiedCell.D3.health !== 40 && occupiedCell.D3.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: 40,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D3.choice === true && occupiedCell.D3.health !== 0 && occupiedCell.D3.health !== 50 && occupiedCell.D3.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: 50,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.D4.choice === true && occupiedCell.D4.health !== 0 && occupiedCell.D4.health !== 20 && occupiedCell.D4.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: 20,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D4.choice === true && occupiedCell.D4.health !== 0 && occupiedCell.D4.health !== 30 && occupiedCell.D4.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: 30,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D4.choice === true && occupiedCell.D4.health !== 0 && occupiedCell.D4.health !== 40 && occupiedCell.D4.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: 40,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D4.choice === true && occupiedCell.D4.health !== 0 && occupiedCell.D4.health !== 50 && occupiedCell.D4.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: 50,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }

        else {
            return
        }
        
    }

    function handleStartGame() {
        setButtonStateGame({
            stateOverallButton: false,
            stateShopButton: false,
            stateStartButton: false,
            stateAttackButton: true,
            stateFixStartButton: false,
            stateButtonValidationOfStart: true,
        });
        setShowGameField(true);
        setShowSkillsSoldierWasteland(true);
        if (stateSkillsSoldiersWasteland.stateSkillsHunter === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsHunter: true}));
        }
        if (stateSkillsSoldiersWasteland.stateSkillsJavelin === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsJavelin: true}));
        }
        if (stateSkillsSoldiersWasteland.stateSkillsMaces === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsMaces: true}));
        }
        if (stateSkillsHero.poultice !== 0){
            setStateSkillsHero(prev => ({...prev, showPoultice: true}))
        }
    };

    useEffect(() => {
        if(occupiedCellOpponent.A1.health + occupiedCellOpponent.A2.health + occupiedCellOpponent.A3.health + occupiedCellOpponent.A4.health + occupiedCellOpponent.A5.health + occupiedCellOpponent.A6.health <= 140 && showStoryMessages.countForMessage === 0) {
            setShowStoryMessages((prev: any) => ({...prev, halfHealth: true}));
        }
        }, [occupiedCellOpponent, showStoryMessages.countForMessage]);

    useEffect(() => {
        if(occupiedCellOpponent.A1.health + occupiedCellOpponent.A2.health + occupiedCellOpponent.A3.health + occupiedCellOpponent.A4.health + occupiedCellOpponent.A5.health + occupiedCellOpponent.A6.health <= 0 && showStoryMessages.countForMessage === 1) {
            setShowStoryMessages((prev: any) => ({...prev, outro: true}));
        }
        }, [occupiedCellOpponent, showStoryMessages.countForMessage]);

    useEffect(() => {
        if(buttonStateGame.stateButtonValidationOfStart === true && occupiedCell.C1.health + occupiedCell.C2.health + occupiedCell.C3.health + occupiedCell.C4.health + occupiedCell.D1.health + occupiedCell.D2.health + occupiedCell.D3.health + occupiedCell.D4.health <= 0) {
        setShowStoryMessages((prev: any) => ({...prev, lose: true}));
    }
    }, [occupiedCell]);

    useEffect(() => {
        if (stateSkillsHero.poultice <= 0) {
            setStateSkillsHero((prev: any) => ({...prev, showPoultice: false}));
        }
    }, [stateSkillsHero.poultice]);

    return (
        <div className={classes.gamePageWasteland}>
            
            <div className={classes.topbar} style={{backgroundColor: "darkolivegreen", backgroundImage: "linear-gradient(180deg, black -20%, darkolivegreen 47%, darkolivegreen 53%, black 120%)"}}>
                <HomeButton/>Игра<BackButton/>
            </div>
            {showStoryMessages.intro && <IntroWastelandGameLvl2 setShowStoryMessages={setShowStoryMessages}/>}

            {showStoryMessages.halfHealth && <MessageHalfHealthLvl2 setShowStoryMessages={setShowStoryMessages}/>}

            {showStoryMessages.outro && <OutroWastelandGameLvl2 setShowStoryMessages={setShowStoryMessages} resources={resources} setResources={setResources}/>}

            {showStoryMessages.lose && <LoseMessage/>}

            <div className={classes.skillsBlockEmpire}>

                {occupiedCell.C1.showCard && <div className={occupiedCell.C1.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.C1.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin
                : occupiedCell.C1.classWastlelandSoldier === 3 
                ? classes.cardWastelandMaces 
                : classes.card
                }>
                    <img className={classes.imageCard} src={occupiedCell.C1.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C1.classWastlelandSoldier === 2 
                    ? CardAngalJavelin 
                    : occupiedCell.C1.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.C1.health}></progress>
                    <p>{occupiedCell.C1.name}</p>
                    <p>Attack:  {occupiedCell.C1.attack}</p>
                    <p>Defense: {occupiedCell.C1.defense}:</p>
                </div>}

                {occupiedCell.C2.showCard && <div className={occupiedCell.C2.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.C2.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : occupiedCell.C2.classWastlelandSoldier === 3 
                ? classes.cardWastelandMaces 
                : classes.card}>
                    <img className={classes.imageCard} src={occupiedCell.C2.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C2.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.C2.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.C2.health}></progress>
                    <p>{occupiedCell.C2.name}</p>
                    <p>Attack:  {occupiedCell.C2.attack}</p>
                    <p>Defense: {occupiedCell.C2.defense}:</p>
                </div>}

                {occupiedCell.C3.showCard && <div className={occupiedCell.C3.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.C3.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : occupiedCell.C3.classWastlelandSoldier === 3 
                ? classes.cardWastelandMaces 
                : classes.card}>
                    <img className={classes.imageCard} src={occupiedCell.C3.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C3.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.C3.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.C3.health}></progress>
                    <p>{occupiedCell.C3.name}</p>
                    <p>Attack:  {occupiedCell.C3.attack}</p>
                    <p>Defense: {occupiedCell.C3.defense}:</p>
                </div>}

                {occupiedCell.C4.showCard && <div className={occupiedCell.C4.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.C4.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : occupiedCell.C4.classWastlelandSoldier === 3 
                ? classes.cardWastelandMaces 
                : classes.card}>
                    <img className={classes.imageCard} src={occupiedCell.C4.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C4.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.C4.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.C4.health}></progress>
                    <p>{occupiedCell.C4.name}</p>
                    <p>Attack:  {occupiedCell.C4.attack}</p>
                    <p>Defense: {occupiedCell.C4.defense}:</p>
                </div>}

                {occupiedCell.D1.showCard && <div className={occupiedCell.D1.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.D1.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : occupiedCell.D1.classWastlelandSoldier === 3 
                ? classes.cardWastelandMaces 
                : classes.card}>
                    <img className={classes.imageCard} src={occupiedCell.D1.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D1.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.D1.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.D1.health}></progress>
                    <p>{occupiedCell.D1.name}</p>
                    <p>Attack:  {occupiedCell.D1.attack}</p>
                    <p>Defense: {occupiedCell.D1.defense}:</p>
                </div>}

                {occupiedCell.D2.showCard && <div className={occupiedCell.D2.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.D2.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : occupiedCell.D2.classWastlelandSoldier === 3 
                ? classes.cardWastelandMaces 
                : classes.card}>
                    <img className={classes.imageCard} src={occupiedCell.D2.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D2.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.D2.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.D2.health}></progress>
                    <p>{occupiedCell.D2.name}</p>
                    <p>Attack:  {occupiedCell.D2.attack}</p>
                    <p>Defense: {occupiedCell.D2.defense}:</p>
                </div>}

                {occupiedCell.D3.showCard && <div className={occupiedCell.D3.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.D3.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : occupiedCell.D3.classWastlelandSoldier === 3 
                ? classes.cardWastelandMaces 
                : classes.card}>
                    <img className={classes.imageCard} src={occupiedCell.D3.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D3.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.D3.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.D3.health}></progress>
                    <p>{occupiedCell.D3.name}</p>
                    <p>Attack:  {occupiedCell.D3.attack}</p>
                    <p>Defense: {occupiedCell.D3.defense}:</p>
                </div>}

                {occupiedCell.D4.showCard && <div className={occupiedCell.D4.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.D4.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : occupiedCell.D4.classWastlelandSoldier === 3 
                ? classes.cardWastelandMaces 
                : classes.card}>
                    <img className={classes.imageCard} src={occupiedCell.D4.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D4.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.D4.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.D4.health}></progress>
                    <p>{occupiedCell.D4.name}</p>
                    <p>Attack:  {occupiedCell.D4.attack}</p>
                    <p>Defense: {occupiedCell.D4.defense}:</p>
                </div>}

                {occupiedCellOpponent.A1.showCard && <div className={classes.cardWestEmpireArcher}>
                    <img className={classes.imageCard} src={WestArcher} alt="WestArcher" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A1.health}></progress>
                    <p>{occupiedCellOpponent.A1.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A1.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A1.defense}:</p>
                </div>}

                {occupiedCellOpponent.A2.showCard && <div className={classes.cardWestEmpireArcher}>
                    <img className={classes.imageCard} src={WestArcher} alt="WestArcher" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A2.health}></progress>
                    <p>{occupiedCellOpponent.A2.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A2.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A2.defense}:</p>
                </div>}

                {occupiedCellOpponent.A3.showCard && <div className={classes.cardWestEmpireArcher}>
                    <img className={classes.imageCard} src={WestArcher} alt="WestArcher" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A3.health}></progress>
                    <p>{occupiedCellOpponent.A3.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A3.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A3.defense}:</p>
                </div>}

                {occupiedCellOpponent.A4.showCard && <div className={classes.cardWestEmpireArcher}>
                    <img className={classes.imageCard} src={WestArcher} alt="WestArcher" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A4.health}></progress>
                    <p>{occupiedCellOpponent.A4.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A4.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A4.defense}:</p>
                </div>}

                {occupiedCellOpponent.A5.showCard && <div className={classes.cardWestEmpireSwordsman}>
                    <img className={classes.imageCard} src={WestSwordsman} alt="WestSwordsman" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A5.health}></progress>
                    <p>{occupiedCellOpponent.A5.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A5.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A5.defense}:</p>
                </div>}
                
                {occupiedCellOpponent.A6.showCard && <div className={classes.cardWestEmpireSwordsman}>
                    <img className={classes.imageCard} src={WestSwordsman} alt="WestSwordsman" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A6.health}></progress>
                    <p>{occupiedCellOpponent.A6.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A6.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A6.defense}:</p>
                </div>}

            </div>

                {showShop && <div className={classes.shop}>
                    
                    <button className={classes.hunterBuy} onClick={handleBuyHunter} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnit}>Ангальские охотники: {reserve.wastelandHunter}</p></button>
                    {resources} resurs 
                    
                    <button className={classes.javelinBuy} onClick={handleBuyJavelin} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnit}>Ангальские метатели: {reserve.wastelandJavelin}</p></button>
                    {resources} resurs 

                    <button className={classes.macesBuy} onClick={handleBuyMaces} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnit}>Ангальские булавоносцы: {reserve.wastelandMaces}</p></button>
                    {resources} resurs
                    
                    <button className={classes.poulticeBuy} onClick={handleBuyPoultice} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnit}>Припарки: {stateSkillsHero.poultice}</p></button>
                    {resources} resurs 

                    <button className={classes.closeButton} onClick={handleCloseShop} disabled={reserve.wastelandHunter + reserve.wastelandJavelin + reserve.wastelandMaces + reserve.wastelandAngalit === 0}>Готово</button>
                    
                </div>}

            <div className={classes.skillsBlockWasteland}>
                {buttonStateGame.stateShopButton && <button className={classes.shopButton} onClick={handleOpenShop}>Магазин</button>}
                {buttonStateGame.stateStartButton && <button className={classes.buttonStartGame} onClick={handleStartGame}>Старт</button>}
                {buttonStateGame.stateOverallButton && <button className={classes.angalsButtonSkillsHunters} onClick={handleRequestForHunterReserves} disabled={stateStyleSoldier === 2 || stateStyleSoldier === 3 || stateStyleSoldier === 4 ||  stateButtonSoldiers.wastelandButtonHunter === true || reserve.wastelandHunter === 0}>Охотники: {reserve.wastelandHunter}</button>} 
                {buttonStateGame.stateOverallButton && <button className={classes.angalsButtonSkillsJavelin} onClick={handleRequestForJavelinReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 3 || stateStyleSoldier === 4 || stateButtonSoldiers.wastelandButtonJavelin === true || reserve.wastelandJavelin === 0}>Метатели: {reserve.wastelandJavelin}</button>}
                {buttonStateGame.stateOverallButton && <button className={classes.angalsButtonSkillsMaces} onClick={handleRequestForMacesReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 2 || stateStyleSoldier === 4 || stateButtonSoldiers.wastelandButtonMaces === true || reserve.wastelandMaces === 0}>Булавоносцы: {reserve.wastelandMaces}</button>}
               
                {showSkillsSoldierWasteland && <div className={classes.skillSoldiersWasteland}>

                    <img className={classes.avatarHero} src={Avatar} alt="Avatar" draggable="false" />

                    {stateSkillsHero.showPoultice && <button className={classes.buttonSkillPoultice} onClick={handleSkillPoultice} title="Припарка лечит выбранного юнита">Припарка: {stateSkillsHero.poultice}</button>}

                    {stateSkillsSoldiersWasteland.showStateSkillsHunter && <button className={classes.buttonSkillHunter} onClick={handleSkillHunter} title="Яростная атака Охотника">Разделка</button>}

                    {stateSkillsSoldiersWasteland.showStateSkillsJavelin && <button className={classes.buttonSkillJavelin} onClick={handleSkillJavelin} title="Смертельный бросок Метателя">Бросок</button>}

                    {stateSkillsSoldiersWasteland.showStateSkillsMaces && <button className={classes.buttonSkillMaces} onClick={handleSkillMaces} title="Дробящий удар Булавоносца">Удар</button>}
                    
                </div>}
            </div>

            <div className={classes.blockUnits}>

                <div className={classes.blockFlex1}>

                    <div className={classes.cellA1}>
                        <button className={attackQueue === 1 ? classes.unitEmpireWestArcherChoice : occupiedCellOpponent.A1.health <= 0 ? classes.unitEmpireDeath : classes.unitEmpireWestArcher} id={"A1"} onClick={() => {handleAttack("A1")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A1: {...prev.A1, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A1: {...prev.A1,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A1.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleImpireUnit} value={occupiedCellOpponent.A1.health} max="100"></progress>
                        </button>
                    </div>

                    <div className={classes.cellA2}>
                        <button className={attackQueue === 2 ? classes.unitEmpireWestArcherChoice : occupiedCellOpponent.A2.health <= 0 ? classes.unitEmpireDeath : classes.unitEmpireWestArcher} id={"A2"} onClick={() => {handleAttack("A2")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A2: {...prev.A2, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A2: {...prev.A2,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A2.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleImpireUnit} value={occupiedCellOpponent.A2.health} max="100"></progress>
                        </button>
                    </div>
                       
                    <div className={classes.cellA3}>
                        <button className={attackQueue === 3 ? classes.unitEmpireWestArcherChoice : occupiedCellOpponent.A3.health <= 0 ? classes.unitEmpireDeath : classes.unitEmpireWestArcher} id={"A3"} onClick={() => {handleAttack("A3")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A3.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleImpireUnit} value={occupiedCellOpponent.A3.health} max="100"></progress>
                        </button>
                    </div>

                    <div className={classes.cellA4}>
                        <button className={attackQueue === 4 ? classes.unitEmpireWestArcherChoice : occupiedCellOpponent.A4.health <= 0 ? classes.unitEmpireDeath : classes.unitEmpireWestArcher} id={"A4"} onClick={() => {handleAttack("A4")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A4.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleImpireUnit} value={occupiedCellOpponent.A4.health} max="100"></progress>
                        </button>
                    </div>

                    <div className={classes.cellA6}>
                        <button className={attackQueue === 5 ? classes.unitEmpireWestSwordsmanChoice : occupiedCellOpponent.A5.health <= 0 ? classes.unitEmpireDeath : classes.unitEmpireWestSwordsman} id={"A5"} onClick={() => {handleAttack("A5")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A5: {...prev.A5, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A5: {...prev.A5,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A5.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleImpireUnit} value={occupiedCellOpponent.A5.health} max="100"></progress>
                        </button>{occupiedCellOpponent.A5.health}
                    </div>
                    
                    <div className={classes.cellA7}>
                        <button className={attackQueue === 6 ? classes.unitEmpireWestSwordsmanChoice : occupiedCellOpponent.A6.health <= 0 ? classes.unitEmpireDeath : classes.unitEmpireWestSwordsman} id={"A6"} onClick={() => {handleAttack("A6")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A6: {...prev.A6, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A6: {...prev.A6,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A6.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleImpireUnit} value={occupiedCellOpponent.A6.health} max="100"></progress>
                        </button>
                    </div>

                </div>

                {buttonStateGame.stateOverallButton && <div>

                    <div className={classes.cellC1}>
                        <button 
                            className={occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.C1.name === "Булавоносцы" && occupiedCell.C1.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.C1.occupied === true && occupiedCell.C1.health === 0 ? classes.unitWastelandDeath : classes.cell} 
                            id={"C1"} 
                            onClick={() => handleTroopDeployment("C1")} 
                            disabled={occupiedCell.C1.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC2}>
                        <button 
                            className={occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.C2.name === "Булавоносцы" && occupiedCell.C2.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.C2.occupied === true && occupiedCell.C2.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"C2"} 
                            onClick={() => handleTroopDeployment("C2")} 
                            disabled={occupiedCell.C2.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC3}>
                        <button 
                            className={occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.C3.name === "Булавоносцы" && occupiedCell.C3.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.C3.occupied === true && occupiedCell.C3.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"C3"} 
                            onClick={() => handleTroopDeployment("C3")} 
                            disabled={occupiedCell.C3.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC4}>
                        <button 
                            className={occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.C4.name === "Булавоносцы" && occupiedCell.C4.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.C4.occupied === true && occupiedCell.C4.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"C4"} 
                            onClick={() => handleTroopDeployment("C4")} 
                            disabled={occupiedCell.C4.occupied === true}>+
                        </button>
                    </div>

                </div>}

                {showGameField && <div>

                    <div className={classes.cellC1}>
                        <button 
                            className={occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitWastelandHunterChoice 
                                : occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitWastelandJavelinChoice 
                                : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.C1.name === "Булавоносцы" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitWastelandMacesChoice 
                                : occupiedCell.C1.name === "Булавоносцы" && occupiedCell.C1.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.C1.occupied === true && occupiedCell.C1.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C1"} 
                            onClick={() => {handleChoiceCellAttack("C1")}} 
                            disabled={occupiedCell.C1.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C1.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C1.health} max="100"></progress>
                        </button>
                    </div>

                    <div className={classes.cellC2}>
                        <button 
                            className={occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitWastelandHunterChoice 
                                : occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitWastelandJavelinChoice 
                                : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.C2.name === "Булавоносцы" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitWastelandMacesChoice 
                                : occupiedCell.C2.name === "Булавоносцы" && occupiedCell.C2.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.C2.occupied === true && occupiedCell.C2.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C2"} 
                            onClick={() => {handleChoiceCellAttack("C2")}} 
                            disabled={occupiedCell.C2.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C2.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C2.health} max="100"></progress>
                        </button>
                    </div>

                    <div className={classes.cellC3}>
                        <button 
                            className={occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitWastelandHunterChoice 
                                : occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitWastelandJavelinChoice 
                                : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.C3.name === "Булавоносцы" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitWastelandMacesChoice 
                                : occupiedCell.C3.name === "Булавоносцы" && occupiedCell.C3.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.C3.occupied === true && occupiedCell.C3.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C3"} 
                            onClick={() => {handleChoiceCellAttack("C3")}} 
                            disabled={occupiedCell.C3.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C3.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C3.health} max="100"></progress>
                        </button>
                    </div>

                    <div className={classes.cellC4}>
                        <button 
                            className={occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitWastelandHunterChoice 
                                : occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitWastelandJavelinChoice 
                                : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.C4.name === "Булавоносцы" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitWastelandMacesChoice 
                                : occupiedCell.C4.name === "Булавоносцы" && occupiedCell.C4.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.C4.occupied === true && occupiedCell.C4.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C4"} 
                            onClick={() => {handleChoiceCellAttack("C4")}} 
                            disabled={occupiedCell.C4.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C4.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C4.health} max="100"></progress>
                        </button>
                    </div>
                    
                </div>}

                {buttonStateGame.stateOverallButton && <div>

                    <div className={classes.cellD1}>
                        <button 
                            className={occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.D1.name === "Булавоносцы" && occupiedCell.D1.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.D1.occupied === true && occupiedCell.D1.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"D1"} 
                            onClick={() => handleTroopDeployment("D1")} 
                            disabled={occupiedCell.D1.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD2}>
                        <button 
                            className={occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.D2.name === "Булавоносцы" && occupiedCell.D2.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.D2.occupied === true && occupiedCell.D2.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"D2"} 
                            onClick={() => handleTroopDeployment("D2")} 
                            disabled={occupiedCell.D2.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD3}>
                        <button 
                            className={occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.D3.name === "Булавоносцы" && occupiedCell.D3.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.D3.occupied === true && occupiedCell.D3.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"D3"} 
                            onClick={() => handleTroopDeployment("D3")} 
                            disabled={occupiedCell.D3.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD4}>
                        <button 
                            className={occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.D4.name === "Булавоносцы" && occupiedCell.D4.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.D4.occupied === true && occupiedCell.D4.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"D4"} 
                            onClick={() => handleTroopDeployment("D4")} 
                            disabled={occupiedCell.D4.occupied === true}>+
                        </button>
                    </div>

                </div>}

                {showGameField && <div>

                    <div className={classes.cellD1}>
                        <button 
                            className={occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitWastelandHunterChoice 
                                : occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitWastelandJavelinChoice 
                                : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.D1.name === "Булавоносцы" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitWastelandMacesChoice 
                                : occupiedCell.D1.name === "Булавоносцы" && occupiedCell.D1.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.D1.occupied === true && occupiedCell.D1.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D1"} 
                            onClick={() => {handleChoiceCellAttack("D1")}} 
                            disabled={occupiedCell.D1.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D1.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D1.health} max="100"></progress>
                        </button>
                    </div>

                    <div className={classes.cellD2}>
                        <button 
                            className={occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitWastelandHunterChoice 
                                : occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitWastelandJavelinChoice 
                                : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.D2.name === "Булавоносцы" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitWastelandMacesChoice 
                                : occupiedCell.D2.name === "Булавоносцы" && occupiedCell.D2.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.D2.occupied === true && occupiedCell.D2.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D2"} 
                            onClick={() => {handleChoiceCellAttack("D2")}} 
                            disabled={occupiedCell.D2.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D2.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D2.health} max="100"></progress>
                        </button>
                    </div>

                    <div className={classes.cellD3}>
                        <button 
                            className={occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitWastelandHunterChoice 
                                : occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitWastelandJavelinChoice 
                                : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.D3.name === "Булавоносцы" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitWastelandMacesChoice 
                                : occupiedCell.D3.name === "Булавоносцы" && occupiedCell.D3.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.D3.occupied === true && occupiedCell.D3.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D3"} 
                            onClick={() => {handleChoiceCellAttack("D3")}} 
                            disabled={occupiedCell.D3.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D3.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D3.health} max="100"></progress>
                        </button>
                    </div>

                    <div className={classes.cellD4}>
                        <button 
                            className={occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitWastelandHunterChoice 
                                : occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 ? classes.unitWastelandHunter 
                                : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitWastelandJavelinChoice 
                                : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 ? classes.unitWastelandJavelin 
                                : occupiedCell.D4.name === "Булавоносцы" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitWastelandMacesChoice 
                                : occupiedCell.D4.name === "Булавоносцы" && occupiedCell.D4.health !== 0 ? classes.unitWastelandMaces 
                                : occupiedCell.D4.occupied === true && occupiedCell.D4.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D4"} 
                            onClick={() => {handleChoiceCellAttack("D4")}} 
                            disabled={occupiedCell.D4.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D4.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D4.health} max="100"></progress>
                        </button>  
                    </div>
                
                </div>}
                    
            </div>
            
        </div>
    )
}