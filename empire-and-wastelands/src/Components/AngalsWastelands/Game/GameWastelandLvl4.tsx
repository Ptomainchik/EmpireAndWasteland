import classes from "../../Styles/Games.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useEffect, useState } from "react";
import Avatar from "../../../Images/AngalsWastelandsImage/AngalAvatar.jpg";
import Card from "../../../Images/AngalsWastelandsImage/CoatOfArmsOfWasteland.webp";
import CardAngalHunter from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalHunter.jpg";
import CardAngalJavelin from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalJavelin.jpg";
import CardAngalMaces from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalMaces.jpg";
import CardAngalAngalit from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalAngalit.jpg";
import WestArcher from "../../../Images/EmpireMarahImage/ImageEmpireCardWestArcher.jpg";
import WestSwordsman from "../../../Images/EmpireMarahImage/ImageEmpireCardWestSwordsman.jpg";
import EastArcher from "../../../Images/EmpireMarahImage/ImageEmpireCardEastArcher.jpg";
import EastPathfinder from "../../../Images/EmpireMarahImage/ImageEmpireCardEastPathfinder.jpg";
import { LoseMessage } from "./StoryMessages/LoseMessage";
import { IntroWastelandGameLvl4 } from "./StoryMessages/Lvl4/IntroWastelandGameLvl4";
import { MessageHalfHealthLvl4 } from "./StoryMessages/Lvl4/MessageHalfHealthLvl4";
import { OutroWastelandGameLvl4 } from "./StoryMessages/Lvl4/OutroWastelandGameLvl4";
import { useGameResources } from "./HookForResources/HookResources";
import { RulesOfGame } from "./RulesOfGame/RulesOfGame";

export const GameWastelandLvl4 = () => {
    const [resources, setResources] = useGameResources();
        
    const [showShop, setShowShop] = useState(false);
    const [showRules, setShowRules] = useState(false);
    const [reserve, setReserve] = useState({
        wastelandHunter: 0,
        wastelandJavelin: 0,
        wastelandMaces: 0,
        wastelandAngalit: 0,
    });
    const [stateButtonStoryMessages, setStateButtonStoryMessages] = useState({
        closeButtonIntro: false,
    });
    const [stateInvisiblePathfinder, setStateInvisiblePathfinder] = useState({pathfinder1: false, pathfinder2: false});
    const [showStoryMessages, setShowStoryMessages]:any = useState({
        intro: true,
        halfHealth: false,
        outro: false,
        countForMessage: 0,
        lose: false,
    });
    const [stateSkillsHero, setStateSkillsHero] = useState({   
        poultice: 0,
        showBloodDebt: false,
        showCall: false,
        showPoultice: false,
    });
    const [showPointerSkills, setShowPointerSkills] = useState({
            showA1:false,
            showA2:false,
            showA3:false,
            showA4:false,
            showA5:false,
            showA6:false,
            showA7:false,
            showA8:false,
            showSkillPoultice: false,
            showSkillHero1: false,
            showSkillHero2: false,
            showSkillHunter: false,
            showSkillJavelin: false,
            showSkillMaces: false,
            showSkillAngalit: false,
    });
    const [showButtonPoultice, setShowButtonPoultice] = useState(false);
    const [stateChoiceButton, setStateChoiceButton] = useState(true);
    const [showGameField, setShowGameField] = useState(false);
    const [showSkillsSoldierWasteland, setShowSkillsSoldierWasteland] = useState(false);
    const [stateSkillsSoldiersWasteland, setStateSkillsSoldiersWasteland] = useState({
        stateSkillsHunter: false,
        stateSkillsJavelin: false,
        stateSkillsMaces: false,
        stateSkillsAngalit: false,
        showStateSkillsHunter: false,
        showStateSkillsJavelin: false,
        showStateSkillsMaces: false,
        showStateSkillsAngalit: false,
        stateHunterQuantitySkills: true,
        stateJavelinQuantitySkills: true,
        stateMacesQuantitySkills: true,
        stateAngalitQuantitySkills: true,
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
                name: "Лучники востока",
                occupied: false,
                health: 150,
                attack: 25,
                defense: 4,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
                buff: "Ответная атака на первую атаку",
            },
            A2:{
                name: "Лучники запада",
                occupied: false,
                health: 80,
                attack: 12,
                defense: 4,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
                buff: "Ответная атака на первую атаку",
            },
            A3:{
                name: "Лучники запада",
                occupied: false,
                health: 80,
                attack: 12,
                defense: 4,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
                buff: "Ответная атака на первую атаку",
            },
            A4:{
                name: "Лучники востока",
                occupied: false,
                health: 150,
                attack: 25,
                defense: 4,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
                buff: "Ответная атака на первую атаку",
            },
            A5:{
                name: "Следопыты востока",
                occupied: false,
                health: 300,
                attack: 30,
                defense: 4,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
                buff: "Нет",
            },
            A6:{
                name: "Мечники запада",
                occupied: false,
                health: 130,
                attack: 18,
                defense: 5,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
                buff: "Уменьшенный урон от атак Метателей",
            },
            A7:{
                name: "Мечники запада",
                occupied: false,
                health: 130,
                attack: 18,
                defense: 5,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
                buff: "Уменьшенный урон от атак Метателей",
            },
            A8:{
                name: "Следопыты востока",
                occupied: false,
                health: 300,
                attack: 30,
                defense: 4,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
                buff: "Нет",
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
    );
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
        if (resources >= 40){
            setResources(prev => prev - 40);
            setReserve(prevReserve => ({
            ...prevReserve,
            wastelandHunter: prevReserve.wastelandHunter + 1,
        }));
        }
        else if (resources < 50){
            return
        }
    }

    function handleBuyJavelin() {
        if (resources >= 70) {
            setResources(prev => prev - 70);
            setReserve(prevReserve => ({
            ...prevReserve,
            wastelandJavelin: prevReserve.wastelandJavelin + 1,
        }));
        }
        else if (resources < 70) {
            return
        }
    }

    function handleBuyMaces() {
        if (resources >= 100) {
            setResources(prev => prev - 100);
            setReserve(prevReserve => ({
            ...prevReserve,
            wastelandMaces: prevReserve.wastelandMaces + 1,
        }));
        }
        else if (resources < 100) {
            return
        }
    }

    function handleBuyAngalit() {
        if (resources >= 150) {
            setResources(prev => prev - 150);
            setReserve(prevReserve => ({
            ...prevReserve,
            wastelandAngalit: prevReserve.wastelandAngalit + 1,
        }));
        }
        else if (resources < 150)
        return
    }

    function handleBuyPoultice() {
        if (resources >= 50) {
            setResources(prev => prev - 50);
            setStateSkillsHero(prevReserve => ({
            ...prevReserve,
            poultice: prevReserve.poultice + 1,
        }));
        }
        else if (resources < 50) {
            return
        }
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

    function handleRequestForAngalitReserves() {
        setReserve(prevReserve => ({
        ...prevReserve,
        wastelandAngalit: prevReserve.wastelandAngalit - 1,
    }));
        setStateButtonsSkills(true);
        setStateStyleSoldier(4);
        setStateButtonSoldiers({
            wastelandButtonHunter: false,
            wastelandButtonJavelin: false,
            wastelandButtonMaces: false,
            wastelandButtonAngalit: true,
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
                    health: 80,
                    attack: 12,
                    defense: 3,
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
                    health: 80,
                    attack: 12,
                    defense: 3,
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
                    health: 80,
                    attack: 12,
                    defense: 3,
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
                    health: 80,
                    attack: 12,
                    defense: 3,
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
                    health: 80,
                    attack: 12,
                    defense: 3,
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
                    health: 80,
                    attack: 12,
                    defense: 3,
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
                    health: 80,
                    attack: 12,
                    defense: 3,
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
                    health: 80,
                    attack: 12,
                    defense: 3,
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
                health: 100,
                attack: 15,
                defense: 4,
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
                    health: 100,
                    attack: 15,
                    defense: 4,
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
                    health: 100,
                    attack: 15,
                    defense: 4,
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
                    health: 100,
                    attack: 15,
                    defense: 4,
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
                    health: 100,
                    attack: 15,
                    defense: 4,
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
                    health: 100,
                    attack: 15,
                    defense: 4,
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
                    health: 100,
                    attack: 15,
                    defense: 4,
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
                    health: 100,
                    attack: 15,
                    defense: 4,
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
                health: 180,
                attack: 20,
                defense: 4,
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
                    health: 180,
                    attack: 20,
                    defense: 4,
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
                    health: 180,
                    attack: 20,
                    defense: 4,
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
                    health: 180,
                    attack: 20,
                    defense: 4,
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
                    health: 180,
                    attack: 20,
                    defense: 4,
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
                    health: 180,
                    attack: 20,
                    defense: 4,
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
                    health: 180,
                    attack: 20,
                    defense: 4,
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
                    health: 180,
                    attack: 20,
                    defense: 4,
                    choice: false,
                    classWastlelandSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsMaces: true}));
        }
    }


    else if(["C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"].includes(id) && stateButtonSoldiers.wastelandButtonAngalit === true ) {
        
        setStateButtonSoldiers({
            wastelandButtonHunter: false,
            wastelandButtonJavelin: false,
            wastelandButtonMaces: false,
            wastelandButtonAngalit: false,
        });
        setStyledButtons(prev => ({
            ...prev,
            [id]: 4 // 4 - ангалит
        }));
        if(id === "C1"){
        setOccupiedCell(prevOccupiedCell => ({
            ...prevOccupiedCell,
            C1:{
                name: "Ангалиты",
                occupied: true,
                health: 250,
                attack: 30,
                defense: 5,
                choice: false,
                classWastlelandSoldier: 4,
                showCard: false,
                priority: 4,
            },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsAngalit: true}));
        }
        else if(id === "C2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C2:{    
                    name: "Ангалиты",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsAngalit: true}));
        }
        else if(id === "C3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C3:{    
                    name: "Ангалиты",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsAngalit: true}));
        }
        else if(id === "C4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C4:{
                    name: "Ангалиты",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsAngalit: true}));
        }
        else if(id === "D1"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D1:{
                    name: "Ангалиты",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsAngalit: true}));
        }
        else if(id === "D2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D2:{
                    name: "Ангалиты",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsAngalit: true}));
        }
        else if(id === "D3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D3:{
                    name: "Ангалиты",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsAngalit: true}));
        }
        else if(id === "D4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D4:{
                    name: "Ангалиты",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersWasteland(prev => ({...prev, stateSkillsAngalit: true}));
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

    function handlePointerSomeTargetsSkill(id: string) {
        if (attackQueue === 1) {
            setShowPointerSkills(prev => ({...prev, showA1: true, showA2: true}));
        }
        else if (attackQueue === 2) {
            setShowPointerSkills(prev => ({...prev, showA1: true, showA2: true, showA3: true,}));
        }
        else if (attackQueue === 3) {
            setShowPointerSkills(prev => ({...prev, showA2: true, showA3: true, showA4: true,}));
        }
        else if (attackQueue === 4) {
            setShowPointerSkills(prev => ({...prev, showA3: true, showA4: true}));
        }
        else if (attackQueue === 5) {
            setShowPointerSkills(prev => ({...prev, showA5: true, showA6: true}));
        }
        else if (attackQueue === 6) {
            setShowPointerSkills(prev => ({...prev, showA5: true, showA6: true, showA7: true,}));
        }
        else if (attackQueue === 7) {
            setShowPointerSkills(prev => ({...prev, showA6: true, showA7: true, showA8: true,}));
        }
        else if (attackQueue === 8) {
            setShowPointerSkills(prev => ({...prev, showA7: true, showA8: true}));
        }
        if (id === "S4") {
            setShowPointerSkills(prev => ({...prev, showSkillAngalit: true}));
        }
    }

    function handlePointerOneTargetSkill(id: string) {
        if (attackQueue === 1) {
            setShowPointerSkills(prev => ({...prev, showA1: true}));
        }
        else if (attackQueue === 2) {
            setShowPointerSkills(prev => ({...prev, showA2: true}));
        }
        else if (attackQueue === 3) {
            setShowPointerSkills(prev => ({...prev, showA3: true}));
        }
        else if (attackQueue === 4) {
            setShowPointerSkills(prev => ({...prev, showA4: true}));
        }
        else if (attackQueue === 5) {
            setShowPointerSkills(prev => ({...prev, showA5: true}));
        }
        else if (attackQueue === 6) {
            setShowPointerSkills(prev => ({...prev, showA6: true}));
        }
        else if (attackQueue === 7) {
            setShowPointerSkills(prev => ({...prev, showA7: true}));
        }
        else if (attackQueue === 8) {
            setShowPointerSkills(prev => ({...prev, showA8: true}));
        }

        if (id === "S1") {
            setShowPointerSkills(prev => ({...prev, showSkillHunter: true}));
        }
        else if (id === "S2") {
            setShowPointerSkills(prev => ({...prev, showSkillJavelin: true}));
        }
        else if (id === "S3") {
            setShowPointerSkills(prev => ({...prev, showSkillMaces: true}));
        }
    }

    function handlePointerPoultice (id: string) {
        if (id === "SP") {
            setShowPointerSkills(prev => ({...prev, showSkillPoultice: true}));
        }
    }

    function handlePointerCall (id: string) {
    if (id === "SH1") {
            setShowPointerSkills(prev => ({...prev, showSkillHero1: true}));
        }
    }

    function handlePointerBloodDebt(id: string) {
    if (id === "SH2") {
            setShowPointerSkills(prev => ({...prev, showSkillHero2: true}));
        }
    }

    function handlePointerTargetsSkillsFalse () {
        setShowPointerSkills(prev => ({...prev,
            showA1: false,
            showA2: false,
            showA3: false,
            showA4: false,
            showA5: false,
            showA6: false,
            showA7: false,
            showA8: false,
            showSkillPoultice: false,
            showSkillHero1: false,
            showSkillHero2: false,
            showSkillHunter: false,
            showSkillJavelin: false,
            showSkillMaces: false,
            showSkillAngalit: false,
        }))
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
                health: prev.C1.health - 5
            }
        }));
        }

        if (occupiedCell.C1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - occupiedCell.C1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.C1.attack - prev.A1.defense),
                    first: false
            }
            }));
        }
        
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 5
            }
        }));
        }
        
        if (occupiedCell.C2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - occupiedCell.C2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.C2.attack - prev.A1.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 5
            }
        }));
        }
        
        if (occupiedCell.C3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - occupiedCell.C3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.C3.attack - prev.A1.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 5
            }
        }));
        }
        
        if (occupiedCell.C4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - occupiedCell.C4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.C4.attack - prev.A1.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }

    else if (id === "A2" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 5
            }
        }));
        }
        
        if (occupiedCell.C1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - occupiedCell.C1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.C1.attack - prev.A2.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 5
            }
        }));
        }
        
        if (occupiedCell.C2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - occupiedCell.C2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.C2.attack - prev.A2.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 5
            }
        }));
        }
        
        if (occupiedCell.C3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - occupiedCell.C3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.C3.attack - prev.A2.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 5
            }
        }));
        }
        
        if (occupiedCell.C4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - occupiedCell.C4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.C4.attack - prev.A2.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }

    else if (id === "A3" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 5
            }
        }));
        }
        
        if (occupiedCell.C1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - occupiedCell.C1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.C1.attack - prev.A3.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 5
            }
        }));
        }
        
        if (occupiedCell.C2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - occupiedCell.C2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.C2.attack - prev.A3.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 5
            }
        }));
        }
        
        if (occupiedCell.C3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - occupiedCell.C3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.C3.attack - prev.A3.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 5
            }
        }));
        }
        
        if (occupiedCell.C4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - occupiedCell.C4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.C4.attack - prev.A3.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }

    else if (id === "A4" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 5
            }
        }));
        }
        
        if (occupiedCell.C1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - occupiedCell.C1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.C1.attack - prev.A4.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 5
            }
        }));
        }
        
        if (occupiedCell.C2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - occupiedCell.C2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.C2.attack - prev.A4.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 5
            }
        }));
        }
        
        if (occupiedCell.C3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - occupiedCell.C3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.C3.attack - prev.A4.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 5
            }
        }));
        }
        
        if (occupiedCell.C4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - occupiedCell.C4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.C4.attack - prev.A4.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }

    else if (id === "A5" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 5
            }
        }));
        }

        if (occupiedCell.C1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - occupiedCell.C1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.C1.attack - prev.A5.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 5
            }
        }));
        }

        if (occupiedCell.C2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - occupiedCell.C2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.C2.attack - prev.A5.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 5
            }
        }));
        }

        if (occupiedCell.C3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - occupiedCell.C3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.C3.attack - prev.A5.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 5
            }
        }));
        }

        if (occupiedCell.C4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - occupiedCell.C4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.C4.attack - prev.A5.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }

    else if (id === "A6" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 5
            }
        }));
        }

        if (occupiedCell.C1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - occupiedCell.C1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.C1.attack - prev.A6.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 5
            }
        }));
        }

        if (occupiedCell.C2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - occupiedCell.C2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.C2.attack - prev.A6.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 5
            }
        }));
        }

        if (occupiedCell.C3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - occupiedCell.C3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.C3.attack - prev.A6.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 5
            }
        }));
        }

        if (occupiedCell.C4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - occupiedCell.C4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.C4.attack - prev.A6.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }


    else if (id === "A7" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A7.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 5
            }
        }));
        }

        if (occupiedCell.C1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - occupiedCell.C1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.C1.attack - prev.A7.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A7.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 5
            }
        }));
        }

        if (occupiedCell.C2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - occupiedCell.C2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.C2.attack - prev.A7.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A7.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 5
            }
        }));
        }

        if (occupiedCell.C3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - occupiedCell.C3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.C3.attack - prev.A7.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A7.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 5
            }
        }));
        }

        if (occupiedCell.C4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - occupiedCell.C4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.C4.attack - prev.A7.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }


    else if (id === "A8" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if(occupiedCellOpponent.A8.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: prev.C1.health - 5
            }
        }));
        }

        if (occupiedCell.C1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A8: {
                ...prev.A8,
                health: prev.A8.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - occupiedCell.C1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.C1.attack - prev.A8.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if(occupiedCellOpponent.A8.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: prev.C2.health - 5
            }
        }));
        }

        if (occupiedCell.C2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A8: {
                ...prev.A8,
                health: prev.A8.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - occupiedCell.C2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.C2.attack - prev.A8.defense),
                    first: false
            }
            }));
        }
        
        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if(occupiedCellOpponent.A8.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: prev.C3.health - 5
            }
        }));
        }

        if (occupiedCell.C3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A8: {
                ...prev.A8,
                health: prev.A8.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - occupiedCell.C3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.C3.attack - prev.A8.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if(occupiedCellOpponent.A8.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: prev.C4.health - 5
            }
        }));
        }

        if (occupiedCell.C4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A8: {
                ...prev.A8,
                health: prev.A8.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.C4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - occupiedCell.C4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.C4.attack - prev.A8.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }


    else if (id === "A1" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 5
            }
        }));
        }
        
        if (occupiedCell.D1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - occupiedCell.D1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.D1.attack - prev.A1.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 5
            }
        }));
        }
        
        if (occupiedCell.D2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - occupiedCell.D2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.D2.attack - prev.A1.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 5
            }
        }));
        }
        
        if (occupiedCell.D3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - occupiedCell.D3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.D3.attack - prev.A1.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A1.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 5
            }
        }));
        }
        
        if (occupiedCell.D4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - occupiedCell.D4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.D4.attack - prev.A1.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }

    else if (id === "A2" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 5
            }
        }));
        }

        if (occupiedCell.D1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - occupiedCell.D1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.D1.attack - prev.A2.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 5
            }
        }));
        }
        
        if (occupiedCell.D2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - occupiedCell.D2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.D2.attack - prev.A2.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 5
            }
        }));
        }
        
        if (occupiedCell.D3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - occupiedCell.D3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.D3.attack - prev.A2.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 5
            }
        }));
        }
        
        if (occupiedCell.D4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - occupiedCell.D4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.D4.attack - prev.A2.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    
    else if (id === "A3" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 5
            }
        }));
        }
        
        if (occupiedCell.D1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - occupiedCell.D1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.D1.attack - prev.A3.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 5
            }
        }));
        }
        
        if (occupiedCell.D2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - occupiedCell.D2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.D2.attack - prev.A3.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 5
            }
        }));
        }
        
        if (occupiedCell.D3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - occupiedCell.D3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.D3.attack - prev.A3.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 5
            }
        }));
        }
        
        if (occupiedCell.D4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - occupiedCell.D4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.D4.attack - prev.A3.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }

    else if (id === "A4" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 5
            }
        }));
        }
        
        if (occupiedCell.D1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - occupiedCell.D1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.D1.attack - prev.A4.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 5
            }
        }));
        }
        
        if (occupiedCell.D2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - occupiedCell.D2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.D2.attack - prev.A4.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 5
            }
        }));
        }
        
        if (occupiedCell.D3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - occupiedCell.D3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.D3.attack - prev.A4.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 5
            }
        }));
        }
        
        if (occupiedCell.D4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - occupiedCell.D4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.D4.attack - prev.A4.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }

    else if (id === "A5" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 5
            }
        }));
        }

        if (occupiedCell.D1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - occupiedCell.D1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.D1.attack - prev.A5.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 5
            }
        }));
        }

        if (occupiedCell.D2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - occupiedCell.D2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.D2.attack - prev.A5.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 5
            }
        }));
        }

        if (occupiedCell.D3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 2
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - occupiedCell.D3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.D3.attack - prev.A5.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 5
            }
        }));
        }

        if (occupiedCell.D4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A5: {
                ...prev.A5,
                health: prev.A5.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - occupiedCell.D4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.D4.attack - prev.A5.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }

    else if (id === "A6" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 5
            }
        }));
        }

        if (occupiedCell.D1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - occupiedCell.D1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.D1.attack - prev.A6.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 5
            }
        }));
        }

        if (occupiedCell.D2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - occupiedCell.D2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.D2.attack - prev.A6.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 5
            }
        }));
        }

        if (occupiedCell.D3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - occupiedCell.D3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.D3.attack - prev.A6.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A6.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 5
            }
        }));
        }

        if (occupiedCell.D4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - occupiedCell.D4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.D4.attack - prev.A6.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }


    else if (id === "A7" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A7.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 5
            }
        }));
        }

        if (occupiedCell.D1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - occupiedCell.D1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.D1.attack - prev.A7.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A7.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 5
            }
        }));
        }

        if (occupiedCell.D2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - occupiedCell.D2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.D2.attack - prev.A7.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A7.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 5
            }
        }));
        }

        if (occupiedCell.D3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - occupiedCell.D3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.D3.attack - prev.A7.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A7.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 5
            }
        }));
        }

        if (occupiedCell.D4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - occupiedCell.D4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.D4.attack - prev.A7.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }


    else if (id === "A8" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if(occupiedCellOpponent.A8.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: prev.D1.health - 5
            }
        }));
        }

        if (occupiedCell.D1.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A8: {
                ...prev.A8,
                health: prev.A8.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D1.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - occupiedCell.D1.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.D1.attack - prev.A8.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if(occupiedCellOpponent.A8.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: prev.D2.health - 5
            }
        }));
        }

        if (occupiedCell.D2.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A8: {
                ...prev.A8,
                health: prev.A8.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D2.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - occupiedCell.D2.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.D2.attack - prev.A8.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if(occupiedCellOpponent.A8.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: prev.D3.health - 5
            }
        }));
        }

        if (occupiedCell.D3.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A8: {
                ...prev.A8,
                health: prev.A8.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D3.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - occupiedCell.D3.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.D3.attack - prev.A8.defense),
                    first: false
            }
            }));
        }

        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if(occupiedCellOpponent.A8.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: prev.D4.health - 5
            }
        }));
        }

        if (occupiedCell.D4.name === "Метатели") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A8: {
                ...prev.A8,
                health: prev.A8.health + 2 
            }
            }));
        }
        // Это баф Мечников запада, меньший урон от Метателей.

        if (occupiedCell.D4.name === "Ангалиты") {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - occupiedCell.D4.attack ,
                    first: false
            }
            }));
        }
        else {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.D4.attack - prev.A8.defense),
                    first: false
            }
            }));
        }

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
                            let nextQueue = currentQueue === 8 ? 1 : currentQueue + 1;
                            let attempts = 0;
                            
                            while (attempts < 8) {
                                const nextAttackerKey = `A${nextQueue}` as keyof typeof currentOpponents;
                                if (currentOpponents[nextAttackerKey].health > 0) {
                                    return nextQueue;
                                }
                                nextQueue = nextQueue === 8 ? 1 : nextQueue + 1;
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
                        let nextQueue = currentQueue === 8 ? 1 : currentQueue + 1;
                        let attempts = 0;
                        
                        while (attempts < 8) {
                            const nextAttackerKey = `A${nextQueue}` as keyof typeof currentOpponents;
                            if (currentOpponents[nextAttackerKey].health > 0) {
                                return nextQueue;
                            }
                            nextQueue = nextQueue === 8 ? 1 : nextQueue + 1;
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
                    let nextQueue = currentQueue === 8 ? 1 : currentQueue + 1;
                    let attempts = 0;
                    
                    while (attempts < 8) {
                        const nextAttackerKey = `A${nextQueue}` as keyof typeof currentOpponents;
                        if (currentOpponents[nextAttackerKey].health > 0) {
                            return nextQueue;
                        }
                        nextQueue = nextQueue === 8 ? 1 : nextQueue + 1;
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
        else if (attackQueue === 7) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A7: {
                ...prev.A7,
                health: prev.A7.health - 20
            }
        }));
        }
        else if (attackQueue === 8) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A8: {
                ...prev.A8,
                health: prev.A8.health - 20
            }
        }));
        }

        if (stateSkillsSoldiersWasteland.stateSkillsHunter === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, stateHunterQuantitySkills : false}));
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsHunter: false}));
        }
        setShowPointerSkills(prev => ({...prev, showA1: false, showA2: false, showA3: false, showA4: false, showA5: false, showA6: false, showA7: false, showA8: false, showSkillHunter: false}));
    }

    function handleSkillJavelin() {

        if (attackQueue === 1) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - 20,
                defense: prev.A1.defense - 1
            }
        }));
        }
        else if (attackQueue === 2) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - 20,
                defense: prev.A2.defense - 1
            }
        }));
        }
        else if (attackQueue === 3) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - 20,
                defense: prev.A3.defense - 1
            }
        }));
        }
        else if (attackQueue === 4) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - 20,
                defense: prev.A4.defense - 1
            }
        }));
        }
        else if (attackQueue === 5) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - 20,
                defense: prev.A5.defense - 1
            }
        }));
        }
        else if (attackQueue === 6) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - 20,
                defense: prev.A6.defense - 1
            }
        }));
        }
        else if (attackQueue === 7) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A7: {
                ...prev.A7,
                health: prev.A7.health - 20,
                defense: prev.A7.defense - 1
            }
        }));
        }
        else if (attackQueue === 8) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A8: {
                ...prev.A8,
                health: prev.A8.health - 20,
                defense: prev.A8.defense - 1
            }
        }));
        }

        if (stateSkillsSoldiersWasteland.stateSkillsJavelin === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, stateJavelinQuantitySkills : false}));
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsJavelin: false}));
        }
        setShowPointerSkills(prev => ({...prev, showA1: false, showA2: false, showA3: false, showA4: false, showA5: false, showA6: false, showA7: false, showA8: false, showSkillJavelin: false}));
    }

    function handleSkillMaces() {

        if (attackQueue === 1) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - 25,
                defense: prev.A1.defense - 2
            }
        }));
        }
        else if (attackQueue === 2) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - 25,
                defense: prev.A2.defense - 2
            }
        }));
        }
        else if (attackQueue === 3) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - 25,
                defense: prev.A3.defense - 2
            }
        }));
        }
        else if (attackQueue === 4) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - 25,
                defense: prev.A4.defense - 2
            }
        }));
        }
        else if (attackQueue === 5) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - 25,
                defense: prev.A5.defense - 2
            }
        }));
        }
        else if (attackQueue === 6) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - 25,
                defense: prev.A6.defense - 2
            }
        }));
        }
        else if (attackQueue === 7) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A7: {
                ...prev.A7,
                health: prev.A7.health - 25,
                defense: prev.A7.defense - 2
            }
        }));
        }
        else if (attackQueue === 8) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A8: {
                ...prev.A8,
                health: prev.A8.health - 25,
                defense: prev.A8.defense - 2
            }
        }));
        }

        if (stateSkillsSoldiersWasteland.stateSkillsMaces === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, stateMacesQuantitySkills : false}));
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsMaces: false}));
        }
        setShowPointerSkills(prev => ({...prev, showA1: false, showA2: false, showA3: false, showA4: false, showA5: false, showA6: false, showA7: false, showA8: false, showSkillMaces: false}));
    }
    
    
    function handleSkillAngalit() {

        if (attackQueue === 1) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - 15,
                
            },
            A2: {
                ...prev.A2,
                health: prev.A2.health - 5,
                
            },
        }));
        }
        else if (attackQueue === 2) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - 5,
                
            },
            A2: {
                ...prev.A2,
                health: prev.A2.health - 15,
                
            },
            A3: {
                ...prev.A3,
                health: prev.A3.health - 5,
                
            },
        }));
        }
        else if (attackQueue === 3) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - 5,
                
            },
            A3: {
                ...prev.A3,
                health: prev.A3.health - 15,
                
            },
            A4: {
                ...prev.A4,
                health: prev.A4.health - 5,
                
            },
        }));
        }
        else if (attackQueue === 4) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - 5,
                
            },
            A4: {
                ...prev.A4,
                health: prev.A4.health - 15,
                
            },
        }));
        }
        else if (attackQueue === 5) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - 15,
                
            },
            A6: {
                ...prev.A6,
                health: prev.A6.health - 5,
                
            },
        }));
        }
        else if (attackQueue === 6) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - 5,
                
            },
            A6: {
                ...prev.A6,
                health: prev.A6.health - 15,
                
            },
            A7: {
                ...prev.A7,
                health: prev.A7.health - 5,
                
            },
        }));
        }
        else if (attackQueue === 7) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - 5,
                
            },
            A7: {
                ...prev.A7,
                health: prev.A7.health - 15,
                
            },
            A8: {
                ...prev.A8,
                health: prev.A8.health - 5,
                
            },
        }));
        }
        else if (attackQueue === 8) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A7: {
                ...prev.A7,
                health: prev.A7.health - 5,
                
            },
            A8: {
                ...prev.A8,
                health: prev.A8.health - 15,
                
            },
        }));
        }

        if (stateSkillsSoldiersWasteland.stateSkillsAngalit === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, stateAngalitQuantitySkills : false}));
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsAngalit: false}));
        }
        setShowPointerSkills(prev => ({...prev, showA1: false, showA2: false, showA3: false, showA4: false, showA5: false, showA6: false, showA7: false, showA8: false, showSkillAngalit: false}));
    }

    function handleSkillHeroCall() {
        setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                attack: prev.C1.attack + 1,
                
            },
            C2: {
                ...prev.C2,
                attack: prev.C2.attack + 1,
                
            },
            C3: {
                ...prev.C3,
                attack: prev.C3.attack + 1,
                
            },
            C4: {
                ...prev.C4,
                attack: prev.C4.attack + 1,
                
            },
            D1: {
                ...prev.D1,
                attack: prev.D1.attack + 1,
                
            },
            D2: {
                ...prev.D2,
                attack: prev.D2.attack + 1,
                
            },
            D3: {
                ...prev.D3,
                attack: prev.D3.attack + 1,
                
            },
            D4: {
                ...prev.D4,
                attack: prev.D4.attack + 1,
                
            },

            
        }));
        setStateSkillsHero(prev => ({...prev, showCall: false}));
        setShowPointerSkills(prev => ({...prev, showSkillHero1: false}));
    }

    function handleSkillHeroBloodDebt() {
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - 3,
                
            },
            A2: {
                ...prev.A2,
                health: prev.A2.health - 3,
                
            },
            A3: {
                ...prev.A3,
                health: prev.A3.health - 3,
                
            },
            A4: {
                ...prev.A4,
                health: prev.A4.health - 3,
                
            },
            A5: {
                ...prev.A5,
                health: prev.A5.health - 3,
                
            },
            A6: {
                ...prev.A6,
                health: prev.A6.health - 3,
                
            },
            A7: {
                ...prev.A7,
                health: prev.A7.health - 3,
                
            },
            A8: {
                ...prev.A8,
                health: prev.A8.health - 3,
                
            },

        }));
        setStateSkillsHero(prev => ({...prev, showBloodDebt: false}));
        setShowPointerSkills(prev => ({...prev, showSkillHero2: false}));
    }

    function handleSkillPoultice() {
        if (occupiedCell.C1.choice === true && occupiedCell.C1.health !== 0 && occupiedCell.C1.health !== 80 && occupiedCell.C1.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: 80,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C1.choice === true && occupiedCell.C1.health !== 0 && occupiedCell.C1.health !== 100 && occupiedCell.C1.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: 100,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C1.choice === true && occupiedCell.C1.health !== 0 && occupiedCell.C1.health !== 180 && occupiedCell.C1.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: 180,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C1.choice === true && occupiedCell.C1.health !== 0 && occupiedCell.C1.health !== 250 && occupiedCell.C1.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: 250,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.C2.choice === true && occupiedCell.C2.health !== 0 && occupiedCell.C2.health !== 80 && occupiedCell.C2.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: 80,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C2.choice === true && occupiedCell.C2.health !== 0 && occupiedCell.C2.health !== 100 && occupiedCell.C2.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: 100,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C2.choice === true && occupiedCell.C2.health !== 0 && occupiedCell.C2.health !== 180 && occupiedCell.C2.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: 180,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C2.choice === true && occupiedCell.C2.health !== 0 && occupiedCell.C2.health !== 250 && occupiedCell.C2.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: 250,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.C3.choice === true && occupiedCell.C3.health !== 0 && occupiedCell.C3.health !== 80 && occupiedCell.C3.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: 80,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C3.choice === true && occupiedCell.C3.health !== 0 && occupiedCell.C3.health !== 100 && occupiedCell.C3.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: 100,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C3.choice === true && occupiedCell.C3.health !== 0 && occupiedCell.C3.health !== 180 && occupiedCell.C3.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: 180,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C3.choice === true && occupiedCell.C3.health !== 0 && occupiedCell.C3.health !== 250 && occupiedCell.C3.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: 250,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.C4.choice === true && occupiedCell.C4.health !== 0 && occupiedCell.C4.health !== 80 && occupiedCell.C4.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: 80,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C4.choice === true && occupiedCell.C4.health !== 0 && occupiedCell.C4.health !== 100 && occupiedCell.C4.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: 100,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C4.choice === true && occupiedCell.C4.health !== 0 && occupiedCell.C4.health !== 180 && occupiedCell.C4.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: 180,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C4.choice === true && occupiedCell.C4.health !== 0 && occupiedCell.C4.health !== 250 && occupiedCell.C4.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: 250,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.D1.choice === true && occupiedCell.D1.health !== 0 && occupiedCell.D1.health !== 80 && occupiedCell.D1.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: 80,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D1.choice === true && occupiedCell.D1.health !== 0 && occupiedCell.D1.health !== 100 && occupiedCell.D1.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: 100,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D1.choice === true && occupiedCell.D1.health !== 0 && occupiedCell.D1.health !== 180 && occupiedCell.D1.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: 180,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D1.choice === true && occupiedCell.D1.health !== 0 && occupiedCell.D1.health !== 250 && occupiedCell.D1.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: 250,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.D2.choice === true && occupiedCell.D2.health !== 0 && occupiedCell.D2.health !== 80 && occupiedCell.D2.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: 80,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D2.choice === true && occupiedCell.D2.health !== 0 && occupiedCell.D2.health !== 100 && occupiedCell.D2.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: 100,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D2.choice === true && occupiedCell.D2.health !== 0 && occupiedCell.D2.health !== 180 && occupiedCell.D2.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: 180,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D2.choice === true && occupiedCell.D2.health !== 0 && occupiedCell.D2.health !== 250 && occupiedCell.D2.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: 250,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.D3.choice === true && occupiedCell.D3.health !== 0 && occupiedCell.D3.health !== 80 && occupiedCell.D3.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: 80,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D3.choice === true && occupiedCell.D3.health !== 0 && occupiedCell.D3.health !== 100 && occupiedCell.D3.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: 100,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D3.choice === true && occupiedCell.D3.health !== 0 && occupiedCell.D3.health !== 180 && occupiedCell.D3.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: 180,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D3.choice === true && occupiedCell.D3.health !== 0 && occupiedCell.D3.health !== 250 && occupiedCell.D3.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: 250,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }


        else if (occupiedCell.D4.choice === true && occupiedCell.D4.health !== 0 && occupiedCell.D4.health !== 80 && occupiedCell.D4.priority === 1) {
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: 80,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D4.choice === true && occupiedCell.D4.health !== 0 && occupiedCell.D4.health !== 100 && occupiedCell.D4.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: 100,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D4.choice === true && occupiedCell.D4.health !== 0 && occupiedCell.D4.health !== 180 && occupiedCell.D4.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: 180,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D4.choice === true && occupiedCell.D4.health !== 0 && occupiedCell.D4.health !== 250 && occupiedCell.D4.priority === 4) {
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: 250,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }

        else {
            return
        }
        setShowPointerSkills(prev => ({...prev, showSkillPoultice: false}));        
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
        if (stateSkillsSoldiersWasteland.stateSkillsAngalit === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsAngalit: true}));
        }
        if (stateSkillsHero.poultice !== 0){
            setStateSkillsHero(prev => ({...prev, showPoultice: true}));
        }
        
        setStateSkillsHero(prev => ({...prev, showCall: true}));

        setStateSkillsHero(prev => ({...prev, showBloodDebt: true}));
       
    };

    useEffect(() => {
        if(occupiedCellOpponent.A1.health + occupiedCellOpponent.A2.health + occupiedCellOpponent.A3.health + occupiedCellOpponent.A4.health + occupiedCellOpponent.A5.health + occupiedCellOpponent.A6.health + occupiedCellOpponent.A7.health + occupiedCellOpponent.A8.health <= 640 && showStoryMessages.countForMessage === 0) {
            setShowStoryMessages((prev: any) => ({...prev, halfHealth: true}));
        }
        }, [occupiedCellOpponent, showStoryMessages.countForMessage]);

    useEffect(() => {
        if(occupiedCellOpponent.A1.health <= 0) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: 0,
            }
            }));
        }
    }, [occupiedCellOpponent.A1.health]);

    useEffect(() => {
        if(occupiedCellOpponent.A2.health <= 0) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: 0,
            }
            }));
        }
    }, [occupiedCellOpponent.A2.health]);

    useEffect(() => {
        if(occupiedCellOpponent.A3.health <= 0) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: 0,
            }
            }));
        }
    }, [occupiedCellOpponent.A3.health]);

    useEffect(() => {
        if(occupiedCellOpponent.A4.health <= 0) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: 0,
            }
            }));
        }
    }, [occupiedCellOpponent.A4.health]);

    useEffect(() => {
        if(occupiedCellOpponent.A5.health <= 0) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: 0,
            }
            }));
        }
    }, [occupiedCellOpponent.A5.health]);

    useEffect(() => {
        if(occupiedCellOpponent.A6.health <= 0) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: 0,
            }
            }));
        }
    }, [occupiedCellOpponent.A6.health]);

    useEffect(() => {
        if(occupiedCellOpponent.A7.health <= 0) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A7: {
                ...prev.A7,
                health: 0,
            }
            }));
        }
    }, [occupiedCellOpponent.A7.health]);

    useEffect(() => {
        if(occupiedCellOpponent.A8.health <= 0) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A8: {
                ...prev.A8,
                health: 0,
            }
            }));
        }
    }, [occupiedCellOpponent.A8.health]);

    useEffect(() => {
        if(occupiedCellOpponent.A1.health + occupiedCellOpponent.A2.health + occupiedCellOpponent.A3.health + occupiedCellOpponent.A4.health + occupiedCellOpponent.A5.health + occupiedCellOpponent.A6.health + occupiedCellOpponent.A7.health + occupiedCellOpponent.A8.health <= 0 && showStoryMessages.countForMessage === 1) {
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

    useEffect(() => {
        if(attackQueue === 5) {
            setStateInvisiblePathfinder(prev => ({...prev, pathfinder1: true} ))
        }
    }, [attackQueue]);

    useEffect(() => {
        if(attackQueue === 8) {
            setStateInvisiblePathfinder(prev => ({...prev, pathfinder2: true} ))
        }
    }, [attackQueue]);

    useEffect(() => {
        const swordsmanCells = Object.values(occupiedCell).filter(cell => 
            cell.name === "Охотники"
        );
    
    
        const allSwordsmenDead = swordsmanCells.length > 0 && 
        swordsmanCells.every(cell => cell.health <= 0);
    
        if (allSwordsmenDead) {
            setStateSkillsSoldiersWasteland(prev => ({
                ...prev, 
                showStateSkillsHunter: false
        }));
    }
    }, [occupiedCell]);
                
    useEffect(() => {
        const swordsmanCells = Object.values(occupiedCell).filter(cell => 
            cell.name === "Метатели"
        );
    
    
           const allSwordsmenDead = swordsmanCells.length > 0 && 
           swordsmanCells.every(cell => cell.health <= 0);
    
        if (allSwordsmenDead) {
            setStateSkillsSoldiersWasteland(prev => ({
                ...prev, 
                showStateSkillsJavelin: false
        }));
    }
    }, [occupiedCell]);
            
    useEffect(() => {
        const swordsmanCells = Object.values(occupiedCell).filter(cell => 
            cell.name === "Булавоносцы"
        );
    
    
        const allSwordsmenDead = swordsmanCells.length > 0 && 
        swordsmanCells.every(cell => cell.health <= 0);
    
        if (allSwordsmenDead) {
            setStateSkillsSoldiersWasteland(prev => ({
                ...prev, 
                showStateSkillsMaces: false
        }));
    }
    }, [occupiedCell]);
        
    useEffect(() => {
        const swordsmanCells = Object.values(occupiedCell).filter(cell => 
            cell.name === "Ангалиты"
        );
    
    
        const allSwordsmenDead = swordsmanCells.length > 0 && 
        swordsmanCells.every(cell => cell.health <= 0);
    
        if (allSwordsmenDead) {
            setStateSkillsSoldiersWasteland(prev => ({
                ...prev, 
                 showStateSkillsAngalit: false
        }));
    }
    }, [occupiedCell]);

    useEffect(() => {
                if (reserve.wastelandHunter === 0 && reserve.wastelandJavelin === 0 && reserve.wastelandMaces === 0 && reserve.wastelandAngalit === 0) {
                    setShowButtonPoultice(false);
                }
                else {
                    setShowButtonPoultice(true);
            }
            }, [reserve]);

    function handleOpenRules() {
        setShowRules(true);
    };

    return (
        <div className={classes.gamePageWasteland}>
            
            <div className={classes.topbar} style={{backgroundColor: "darkolivegreen", backgroundImage: "linear-gradient(180deg, black -20%, darkolivegreen 47%, darkolivegreen 53%, black 120%)"}}>
                <HomeButton/>Игра<BackButton/>
            </div>
            {showStoryMessages.intro && <IntroWastelandGameLvl4 setShowStoryMessages={setShowStoryMessages}/>}

            {showStoryMessages.halfHealth && <MessageHalfHealthLvl4 setShowStoryMessages={setShowStoryMessages}/>}

            {showStoryMessages.outro && <OutroWastelandGameLvl4 showStoryMessages={showStoryMessages} setShowStoryMessages={setShowStoryMessages}/>}

            {showStoryMessages.lose && <LoseMessage/>}

            {showRules && <RulesOfGame setShowRules={setShowRules}/>}

            <div className={classes.skillsBlockLeftWasteland}>

                {showPointerSkills.showSkillPoultice && <div className={classes.cardWastelandTop}>
                    <h5 className={classes.textCard}>
                        Припарка - восстанавливает всё здоровье выбранного юнита.
                    </h5>
                </div>}
                
                {showPointerSkills.showSkillHero1 && <div className={classes.cardWastelandTop}>
                    <h5 className={classes.textCard}>
                        Призыв - повышает атаку всех ангалов.
                    </h5>
                </div>}
                
                {showPointerSkills.showSkillHero2 && <div className={classes.cardWastelandTop}>
                    <h5 className={classes.textCard}>
                        Долг крови - обрушивает атаку фамильяров на всех противников.
                    </h5>
                </div>}
                
                {showPointerSkills.showSkillHunter && <div className={classes.cardWastelandTop}>
                    <h5 className={classes.textCard}>
                        Разделка - атака охотников, наносящая средний урон юниту противника.
                    </h5>
                </div>}
                
                {showPointerSkills.showSkillJavelin && <div className={classes.cardWastelandTop}>
                    <h5 className={classes.textCard}>
                        Бросок - атака метателей, наносящая средний урон юниту противника и уменьшающая защиту цели.
                    </h5>
                </div>}
                
                {showPointerSkills.showSkillMaces && <div className={classes.cardWastelandTop}>
                    <h5 className={classes.textCard}>
                        Ошеломление - атака булавоносцев, наносящая хороший урон юниту противника и уменьшающая защиту цели.
                    </h5>
                </div>}
                
                {showPointerSkills.showSkillAngalit && <div className={classes.cardWastelandTop}>
                    <h5 className={classes.textCard}>
                        Безумие — атака ангалитов, наносящая повышенный урон по площади, поражающая юнитов противника.
                    </h5>
                </div>}

                {occupiedCell.C1.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C1.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C1.classWastlelandSoldier === 2 
                    ? CardAngalJavelin 
                    : occupiedCell.C1.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : occupiedCell.C1.classWastlelandSoldier === 4 
                    ? CardAngalAngalit
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.C1.name === "Охотники" ? 80 : occupiedCell.C1.name === "Метатели" ? 100 : occupiedCell.C1.name === "Булавоносцы" ? 180 : occupiedCell.C1.name === "Ангалиты" ? 250 : 0 } value={occupiedCell.C1.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCell.C1.name}</p>
                        <p>Attack:  {occupiedCell.C1.attack}</p>
                        <p>Defense: {occupiedCell.C1.defense}</p>
                        <p>Бафф: {occupiedCell.C1.name === "Охотники" ? "Нет"
                            : occupiedCell.C1.name === "Метатели" ? "Нет"
                            : occupiedCell.C1.name === "Булавоносцы" ? "Нет"
                            : occupiedCell.C1.name === "Ангалиты" ? "Игнорирование защиты противника" 
                            : ""}
                        </p>
                    </div>
                    
                </div>}

                {occupiedCell.C2.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C2.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C2.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.C2.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : occupiedCell.C2.classWastlelandSoldier === 4 
                    ? CardAngalAngalit
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.C2.name === "Охотники" ? 80 : occupiedCell.C2.name === "Метатели" ? 100 : occupiedCell.C2.name === "Булавоносцы" ? 180 : occupiedCell.C2.name === "Ангалиты" ? 250 : 0 } value={occupiedCell.C2.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCell.C2.name}</p>
                        <p>Attack:  {occupiedCell.C2.attack}</p>
                        <p>Defense: {occupiedCell.C2.defense}</p>
                        <p>Бафф: {occupiedCell.C2.name === "Охотники" ? "Нет"
                            : occupiedCell.C2.name === "Метатели" ? "Нет"
                            : occupiedCell.C2.name === "Булавоносцы" ? "Нет"
                            : occupiedCell.C2.name === "Ангалиты" ? "Игнорирование защиты противника" 
                            : ""}
                        </p>
                    </div>
                    
                </div>}

                {occupiedCell.C3.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C3.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C3.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.C3.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : occupiedCell.C3.classWastlelandSoldier === 4 
                    ? CardAngalAngalit
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.C3.name === "Охотники" ? 80 : occupiedCell.C3.name === "Метатели" ? 100 : occupiedCell.C3.name === "Булавоносцы" ? 180 : occupiedCell.C3.name === "Ангалиты" ? 250 : 0 } value={occupiedCell.C3.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCell.C3.name}</p>
                        <p>Атака:  {occupiedCell.C3.attack}</p>
                        <p>Защита: {occupiedCell.C3.defense}</p>
                        <p>Бафф: {occupiedCell.C3.name === "Охотники" ? "Нет"
                            : occupiedCell.C3.name === "Метатели" ? "Нет"
                            : occupiedCell.C3.name === "Булавоносцы" ? "Нет"
                            : occupiedCell.C3.name === "Ангалиты" ? "Игнорирование защиты противника" 
                            : ""}
                        </p>
                    </div>
                    
                </div>}

                {occupiedCell.C4.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C4.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C4.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.C4.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : occupiedCell.C4.classWastlelandSoldier === 4 
                    ? CardAngalAngalit
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.C4.name === "Охотники" ? 80 : occupiedCell.C4.name === "Метатели" ? 100 : occupiedCell.C4.name === "Булавоносцы" ? 180 : occupiedCell.C4.name === "Ангалиты" ? 250 : 0 } value={occupiedCell.C4.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCell.C4.name}</p>
                        <p>Атака:  {occupiedCell.C4.attack}</p>
                        <p>Защита: {occupiedCell.C4.defense}</p>
                        <p>Бафф: {occupiedCell.C4.name === "Охотники" ? "Нет"
                            : occupiedCell.C4.name === "Метатели" ? "Нет"
                            : occupiedCell.C4.name === "Булавоносцы" ? "Нет"
                            : occupiedCell.C4.name === "Ангалиты" ? "Игнорирование защиты противника" 
                            : ""}
                        </p>
                    </div>
                    
                </div>}

                {occupiedCell.D1.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D1.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D1.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.D1.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : occupiedCell.D1.classWastlelandSoldier === 4 
                    ? CardAngalAngalit
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.D1.name === "Охотники" ? 80 : occupiedCell.D1.name === "Метатели" ? 100 : occupiedCell.D1.name === "Булавоносцы" ? 180 : occupiedCell.D1.name === "Ангалиты" ? 250 : 0 } value={occupiedCell.D1.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCell.D1.name}</p>
                        <p>Атака:  {occupiedCell.D1.attack}</p>
                        <p>Защита: {occupiedCell.D1.defense}</p>
                        <p>Бафф: {occupiedCell.D1.name === "Охотники" ? "Нет"
                            : occupiedCell.D1.name === "Метатели" ? "Нет"
                            : occupiedCell.D1.name === "Булавоносцы" ? "Нет"
                            : occupiedCell.D1.name === "Ангалиты" ? "Игнорирование защиты противника" 
                            : ""}
                        </p>
                    </div>
                    
                </div>}

                {occupiedCell.D2.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D2.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D2.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.D2.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : occupiedCell.D2.classWastlelandSoldier === 4 
                    ? CardAngalAngalit
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.D2.name === "Охотники" ? 80 : occupiedCell.D2.name === "Метатели" ? 100 : occupiedCell.D2.name === "Булавоносцы" ? 180 : occupiedCell.D2.name === "Ангалиты" ? 250 : 0 } value={occupiedCell.D2.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCell.D2.name}</p>
                        <p>Атака:  {occupiedCell.D2.attack}</p>
                        <p>Защита: {occupiedCell.D2.defense}</p>
                        <p>Бафф: {occupiedCell.D2.name === "Охотники" ? "Нет"
                            : occupiedCell.D2.name === "Метатели" ? "Нет"
                            : occupiedCell.D2.name === "Булавоносцы" ? "Нет"
                            : occupiedCell.D2.name === "Ангалиты" ? "Игнорирование защиты противника" 
                            : ""}
                        </p>
                    </div>
                    
                </div>}

                {occupiedCell.D3.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D3.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D3.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.D3.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : occupiedCell.D3.classWastlelandSoldier === 4 
                    ? CardAngalAngalit
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.D3.name === "Охотники" ? 80 : occupiedCell.D3.name === "Метатели" ? 100 : occupiedCell.D3.name === "Булавоносцы" ? 180 : occupiedCell.D3.name === "Ангалиты" ? 250 : 0 } value={occupiedCell.D3.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCell.D3.name}</p>
                        <p>Атака:  {occupiedCell.D3.attack}</p>
                        <p>Защита: {occupiedCell.D3.defense}</p>
                        <p>Бафф: {occupiedCell.D3.name === "Охотники" ? "Нет"
                            : occupiedCell.D3.name === "Метатели" ? "Нет"
                            : occupiedCell.D3.name === "Булавоносцы" ? "Нет"
                            : occupiedCell.D3.name === "Ангалиты" ? "Игнорирование защиты противника" 
                            : ""}
                        </p>
                    </div>
                    
                </div>}

                {occupiedCell.D4.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D4.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D4.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : occupiedCell.D4.classWastlelandSoldier === 3 
                    ? CardAngalMaces
                    : occupiedCell.D4.classWastlelandSoldier === 4 
                    ? CardAngalAngalit
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.D4.name === "Охотники" ? 80 : occupiedCell.D4.name === "Метатели" ? 100 : occupiedCell.D4.name === "Булавоносцы" ? 180 : occupiedCell.D4.name === "Ангалиты" ? 250 : 0 } value={occupiedCell.D4.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCell.D4.name}</p>
                        <p>Атака:  {occupiedCell.D4.attack}</p>
                        <p>Защита: {occupiedCell.D4.defense}</p>
                        <p>Бафф: {occupiedCell.D4.name === "Охотники" ? "Нет"
                        : occupiedCell.D4.name === "Метатели" ? "Нет"
                        : occupiedCell.D4.name === "Булавоносцы" ? "Нет"
                        : occupiedCell.D4.name === "Ангалиты" ? "Игнорирование защиты противника" 
                        : ""}
                    </p>
                    </div>
                    
                </div>}

                {occupiedCellOpponent.A1.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={EastArcher} alt="EastArcher" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="150" value={occupiedCellOpponent.A1.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCellOpponent.A1.name}</p>
                        <p>Атака:  {occupiedCellOpponent.A1.attack}</p>
                        <p>Защита: {occupiedCellOpponent.A1.defense}</p>
                        <p>Бафф: {occupiedCellOpponent.A1.buff}</p>
                    </div>
                    
                </div>}

                {occupiedCellOpponent.A2.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={WestArcher} alt="WestArcher" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="80" value={occupiedCellOpponent.A2.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCellOpponent.A2.name}</p>
                        <p>Атака:  {occupiedCellOpponent.A2.attack}</p>
                        <p>Защита: {occupiedCellOpponent.A2.defense}</p>
                        <p>Бафф: {occupiedCellOpponent.A2.buff}</p>
                    </div>
                    
                </div>}

                {occupiedCellOpponent.A3.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={WestArcher} alt="WestArcher" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="80" value={occupiedCellOpponent.A3.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCellOpponent.A3.name}</p>
                        <p>Атака:  {occupiedCellOpponent.A3.attack}</p>
                        <p>Защита: {occupiedCellOpponent.A3.defense}</p>
                        <p>Бафф: {occupiedCellOpponent.A3.buff}</p>
                    </div>
                    
                </div>}

                {occupiedCellOpponent.A4.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={EastArcher} alt="EastArcher" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="150" value={occupiedCellOpponent.A4.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCellOpponent.A4.name}</p>
                        <p>Атака:  {occupiedCellOpponent.A4.attack}</p>
                        <p>Защита: {occupiedCellOpponent.A4.defense}</p>
                        <p>Бафф: {occupiedCellOpponent.A4.buff}</p>
                    </div>
                    
                </div>}

                {occupiedCellOpponent.A5.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={EastPathfinder} alt="EastPathfinder" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="300" value={occupiedCellOpponent.A5.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCellOpponent.A5.name}</p>
                        <p>Атака:  {occupiedCellOpponent.A5.attack}</p>
                        <p>Защита: {occupiedCellOpponent.A5.defense}</p>
                        <p>Бафф: {occupiedCellOpponent.A5.buff}</p>
                    </div>
                    
                </div>}
                
                {occupiedCellOpponent.A6.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={WestSwordsman} alt="WestSwordsman" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="130" value={occupiedCellOpponent.A6.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCellOpponent.A6.name}</p>
                        <p>Атака:  {occupiedCellOpponent.A6.attack}</p>
                        <p>Защита: {occupiedCellOpponent.A6.defense}</p>
                        <p>Бафф: {occupiedCellOpponent.A6.buff}</p>
                    </div>
                    
                </div>}

                {occupiedCellOpponent.A7.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={WestSwordsman} alt="WestSwordsman" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="130" value={occupiedCellOpponent.A7.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCellOpponent.A7.name}</p>
                        <p>Атака:  {occupiedCellOpponent.A7.attack}</p>
                        <p>Защита: {occupiedCellOpponent.A7.defense}</p>
                        <p>Бафф: {occupiedCellOpponent.A7.buff}</p>
                    </div>
                    
                </div>}

                {occupiedCellOpponent.A8.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={EastPathfinder} alt="EastPathfinder" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="300" value={occupiedCellOpponent.A8.health}></progress>
                    <div className={classes.cardBlock}>
                        <p>{occupiedCellOpponent.A8.name}</p>
                        <p>Атака:  {occupiedCellOpponent.A8.attack}</p>
                        <p>Защита: {occupiedCellOpponent.A8.defense}</p>
                        <p>Бафф: {occupiedCellOpponent.A8.buff}</p>
                    </div>
                    
                </div>}

            </div>

                {showShop && <div className={classes.shopWasteland}>
                    
                    <button className={classes.hunterBuy} onClick={handleBuyHunter} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitWasteland}>Охотники: {reserve.wastelandHunter}</p> <p className={classes.titleBuyUnitWasteland}>Цена: 40</p> </button>
                    
                    <button className={classes.javelinBuy} onClick={handleBuyJavelin} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitWasteland}>Метатели: {reserve.wastelandJavelin}</p> <p className={classes.titleBuyUnitWasteland}>Цена: 70</p> </button>

                    <button className={classes.macesBuy} onClick={handleBuyMaces} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitWasteland}>Булавоносцы: {reserve.wastelandMaces}</p> <p className={classes.titleBuyUnitWasteland}>Цена: 100</p> </button>
                    
                    <button className={classes.angalitBuy} onClick={handleBuyAngalit} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitWasteland}>Ангалиты: {reserve.wastelandAngalit}</p> <p className={classes.titleBuyUnitWasteland}>Цена: 150</p> </button>

                    <button className={classes.poulticeBuyWasteland} onClick={handleBuyPoultice} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitWasteland}>Припарки: {stateSkillsHero.poultice}</p> <p className={classes.titleBuyUnitWasteland}>Цена: 50</p></button>

                    <h1>GOLD:{resources}</h1>

                    <button className={classes.closeButton} onClick={handleCloseShop} disabled={reserve.wastelandHunter + reserve.wastelandJavelin + reserve.wastelandMaces + reserve.wastelandAngalit === 0}>Готово</button>
                    
                </div>}

            <div className={classes.skillsBlockRightWasteland}>
                {buttonStateGame.stateShopButton && <button className={classes.shopButtonWasteland} onClick={handleOpenShop}>Магазин</button>}
                {buttonStateGame.stateStartButton && <button className={classes.buttonStartGameWasteland} onClick={handleStartGame}>Старт</button>}
                {buttonStateGame.stateOverallButton && <button className={classes.angalsButtonSkillsHunters} onClick={handleRequestForHunterReserves} disabled={stateStyleSoldier === 2 || stateStyleSoldier === 3 || stateStyleSoldier === 4 ||  stateButtonSoldiers.wastelandButtonHunter === true || reserve.wastelandHunter === 0}>Охотники: {reserve.wastelandHunter}</button>} 
                {buttonStateGame.stateOverallButton && <button className={classes.angalsButtonSkillsJavelin} onClick={handleRequestForJavelinReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 3 || stateStyleSoldier === 4 || stateButtonSoldiers.wastelandButtonJavelin === true || reserve.wastelandJavelin === 0}>Метатели: {reserve.wastelandJavelin}</button>}
                {buttonStateGame.stateOverallButton && <button className={classes.angalsButtonSkillsMaces} onClick={handleRequestForMacesReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 2 || stateStyleSoldier === 4 || stateButtonSoldiers.wastelandButtonMaces === true || reserve.wastelandMaces === 0}>Булавоносцы: {reserve.wastelandMaces}</button>}
                {buttonStateGame.stateOverallButton && <button className={classes.angalsButtonSkillsAngalit} onClick={handleRequestForAngalitReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 2 || stateStyleSoldier === 3 || stateButtonSoldiers.wastelandButtonAngalit === true || reserve.wastelandAngalit === 0}>Ангалиты: {reserve.wastelandAngalit}</button>}
               
                {showSkillsSoldierWasteland && <div>
                
                    <img className={classes.avatarHeroWasteland} src={Avatar} alt="Avatar" draggable="false" />
                
                    {stateSkillsHero.showPoultice && <button id="SP" className={classes.buttonSkillPoulticeWasteland} onClick={handleSkillPoultice} onMouseEnter={() => handlePointerPoultice("SP")}
                            onMouseLeave={handlePointerTargetsSkillsFalse}>Припарка: {stateSkillsHero.poultice}</button>}
                
                    {stateSkillsHero.showCall && <button id="SH1" className={classes.buttonSkillCall} onClick={handleSkillHeroCall} onMouseEnter={() => handlePointerCall("SH1")}
                            onMouseLeave={handlePointerTargetsSkillsFalse}>Призыв</button>}
                
                    {stateSkillsHero.showBloodDebt && <button id="SH2" className={classes.buttonSkillBloodDebt} onClick={handleSkillHeroBloodDebt} onMouseEnter={() => handlePointerBloodDebt("SH2")}
                            onMouseLeave={handlePointerTargetsSkillsFalse}>Долг крови</button>}
                
                    {stateSkillsSoldiersWasteland.showStateSkillsHunter && <button id="S1" className={classes.buttonSkillHunter} onClick={handleSkillHunter} onMouseEnter={() => handlePointerOneTargetSkill("S1")}
                            onMouseLeave={handlePointerTargetsSkillsFalse}>Разделка</button>}
                
                    {stateSkillsSoldiersWasteland.showStateSkillsJavelin && <button id="S2" className={classes.buttonSkillJavelin} onClick={handleSkillJavelin} onMouseEnter={() => handlePointerOneTargetSkill("S2")}
                            onMouseLeave={handlePointerTargetsSkillsFalse}>Бросок</button>}
                
                    {stateSkillsSoldiersWasteland.showStateSkillsMaces && <button id="S3" className={classes.buttonSkillMaces} onClick={handleSkillMaces} onMouseEnter={() =>handlePointerOneTargetSkill("S3")}
                            onMouseLeave={handlePointerTargetsSkillsFalse}>Ошеломление</button>}
                                    
                    {stateSkillsSoldiersWasteland.showStateSkillsAngalit && <button id="S4" className={classes.buttonSkillAngalit} onClick={handleSkillAngalit} onMouseEnter={() => handlePointerSomeTargetsSkill("S4")}
                            onMouseLeave={handlePointerTargetsSkillsFalse}>Безумие</button>}
                
                </div>}
            </div>

            <div className={classes.blockUnitsWasteland}>

                <div className={classes.blockFlex1}>

                    <button className={classes.buttonRulesWasteland} onClick={handleOpenRules}>Правила</button>

                    <div className={classes.cellA1}>
                        <button className={occupiedCellOpponent.A1.health > 0 && attackQueue === 1 ? classes.unitEmpireEastArcherChoice 
                        : occupiedCellOpponent.A1.health <= 0 && attackQueue === 1 ? classes.unitEmpireDeath 
                        : occupiedCellOpponent.A1.health <= 0 ? classes.unitEmpireDeath 
                        : classes.unitEmpireEastArcher} id={"A1"} onClick={() => {handleAttack("A1")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A1: {...prev.A1, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A1: {...prev.A1,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A1.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCellOpponent.A1.health} max="150"></progress>
                        </button>
                        {showPointerSkills.showA1 && <div className={classes.pointer} style={{background: "brown"}}></div>}
                    </div>

                    <div className={classes.cellA2}>
                        <button className={occupiedCellOpponent.A2.health > 0 && attackQueue === 2 ? classes.unitEmpireWestArcherChoice 
                        : occupiedCellOpponent.A2.health <= 0 && attackQueue === 2 ? classes.unitEmpireDeath 
                        : occupiedCellOpponent.A2.health <= 0 ? classes.unitEmpireDeath 
                        : classes.unitEmpireWestArcher} id={"A2"} onClick={() => {handleAttack("A2")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A2: {...prev.A2, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A2: {...prev.A2,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A2.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCellOpponent.A2.health} max="80"></progress>
                        </button>
                        {showPointerSkills.showA2 && <div className={classes.pointer} style={{background: "brown"}}></div>}
                    </div>
                       
                    <div className={classes.cellA3}>
                        <button className={occupiedCellOpponent.A3.health > 0 && attackQueue === 3 ? classes.unitEmpireWestArcherChoice 
                        : occupiedCellOpponent.A3.health <= 0 && attackQueue === 3 ? classes.unitEmpireDeath 
                        : occupiedCellOpponent.A3.health <= 0 ? classes.unitEmpireDeath 
                        : classes.unitEmpireWestArcher} id={"A3"} onClick={() => {handleAttack("A3")}}
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A3.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCellOpponent.A3.health} max="80"></progress>
                        </button>
                        {showPointerSkills.showA3 && <div className={classes.pointer} style={{background: "brown"}}></div>}
                    </div>

                    <div className={classes.cellA4}>
                        <button  className={occupiedCellOpponent.A4.health > 0 && attackQueue === 4 ? classes.unitEmpireEastArcherChoice 
                        : occupiedCellOpponent.A4.health <= 0 && attackQueue === 4 ? classes.unitEmpireDeath 
                        : occupiedCellOpponent.A4.health <= 0 ? classes.unitEmpireDeath 
                        : classes.unitEmpireEastArcher} id={"A4"} onClick={() => {handleAttack("A4")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A4.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCellOpponent.A4.health} max="150"></progress>
                        </button>
                        {showPointerSkills.showA4 && <div className={classes.pointer} style={{background: "brown"}}></div>}
                    </div>

                    {stateInvisiblePathfinder.pathfinder1 && <div className={classes.cellA5}>
                        <button className={occupiedCellOpponent.A5.health > 0 && attackQueue === 5 ? classes.unitEmpireEastPathfinderChoice 
                        : occupiedCellOpponent.A5.health <= 0 && attackQueue === 5 ? classes.unitEmpireDeath 
                        : occupiedCellOpponent.A5.health <= 0 ? classes.unitEmpireDeath 
                        : classes.unitEmpireEastPathfinder} id={"A5"} onClick={() => {handleAttack("A5")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A5: {...prev.A5, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A5: {...prev.A5,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A5.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCellOpponent.A5.health} max="300"></progress>
                        </button>
                        {showPointerSkills.showA5 && <div className={classes.pointer} style={{background: "brown"}}></div>}
                    </div>}
                    
                    <div className={classes.cellA6}>
                        <button className={occupiedCellOpponent.A6.health > 0 && attackQueue === 6 ? classes.unitEmpireWestSwordsmanChoice 
                        : occupiedCellOpponent.A6.health <= 0 && attackQueue === 6 ? classes.unitEmpireDeath 
                        : occupiedCellOpponent.A6.health <= 0 ? classes.unitEmpireDeath 
                        : classes.unitEmpireWestSwordsman} id={"A6"} onClick={() => {handleAttack("A6")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A6: {...prev.A6, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A6: {...prev.A6,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A6.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCellOpponent.A6.health} max="130"></progress>
                        </button>
                        {showPointerSkills.showA6 && <div className={classes.pointer} style={{background: "brown"}}></div>}
                    </div>

                    <div className={classes.cellA7}>
                        <button className={occupiedCellOpponent.A7.health > 0 && attackQueue === 7 ? classes.unitEmpireWestSwordsmanChoice 
                        : occupiedCellOpponent.A7.health <= 0 && attackQueue === 7 ? classes.unitEmpireDeath 
                        : occupiedCellOpponent.A7.health <= 0 ? classes.unitEmpireDeath 
                        : classes.unitEmpireWestSwordsman} id={"A7"} onClick={() => {handleAttack("A7")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A7: {...prev.A7, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A7: {...prev.A7,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A7.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCellOpponent.A7.health} max="130"></progress>
                        </button>
                        {showPointerSkills.showA7 && <div className={classes.pointer} style={{background: "brown"}}></div>}
                    </div>

                    {stateInvisiblePathfinder.pathfinder2 && <div className={classes.cellA8}>
                        <button className={occupiedCellOpponent.A8.health > 0 && attackQueue === 8 ? classes.unitEmpireEastPathfinderChoice 
                        : occupiedCellOpponent.A8.health <= 0 && attackQueue === 8 ? classes.unitEmpireDeath 
                        : occupiedCellOpponent.A8.health <= 0 ? classes.unitEmpireDeath 
                        : classes.unitEmpireEastPathfinder} id={"A8"} onClick={() => {handleAttack("A8")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A8: {...prev.A8, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A8: {...prev.A8,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A8.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                         <progress className={classes.healthScaleEmpireUnit} value={occupiedCellOpponent.A8.health} max="300"></progress>
                        </button>
                        {showPointerSkills.showA8 && <div className={classes.pointer} style={{background: "brown"}}></div>}
                    </div>}

                </div>

                {buttonStateGame.stateOverallButton && <div>

                    <div className={classes.cellC1}>
                        <button 
                            className={occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.C1.name === "Булавоносцы" && occupiedCell.C1.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.C1.name === "Ангалиты" && occupiedCell.C1.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.C1.occupied === true && occupiedCell.C1.health === 0 ? classes.unitWastelandDeath : classes.cell} 
                            id={"C1"} 
                            onClick={() => handleTroopDeployment("C1")} 
                            disabled={occupiedCell.C1.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC2}>
                        <button 
                            className={occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.C2.name === "Булавоносцы" && occupiedCell.C2.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.C2.name === "Ангалиты" && occupiedCell.C2.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.C2.occupied === true && occupiedCell.C2.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"C2"} 
                            onClick={() => handleTroopDeployment("C2")} 
                            disabled={occupiedCell.C2.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC3}>
                        <button 
                            className={occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.C3.name === "Булавоносцы" && occupiedCell.C3.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.C3.name === "Ангалиты" && occupiedCell.C3.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.C3.occupied === true && occupiedCell.C3.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"C3"} 
                            onClick={() => handleTroopDeployment("C3")} 
                            disabled={occupiedCell.C3.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC4}>
                        <button 
                            className={occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.C4.name === "Булавоносцы" && occupiedCell.C4.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.C4.name === "Ангалиты" && occupiedCell.C4.health !== 0 ? classes.unitWastelandAngalitBack 
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
                            className={occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitWastelandHunterBackChoice 
                                : occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitWastelandJavelinBackChoice 
                                : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.C1.name === "Булавоносцы" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitWastelandMacesBackChoice 
                                : occupiedCell.C1.name === "Булавоносцы" && occupiedCell.C1.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.C1.name === "Ангалиты" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitWastelandAngalitBackChoice 
                                : occupiedCell.C1.name === "Ангалиты" && occupiedCell.C1.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.C1.occupied === true && occupiedCell.C1.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C1"} 
                            onClick={() => {handleChoiceCellAttack("C1")}} 
                            disabled={occupiedCell.C1.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C1.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C1.health} max={ occupiedCell.C1.name === "Охотники" ? 80 : occupiedCell.C1.name === "Метатели" ? 100 : occupiedCell.C1.name === "Булавоносцы" ? 180 : occupiedCell.C1.name === "Ангалиты" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellC2}>
                        <button 
                            className={occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitWastelandHunterBackChoice 
                                : occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitWastelandJavelinBackChoice 
                                : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.C2.name === "Булавоносцы" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitWastelandMacesBackChoice 
                                : occupiedCell.C2.name === "Булавоносцы" && occupiedCell.C2.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.C2.name === "Ангалиты" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitWastelandAngalitBackChoice 
                                : occupiedCell.C2.name === "Ангалиты" && occupiedCell.C2.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.C2.occupied === true && occupiedCell.C2.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C2"} 
                            onClick={() => {handleChoiceCellAttack("C2")}} 
                            disabled={occupiedCell.C2.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C2.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C2.health} max={ occupiedCell.C2.name === "Охотники" ? 80 : occupiedCell.C2.name === "Метатели" ? 100 : occupiedCell.C2.name === "Булавоносцы" ? 180 : occupiedCell.C2.name === "Ангалиты" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellC3}>
                        <button 
                            className={occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitWastelandHunterBackChoice 
                                : occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitWastelandJavelinBackChoice 
                                : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.C3.name === "Булавоносцы" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitWastelandMacesBackChoice 
                                : occupiedCell.C3.name === "Булавоносцы" && occupiedCell.C3.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.C3.name === "Ангалиты" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitWastelandAngalitBackChoice 
                                : occupiedCell.C3.name === "Ангалиты" && occupiedCell.C3.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.C3.occupied === true && occupiedCell.C3.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C3"} 
                            onClick={() => {handleChoiceCellAttack("C3")}} 
                            disabled={occupiedCell.C3.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C3.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C3.health} max={ occupiedCell.C3.name === "Охотники" ? 80 : occupiedCell.C3.name === "Метатели" ? 100 : occupiedCell.C3.name === "Булавоносцы" ? 180 : occupiedCell.C3.name === "Ангалиты" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellC4}>
                        <button 
                            className={occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitWastelandHunterBackChoice 
                                : occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitWastelandJavelinBackChoice 
                                : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.C4.name === "Булавоносцы" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitWastelandMacesBackChoice 
                                : occupiedCell.C4.name === "Булавоносцы" && occupiedCell.C4.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.C4.name === "Ангалиты" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitWastelandAngalitBackChoice 
                                : occupiedCell.C4.name === "Ангалиты" && occupiedCell.C4.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.C4.occupied === true && occupiedCell.C4.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C4"} 
                            onClick={() => {handleChoiceCellAttack("C4")}} 
                            disabled={occupiedCell.C4.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C4.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C4.health} max={ occupiedCell.C4.name === "Охотники" ? 80 : occupiedCell.C4.name === "Метатели" ? 100 : occupiedCell.C4.name === "Булавоносцы" ? 180 : occupiedCell.C4.name === "Ангалиты" ? 250 : 0 }></progress>
                        </button>
                    </div>
                    
                </div>}

                {buttonStateGame.stateOverallButton && <div>

                    <div className={classes.cellD1}>
                        <button 
                            className={occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.D1.name === "Булавоносцы" && occupiedCell.D1.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.D1.name === "Ангалиты" && occupiedCell.D1.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.D1.occupied === true && occupiedCell.D1.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"D1"} 
                            onClick={() => handleTroopDeployment("D1")} 
                            disabled={occupiedCell.D1.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD2}>
                        <button 
                            className={occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.D2.name === "Булавоносцы" && occupiedCell.D2.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.D2.name === "Ангалиты" && occupiedCell.D2.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.D2.occupied === true && occupiedCell.D2.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"D2"} 
                            onClick={() => handleTroopDeployment("D2")} 
                            disabled={occupiedCell.D2.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD3}>
                        <button 
                            className={occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.D3.name === "Булавоносцы" && occupiedCell.D3.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.D3.name === "Ангалиты" && occupiedCell.D3.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.D3.occupied === true && occupiedCell.D3.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"D3"} 
                            onClick={() => handleTroopDeployment("D3")} 
                            disabled={occupiedCell.D3.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD4}>
                        <button 
                            className={occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.D4.name === "Булавоносцы" && occupiedCell.D4.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.D4.name === "Ангалиты" && occupiedCell.D4.health !== 0 ? classes.unitWastelandAngalitBack 
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
                            className={occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitWastelandHunterBackChoice 
                                : occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitWastelandJavelinBackChoice 
                                : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.D1.name === "Булавоносцы" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitWastelandMacesBackChoice 
                                : occupiedCell.D1.name === "Булавоносцы" && occupiedCell.D1.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.D1.name === "Ангалиты" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitWastelandAngalitBackChoice 
                                : occupiedCell.D1.name === "Ангалиты" && occupiedCell.D1.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.D1.occupied === true && occupiedCell.D1.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D1"} 
                            onClick={() => {handleChoiceCellAttack("D1")}} 
                            disabled={occupiedCell.D1.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D1.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D1.health} max={ occupiedCell.D1.name === "Охотники" ? 80 : occupiedCell.D1.name === "Метатели" ? 100 : occupiedCell.D1.name === "Булавоносцы" ? 180 : occupiedCell.D1.name === "Ангалиты" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellD2}>
                        <button 
                            className={occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitWastelandHunterBackChoice 
                                : occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitWastelandJavelinBackChoice 
                                : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.D2.name === "Булавоносцы" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitWastelandMacesBackChoice 
                                : occupiedCell.D2.name === "Булавоносцы" && occupiedCell.D2.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.D2.name === "Ангалиты" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitWastelandAngalitBackChoice 
                                : occupiedCell.D2.name === "Ангалиты" && occupiedCell.D2.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.D2.occupied === true && occupiedCell.D2.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D2"} 
                            onClick={() => {handleChoiceCellAttack("D2")}} 
                            disabled={occupiedCell.D2.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D2.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D2.health} max={ occupiedCell.D2.name === "Охотники" ? 80 : occupiedCell.D2.name === "Метатели" ? 100 : occupiedCell.D2.name === "Булавоносцы" ? 180 : occupiedCell.D2.name === "Ангалиты" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellD3}>
                        <button 
                            className={occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitWastelandHunterBackChoice 
                                : occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitWastelandJavelinBackChoice 
                                : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.D3.name === "Булавоносцы" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitWastelandMacesBackChoice 
                                : occupiedCell.D3.name === "Булавоносцы" && occupiedCell.D3.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.D3.name === "Ангалиты" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitWastelandAngalitBackChoice 
                                : occupiedCell.D3.name === "Ангалиты" && occupiedCell.D3.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.D3.occupied === true && occupiedCell.D3.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D3"} 
                            onClick={() => {handleChoiceCellAttack("D3")}} 
                            disabled={occupiedCell.D3.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D3.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D3.health} max={ occupiedCell.D3.name === "Охотники" ? 80 : occupiedCell.D3.name === "Метатели" ? 100 : occupiedCell.D3.name === "Булавоносцы" ? 180 : occupiedCell.D3.name === "Ангалиты" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellD4}>
                        <button 
                            className={occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitWastelandHunterBackChoice 
                                : occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 ? classes.unitWastelandHunterBack 
                                : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitWastelandJavelinBackChoice 
                                : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 ? classes.unitWastelandJavelinBack 
                                : occupiedCell.D4.name === "Булавоносцы" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitWastelandMacesBackChoice 
                                : occupiedCell.D4.name === "Булавоносцы" && occupiedCell.D4.health !== 0 ? classes.unitWastelandMacesBack 
                                : occupiedCell.D4.name === "Ангалиты" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitWastelandAngalitBackChoice 
                                : occupiedCell.D4.name === "Ангалиты" && occupiedCell.D4.health !== 0 ? classes.unitWastelandAngalitBack 
                                : occupiedCell.D4.occupied === true && occupiedCell.D4.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D4"} 
                            onClick={() => {handleChoiceCellAttack("D4")}} 
                            disabled={occupiedCell.D4.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D4.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D4.health} max={ occupiedCell.D4.name === "Охотники" ? 80 : occupiedCell.D4.name === "Метатели" ? 100 : occupiedCell.D4.name === "Булавоносцы" ? 180 : occupiedCell.D4.name === "Ангалиты" ? 250 : 0 }></progress>
                        </button>  
                    </div>
                
                </div>}
                    
            </div>
            
        </div>
    )
}

