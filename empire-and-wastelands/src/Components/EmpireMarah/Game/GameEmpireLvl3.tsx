import classes from "../../Styles/Games.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useEffect, useState } from "react";
import Avatar from "../../../Images/ImpireMarahImage/AvatarHero.jpg";
import Card from "../../../Images/ImpireMarahImage/CoatOfArmsEmpire.webp";
import CardWestArcher from "../../../Images/ImpireMarahImage/ImageImpireCardWestArcher.jpg";
import CardWestSwordsman from "../../../Images/ImpireMarahImage/ImageImpireCardWestSwordsman.jpg";
import CardEastArcher from "../../../Images/ImpireMarahImage/ImageImpireCardEastArcher.jpg";
import CardEastPathFinder from "../../../Images/ImpireMarahImage/ImageImpireCardEastPathfinder.jpg";
import AngalHunter from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalHunter.jpg";
import AngalJavelin from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalJavelin.jpg";
import AngalMaces from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalMaces.jpg";
import { LoseMessage } from "./StoryMessages/LoseMessage";
import { IntroEmpireGameLvl3 } from "./StoryMessages/Lvl3/IntroEmpireGameLvl3";
import { MessageHalfHealthLvl3 } from "./StoryMessages/Lvl3/MessageHalfHealthLvl3";
import { OutroEmpireGameLvl3 } from "./StoryMessages/Lvl3/OutroEmpireGameLvl3";
import { useGameResources } from "./HookForResources/HookResources";

export const GameEmpireLvl3 = () => {
    const [resources, setResources] = useGameResources();
        
    const [showShop, setShowShop] = useState(false);
    const [reserve, setReserve] = useState({
        empireWestArcher: 0,
        empireWestSwordsman: 0,
        empireEastArcher: 0,
        empireEastPathfinder: 0,
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
        poultice: 0,
        showKeepInLine: false,
        showFury: false,
        showPoultice: false,
    });
    const [showButtonPoultice, setShowButtonPoultice] = useState(false);
    const [stateChoiceButton, setStateChoiceButton] = useState(true);
    const [showGameField, setShowGameField] = useState(false);
    const [showSkillsSoldierEmpire, setShowSkillsSoldierEmpire] = useState(false);
    const [stateSkillsSoldiersEmpire, setStateSkillsSoldiersEmpire] = useState({
        stateSkillsWestArcher: false,
        stateSkillsWestSwordsman: false,
        stateSkillsEastArcher: false,
        stateSkillsEastPathfinder: false,
        showStateSkillsWestArcher: false,
        showStateSkillsWestSwordsman: false,
        showStateSkillsEastArcher: false,
        showStateSkillsEastPathfinder: false,
        stateWestArcherQuantitySkills: true,
        stateWestSwordsmanQuantitySkills: true,
        stateEastArcherQuantitySkills: true,
        stateEastPathfinderQuantitySkills: true,
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
                name: "Метатели",
                occupied: false,
                health: 150,
                attack: 15,
                defense: 4,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A2:{
                name: "Метатели",
                occupied: false,
                health: 150,
                attack: 15,
                defense: 4,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A3:{
                name: "Метатели",
                occupied: false,
                health: 150,
                attack: 15,
                defense: 4,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A4:{
                name: "Метатели",
                occupied: false,
                health: 150,
                attack: 15,
                defense: 4,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A5:{
                name: "Охотники",
                occupied: false,
                health: 100,
                attack: 12,
                defense: 3,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A6:{
                name: "Булавоносцы",
                occupied: false,
                health: 250,
                attack: 20,
                defense: 5,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A7:{
                name: "Булавоносцы",
                occupied: false,
                health: 250,
                attack: 20,
                defense: 5,
                first: false,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A8:{
                name: "Охотники",
                occupied: false,
                health: 100,
                attack: 12,
                defense: 3,
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
                classEmpireSoldier: 0,
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
                classEmpireSoldier: 0,
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
                classEmpireSoldier: 0,
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
                classEmpireSoldier: 0,
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
                classEmpireSoldier: 0,
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
                classEmpireSoldier: 0,
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
                classEmpireSoldier: 0,
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
                classEmpireSoldier: 0,
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
        empireButtonWestArcher: false,
        empireButtonWestSwordsman: false,
        empireButtonEastArcher: false,
        empireButtonEastPathfinder: false,
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

    function handleBuyWestArcher() {
        if (resources >= 35) {
            setResources(prev => prev - 35);
            setReserve(prevReserve => ({
            ...prevReserve,
            empireWestArcher: prevReserve.empireWestArcher + 1,
        }));
        }
        else if (resources < 35) {
            return
        }
    }

    function handleBuyWestSwordsman() {
        if (resources >= 75) {
            setResources(prev => prev - 75);
            setReserve(prevReserve => ({
            ...prevReserve,
            empireWestSwordsman: prevReserve.empireWestSwordsman + 1,
        }));
        }
        else if (resources < 75) {
            return
        }
        
    }

    function handleBuyEastArcher() {
        if (resources >= 90) {
            setResources(prev => prev - 90);
            setReserve(prevReserve => ({
            ...prevReserve,
            empireEastArcher: prevReserve.empireEastArcher + 1,
        }));
        }
        else if (resources < 90) {
            return
        }
        
    }

    function handleBuyEastPathfinder() {
        if (resources >= 140) {
            setResources(prev => prev - 140);
            setReserve(prevReserve => ({
            ...prevReserve,
            empireEastPathfinder: prevReserve.empireEastPathfinder + 1,
            }));
        }
        else if (resources < 140) {
            return
        }
        
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

    function handleRequestForWestArcherReserves() {
        setReserve(prevReserve => ({
        ...prevReserve,
        empireWestArcher: prevReserve.empireWestArcher - 1,
    }));
        setStateButtonsSkills(true);
        setStateStyleSoldier(1);
        setStateButtonSoldiers({
            empireButtonWestArcher: true,
            empireButtonWestSwordsman: false,
            empireButtonEastArcher: false,
            empireButtonEastPathfinder: false,
        });
    }

    function handleRequestForWestSwordsmanReserves() {
        setReserve(prevReserve => ({
        ...prevReserve,
        empireWestSwordsman: prevReserve.empireWestSwordsman - 1,
    }));
        setStateButtonsSkills(true);
        setStateStyleSoldier(2);
        setStateButtonSoldiers({
            empireButtonWestArcher: false,
            empireButtonWestSwordsman: true,
            empireButtonEastArcher: false,
            empireButtonEastPathfinder: false,
        });
    }

    function handleRequestForEastArcherReserves() {
        setReserve(prevReserve => ({
        ...prevReserve,
        empireEastArcher: prevReserve.empireEastArcher - 1,
    }));
        setStateButtonsSkills(true);
        setStateStyleSoldier(3);
        setStateButtonSoldiers({
            empireButtonWestArcher: false,
            empireButtonWestSwordsman: false,
            empireButtonEastArcher: true,
            empireButtonEastPathfinder: false,
        });
    }

    function handleRequestForEastPathfinderReserves() {
        setReserve(prevReserve => ({
        ...prevReserve,
        empireEastPathfinder: prevReserve.empireEastPathfinder - 1,
    }));
        setStateButtonsSkills(true);
        setStateStyleSoldier(4);
        setStateButtonSoldiers({
            empireButtonWestArcher: false,
            empireButtonWestSwordsman: false,
            empireButtonEastArcher: false,
            empireButtonEastPathfinder: true,
        });
    }

    function handleTroopDeployment(id: string) {
    setStateButtonsSkills(false);
    setStateStyleSoldier(0);
if(["C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"].includes(id) && stateButtonSoldiers.empireButtonWestArcher === true ) {
        
        setStateButtonSoldiers({
            empireButtonWestArcher: false,
            empireButtonWestSwordsman: false,
            empireButtonEastArcher: false,
            empireButtonEastPathfinder: false,
        });
        setStyledButtons(prev => ({
            ...prev,
            [id]: 1 // 1 - охотник
        }));
        if(id === "C1"){
        setOccupiedCell(prevOccupiedCell => ({
            ...prevOccupiedCell,
            C1:{
                    name: "Лучники запада",
                    occupied: true,
                    health: 80,
                    attack: 10,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestArcher: true}));
        }
        else if(id === "C2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C2:{    
                    name: "Лучники запада",
                    occupied: true,
                    health: 80,
                    attack: 10,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestArcher: true}));
        }
        else if(id === "C3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C3:{    
                    name: "Лучники запада",
                    occupied: true,
                    health: 80,
                    attack: 10,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestArcher: true}));
        }
        else if(id === "C4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C4:{
                    name: "Лучники запада",
                    occupied: true,
                    health: 80,
                    attack: 10,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestArcher: true}));
        }
        else if(id === "D1"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D1:{
                    name: "Лучники запада",
                    occupied: true,
                    health: 80,
                    attack: 10,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestArcher: true}));
        }
        else if(id === "D2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D2:{
                    name: "Лучники запада",
                    occupied: true,
                    health: 80,
                    attack: 10,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestArcher: true}));
        }
        else if(id === "D3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D3:{
                    name: "Лучники запада",
                    occupied: true,
                    health: 80,
                    attack: 10,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestArcher: true}));
        }
        else if(id === "D4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D4:{
                    name: "Лучники запада",
                    occupied: true,
                    health: 80,
                    attack: 10,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 1,
                    showCard: false,
                    priority: 1,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestArcher: true}));
        }
    }
    else if(["C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"].includes(id) && stateButtonSoldiers.empireButtonWestSwordsman === true ) {
        
        setStateButtonSoldiers({
            empireButtonWestArcher: false,
            empireButtonWestSwordsman: false,
            empireButtonEastArcher: false,
            empireButtonEastPathfinder: false,
        });
        setStyledButtons(prev => ({
            ...prev,
            [id]: 2 // 2 - метатель
        }));
        if(id === "C1"){
        setOccupiedCell(prevOccupiedCell => ({
            ...prevOccupiedCell,
            C1:{
                name: "Мечники запада",
                occupied: true,
                health: 130,
                attack: 15,
                defense: 5,
                choice: false,
                classEmpireSoldier: 2,
                showCard: false,
                priority: 3,
            },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestSwordsman: true}));
        }
        else if(id === "C2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C2:{    
                    name: "Мечники запада",
                    occupied: true,
                    health: 130,
                    attack: 15,
                    defense: 5,
                    choice: false,
                    classEmpireSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestSwordsman: true}));
        }
        else if(id === "C3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C3:{    
                    name: "Мечники запада",
                    occupied: true,
                    health: 130,
                    attack: 15,
                    defense: 5,
                    choice: false,
                    classEmpireSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestSwordsman: true}));
        }
        else if(id === "C4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C4:{
                    name: "Мечники запада",
                    occupied: true,
                    health: 130,
                    attack: 15,
                    defense: 5,
                    choice: false,
                    classEmpireSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestSwordsman: true}));
        }
        else if(id === "D1"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D1:{
                    name: "Мечники запада",
                    occupied: true,
                    health: 130,
                    attack: 15,
                    defense: 5,
                    choice: false,
                    classEmpireSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestSwordsman: true}));
        }
        else if(id === "D2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D2:{
                    name: "Мечники запада",
                    occupied: true,
                    health: 130,
                    attack: 15,
                    defense: 5,
                    choice: false,
                    classEmpireSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestSwordsman: true}));
        }
        else if(id === "D3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D3:{
                    name: "Мечники запада",
                    occupied: true,
                    health: 130,
                    attack: 15,
                    defense: 5,
                    choice: false,
                    classEmpireSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestSwordsman: true}));
        }
        else if(id === "D4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D4:{
                    name: "Мечники запада",
                    occupied: true,
                    health: 130,
                    attack: 15,
                    defense: 5,
                    choice: false,
                    classEmpireSoldier: 2,
                    showCard: false,
                    priority: 3,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsWestSwordsman: true}));
        }
    }

    else if(["C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"].includes(id) && stateButtonSoldiers.empireButtonEastArcher === true ) {
        
        setStateButtonSoldiers({
            empireButtonWestArcher: false,
            empireButtonWestSwordsman: false,
            empireButtonEastArcher: false,
            empireButtonEastPathfinder: false,
        });
        setStyledButtons(prev => ({
            ...prev,
            [id]: 3 // 3 - булавоносец
        }));
        if(id === "C1"){
        setOccupiedCell(prevOccupiedCell => ({
            ...prevOccupiedCell,
            C1:{
                name: "Лучники востока",
                occupied: true,
                health: 150,
                attack: 25,
                defense: 4,
                choice: false,
                classEmpireSoldier: 3,
                showCard: false,
                priority: 2,
            },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastArcher: true}));
        }
        else if(id === "C2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C2:{    
                    name: "Лучники востока",
                    occupied: true,
                    health: 150,
                    attack: 25,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastArcher: true}));
        }
        else if(id === "C3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C3:{    
                    name: "Лучники востока",
                    occupied: true,
                    health: 150,
                    attack: 25,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastArcher: true}));
        }
        else if(id === "C4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C4:{
                    name: "Лучники востока",
                    occupied: true,
                    health: 150,
                    attack: 25,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastArcher: true}));
        }
        else if(id === "D1"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D1:{
                    name: "Лучники востока",
                    occupied: true,
                    health: 150,
                    attack: 25,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastArcher: true}));
        }
        else if(id === "D2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D2:{
                    name: "Лучники востока",
                    occupied: true,
                    health: 150,
                    attack: 25,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastArcher: true}));
        }
        else if(id === "D3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D3:{
                    name: "Лучники востока",
                    occupied: true,
                    health: 150,
                    attack: 25,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastArcher: true}));
        }
        else if(id === "D4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D4:{
                    name: "Лучники востока",
                    occupied: true,
                    health: 150,
                    attack: 25,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 3,
                    showCard: false,
                    priority: 2,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastArcher: true}));
        }
    }


    else if(["C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"].includes(id) && stateButtonSoldiers.empireButtonEastPathfinder === true ) {
        
        setStateButtonSoldiers({
            empireButtonWestArcher: false,
            empireButtonWestSwordsman: false,
            empireButtonEastArcher: false,
            empireButtonEastPathfinder: false,
        });
        setStyledButtons(prev => ({
            ...prev,
            [id]: 4 // 4 - Следопыты востока
        }));
        if(id === "C1"){
        setOccupiedCell(prevOccupiedCell => ({
            ...prevOccupiedCell,
            C1:{
                name: "Следопыты востока",
                occupied: true,
                health: 250,
                attack: 30,
                defense: 4,
                choice: false,
                classEmpireSoldier: 4,
                showCard: false,
                priority: 4,
            },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastPathfinder: true}));
        }
        else if(id === "C2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C2:{    
                    name: "Следопыты востока",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastPathfinder: true}));
        }
        else if(id === "C3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C3:{    
                    name: "Следопыты востока",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastPathfinder: true}));
        }
        else if(id === "C4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C4:{
                    name: "Следопыты востока",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastPathfinder: true}));
        }
        else if(id === "D1"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D1:{
                    name: "Следопыты востока",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastPathfinder: true}));
        }
        else if(id === "D2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D2:{
                    name: "Следопыты востока",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastPathfinder: true}));
        }
        else if(id === "D3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D3:{
                    name: "Следопыты востока",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastPathfinder: true}));
        }
        else if(id === "D4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D4:{
                    name: "Следопыты востока",
                    occupied: true,
                    health: 250,
                    attack: 30,
                    defense: 4,
                    choice: false,
                    classEmpireSoldier: 4,
                    showCard: false,
                    priority: 4,
                },
        }));
        setStateSkillsSoldiersEmpire(prev => ({...prev, stateSkillsEastPathfinder: true}));
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
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.C1.attack - prev.A1.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.C2.attack - prev.A1.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.C3.attack - prev.A1.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.C4.attack - prev.A1.defense),
            }
            }));
        handleCounterattack()
    }

    else if (id === "A2" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.C1.attack - prev.A2.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.C2.attack - prev.A2.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.C3.attack - prev.A2.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.C4.attack - prev.A2.defense),
            }
            }));
        handleCounterattack()
    }

    else if (id === "A3" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.C1.attack - prev.A3.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.C2.attack - prev.A3.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.C3.attack - prev.A3.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.C4.attack - prev.A3.defense),
            }
            }));
        handleCounterattack()
    }

    else if (id === "A4" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.C1.attack - prev.A4.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.C2.attack - prev.A4.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.C3.attack - prev.A4.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.C4.attack - prev.A4.defense),
            }
            }));
        handleCounterattack()
    }

    else if (id === "A5" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.C1.attack - prev.A5.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.C2.attack - prev.A5.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.C3.attack - prev.A5.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.C4.attack - prev.A5.defense),
            }
            }));
        handleCounterattack()
    }

    else if (id === "A6" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if (occupiedCell.C1.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.C1.attack - prev.A6.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if (occupiedCell.C2.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.C2.attack - prev.A6.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if (occupiedCell.C3.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.C3.attack - prev.A6.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if (occupiedCell.C4.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.C4.attack - prev.A6.defense),
            }
            }));
        handleCounterattack()
    }


    else if (id === "A7" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
        if (occupiedCell.C1.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.C1.attack - prev.A7.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
        if (occupiedCell.C2.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.C2.attack - prev.A7.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
        if (occupiedCell.C3.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.C3.attack - prev.A7.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
        if (occupiedCell.C4.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.C4.attack - prev.A7.defense),
            }
            }));
        handleCounterattack()
    }


    else if (id === "A8" && occupiedCell.C1.choice === true && occupiedCell.C1.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.C1.attack - prev.A8.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.C2.choice === true && occupiedCell.C2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.C2.attack - prev.A8.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.C3.choice === true && occupiedCell.C3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.C3.attack - prev.A8.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.C4.choice === true && occupiedCell.C4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.C4.attack - prev.A8.defense),
            }
            }));
        handleCounterattack()
    }


    else if (id === "A1" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.D1.attack - prev.A1.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.D2.attack - prev.A1.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.D3.attack - prev.A1.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A1" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A1: {
                    ...prev.A1,
                    health: prev.A1.health - (occupiedCell.D4.attack - prev.A1.defense),
            }
            }));
        handleCounterattack()
    }

    else if (id === "A2" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.D1.attack - prev.A2.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.D2.attack - prev.A2.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.D3.attack - prev.A2.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A2: {
                    ...prev.A2,
                    health: prev.A2.health - (occupiedCell.D4.attack - prev.A2.defense),
            }
            }));
        handleCounterattack()
    }

    else if (id === "A3" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.D1.attack - prev.A3.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.D2.attack - prev.A3.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.D3.attack - prev.A3.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A3: {
                    ...prev.A3,
                    health: prev.A3.health - (occupiedCell.D4.attack - prev.A3.defense),
            }
            }));
        handleCounterattack()
    }

    else if (id === "A4" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.D1.attack - prev.A4.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.D2.attack - prev.A4.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.D3.attack - prev.A4.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A4: {
                    ...prev.A4,
                    health: prev.A4.health - (occupiedCell.D4.attack - prev.A4.defense),
            }
            }));
        handleCounterattack()
    }

    else if (id === "A5" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.D1.attack - prev.A5.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.D2.attack - prev.A5.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.D3.attack - prev.A5.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A5: {
                    ...prev.A5,
                    health: prev.A5.health - (occupiedCell.D4.attack - prev.A5.defense),
            }
            }));
        handleCounterattack()
    }

    else if (id === "A6" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if (occupiedCell.D1.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.D1.attack - prev.A6.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if (occupiedCell.D2.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.D2.attack - prev.A6.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if (occupiedCell.D3.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.D3.attack - prev.A6.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A6" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if (occupiedCell.D4.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A6: {
                ...prev.A6,
                health: prev.A6.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A6: {
                    ...prev.A6,
                    health: prev.A6.health - (occupiedCell.D4.attack - prev.A6.defense),
            }
            }));
        handleCounterattack()
    }


    else if (id === "A7" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
        if (occupiedCell.D1.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.D1.attack - prev.A7.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
        if (occupiedCell.D2.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.D2.attack - prev.A7.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
        if (occupiedCell.D3.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.D3.attack - prev.A7.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A7" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
        if (occupiedCell.D4.name === "Мечники запада") {
            setOccupiedCellOpponent(prev => ({...prev, 
            A7: {
                ...prev.A7,
                health: prev.A7.health + 2 
            }
            }));
        }
        // Это баф Булавоносцев запада, меньший урон от Мечников запада.
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A7: {
                    ...prev.A7,
                    health: prev.A7.health - (occupiedCell.D4.attack - prev.A7.defense),
            }
            }));
        handleCounterattack()
    }


    else if (id === "A8" && occupiedCell.D1.choice === true && occupiedCell.D1.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.D1.attack - prev.A8.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.D2.choice === true && occupiedCell.D2.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.D2.attack - prev.A8.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.D3.choice === true && occupiedCell.D3.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.D3.attack - prev.A8.defense),
            }
            }));
        handleCounterattack()
    }
    else if (id === "A8" && occupiedCell.D4.choice === true && occupiedCell.D4.health > 0) {
            setOccupiedCellOpponent(prev => ({
                ...prev,
                A8: {
                    ...prev.A8,
                    health: prev.A8.health - (occupiedCell.D4.attack - prev.A8.defense),
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

    function handleSkillWestArcher() {
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

        if (stateSkillsSoldiersEmpire.stateSkillsWestArcher === true) {
            setStateSkillsSoldiersEmpire(prev => ({...prev, stateWestArcherQuantitySkills : false}));
            setStateSkillsSoldiersEmpire(prev => ({...prev, showStateSkillsWestArcher: false}));
        }
       
    }

    function handleSkillWestSwordsman() {

        if (attackQueue === 1) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - 10,
                
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
                health: prev.A2.health - 10,
                
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
                health: prev.A3.health - 10,
                
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
                health: prev.A4.health - 10,
                
            },
        }));
        }
        else if (attackQueue === 5) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - 10,
                
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
                health: prev.A6.health - 10,
                
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
                health: prev.A7.health - 10,
                
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
                health: prev.A8.health - 10,
                
            },
        }));
        }

        if (stateSkillsSoldiersEmpire.stateSkillsWestSwordsman === true) {
            setStateSkillsSoldiersEmpire(prev => ({...prev, stateWestSwordsmanQuantitySkills : false}));
            setStateSkillsSoldiersEmpire(prev => ({...prev, showStateSkillsWestSwordsman: false}));
        }
        
    }

    function handleSkillEastArcher() {

        if (attackQueue === 1) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A1: {
                ...prev.A1,
                health: prev.A1.health - 35,
                defense: prev.A1.defense - 1
            }
        }));
        }
        else if (attackQueue === 2) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - 35,
                defense: prev.A2.defense - 1
            }
        }));
        }
        else if (attackQueue === 3) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - 35,
                defense: prev.A3.defense - 1
            }
        }));
        }
        else if (attackQueue === 4) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - 35,
                defense: prev.A4.defense - 1
            }
        }));
        }
        else if (attackQueue === 5) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - 35,
                defense: prev.A5.defense - 1
            }
        }));
        }
        else if (attackQueue === 6) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A6: {
                ...prev.A6,
                health: prev.A6.health - 35,
                defense: prev.A6.defense - 1
            }
        }));
        }
        else if (attackQueue === 7) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A7: {
                ...prev.A7,
                health: prev.A7.health - 35,
                defense: prev.A7.defense - 1
            }
        }));
        }
        else if (attackQueue === 8) {
            setOccupiedCellOpponent(prev => ({
            ...prev,
            A8: {
                ...prev.A8,
                health: prev.A8.health - 35,
                defense: prev.A8.defense - 1
            }
        }));
        }

        if (stateSkillsSoldiersEmpire.stateSkillsEastArcher === true) {
            setStateSkillsSoldiersEmpire(prev => ({...prev, stateEastArcherQuantitySkills : false}));
            setStateSkillsSoldiersEmpire(prev => ({...prev, showStateSkillsEastArcher: false}));
        }
        
    }
    
    function handleSkillEastPathfinder() {

        if (attackQueue === 1) {
            if(occupiedCellOpponent.A1.name === "Ангалит"){
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A1: {
                        ...prev.A1,
                        health: prev.A1.health - 60,
                        
                    }
                    }));
            }
            else {
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A1: {
                        ...prev.A1,
                        health: prev.A1.health - 40,
                        
                    }
                    }));
            }
        }
        else if (attackQueue === 2) {
            if(occupiedCellOpponent.A2.name === "Ангалит"){
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A2: {
                        ...prev.A2,
                        health: prev.A2.health - 60,
                        
                    }
                    }));
            }
            else {
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A2: {
                        ...prev.A2,
                        health: prev.A2.health - 40,
                        
                    }
                    }));
            }
        }
        else if (attackQueue === 3) {
            if(occupiedCellOpponent.A3.name === "Ангалит"){
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A3: {
                        ...prev.A3,
                        health: prev.A3.health - 60,
                        
                    }
                    }));
            }
            else {
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A3: {
                        ...prev.A3,
                        health: prev.A3.health - 40,
                        
                    }
                    }));
            }
        }
        else if (attackQueue === 4) {
            if(occupiedCellOpponent.A4.name === "Ангалит"){
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A4: {
                        ...prev.A4,
                        health: prev.A4.health - 60,
                        
                    }
                    }));
            }
            else {
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A4: {
                        ...prev.A4,
                        health: prev.A4.health - 40,
                        
                    }
                    }));
            }
        }
        else if (attackQueue === 5) {
            if(occupiedCellOpponent.A5.name === "Ангалит"){
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A5: {
                        ...prev.A5,
                        health: prev.A5.health - 60,
                        
                    }
                    }));
            }
            else {
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A5: {
                        ...prev.A5,
                        health: prev.A5.health - 40,
                        
                    }
                    }));
            }
        }
        else if (attackQueue === 6) {
            if(occupiedCellOpponent.A6.name === "Ангалит"){
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A6: {
                        ...prev.A6,
                        health: prev.A6.health - 60,
                        
                    }
                    }));
            }
            else {
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A6: {
                        ...prev.A6,
                        health: prev.A6.health - 40,
                        
                    }
                    }));
            }
        }
        else if (attackQueue === 7) {
            if(occupiedCellOpponent.A7.name === "Ангалит"){
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A7: {
                        ...prev.A7,
                        health: prev.A7.health - 60,
                        
                    }
                    }));
            }
            else {
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A7: {
                        ...prev.A7,
                        health: prev.A7.health - 40,
                        
                    }
                    }));
            }
        }
        else if (attackQueue === 8) {
            if(occupiedCellOpponent.A8.name === "Ангалит"){
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A8: {
                        ...prev.A8,
                        health: prev.A8.health - 60,
                        
                    }
                    }));
            }
            else {
                setOccupiedCellOpponent(prev => ({
                    ...prev,
                    A8: {
                        ...prev.A8,
                        health: prev.A8.health - 40,
                        
                    }
                    }));
            }
        }
        

        if (stateSkillsSoldiersEmpire.stateSkillsEastPathfinder === true) {
            setStateSkillsSoldiersEmpire(prev => ({...prev, stateEastPathfinderQuantitySkills : false}));
            setStateSkillsSoldiersEmpire(prev => ({...prev, showStateSkillsEastPathfinder: false}));
        }
        
    }

    function handleSkillHeroKeepInLine() {

        if(occupiedCell.C1.name === "Лучники запада" || occupiedCell.C1.name === "Мечники запада") {
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                defense: prev.C1.defense + 2,
            }
        }));
        }
        if(occupiedCell.C2.name === "Лучники запада" || occupiedCell.C2.name === "Мечники запада") {
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                defense: prev.C2.defense + 2,
            }
        }));
        }
        if(occupiedCell.C3.name === "Лучники запада" || occupiedCell.C3.name === "Мечники запада") {
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                defense: prev.C3.defense + 2,
            }
        }));
        }
        if(occupiedCell.C4.name === "Лучники запада" || occupiedCell.C4.name === "Мечники запада") {
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                defense: prev.C4.defense + 2,
            }
        }));
        }
        if(occupiedCell.D1.name === "Лучники запада" || occupiedCell.D1.name === "Мечники запада") {
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                defense: prev.D1.defense + 2,
            }
        }));
        }
        if(occupiedCell.D2.name === "Лучники запада" || occupiedCell.D2.name === "Мечники запада") {
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                defense: prev.D2.defense + 2,
            }
        }));
        }
        if(occupiedCell.D3.name === "Лучники запада" || occupiedCell.D3.name === "Мечники запада") {
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                defense: prev.D3.defense + 2,
            }
        }));
        }
        if(occupiedCell.D4.name === "Лучники запада" || occupiedCell.D4.name === "Мечники запада") {
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                defense: prev.D4.defense + 2,
            }
        }));
        }

        setStateSkillsHero(prev => ({...prev, showKeepInLine: false}));

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
        else if (occupiedCell.C1.choice === true && occupiedCell.C1.health !== 0 && occupiedCell.C1.health !== 130 && occupiedCell.C1.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: 130,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C1.choice === true && occupiedCell.C1.health !== 0 && occupiedCell.C1.health !== 150 && occupiedCell.C1.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C1: {
                ...prev.C1,
                health: 150,
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
        else if (occupiedCell.C2.choice === true && occupiedCell.C2.health !== 0 && occupiedCell.C2.health !== 130 && occupiedCell.C2.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: 130,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C2.choice === true && occupiedCell.C2.health !== 0 && occupiedCell.C2.health !== 150 && occupiedCell.C2.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C2: {
                ...prev.C2,
                health: 150,
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
        else if (occupiedCell.C3.choice === true && occupiedCell.C3.health !== 0 && occupiedCell.C3.health !== 130 && occupiedCell.C3.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: 130,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C3.choice === true && occupiedCell.C3.health !== 0 && occupiedCell.C3.health !== 150 && occupiedCell.C3.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C3: {
                ...prev.C3,
                health: 150,
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
        else if (occupiedCell.C4.choice === true && occupiedCell.C4.health !== 0 && occupiedCell.C4.health !== 130 && occupiedCell.C4.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: 130,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.C4.choice === true && occupiedCell.C4.health !== 0 && occupiedCell.C4.health !== 150 && occupiedCell.C4.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            C4: {
                ...prev.C4,
                health: 150,
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
        else if (occupiedCell.D1.choice === true && occupiedCell.D1.health !== 0 && occupiedCell.D1.health !== 130 && occupiedCell.D1.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: 130,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D1.choice === true && occupiedCell.D1.health !== 0 && occupiedCell.D1.health !== 150 && occupiedCell.D1.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D1: {
                ...prev.D1,
                health: 150,
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
        else if (occupiedCell.D2.choice === true && occupiedCell.D2.health !== 0 && occupiedCell.D2.health !== 130 && occupiedCell.D2.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: 130,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D2.choice === true && occupiedCell.D2.health !== 0 && occupiedCell.D2.health !== 150 && occupiedCell.D2.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D2: {
                ...prev.D2,
                health: 150,
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
        else if (occupiedCell.D3.choice === true && occupiedCell.D3.health !== 0 && occupiedCell.D3.health !== 130 && occupiedCell.D3.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: 130,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D3.choice === true && occupiedCell.D3.health !== 0 && occupiedCell.D3.health !== 150 && occupiedCell.D3.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D3: {
                ...prev.D3,
                health: 150,
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
        else if (occupiedCell.D4.choice === true && occupiedCell.D4.health !== 0 && occupiedCell.D4.health !== 130 && occupiedCell.D4.priority === 3) {
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: 130,
            }
            }));
            setStateSkillsHero(prev => ({...prev, poultice: prev.poultice - 1}));
        }
        else if (occupiedCell.D4.choice === true && occupiedCell.D4.health !== 0 && occupiedCell.D4.health !== 150 && occupiedCell.D4.priority === 2) {
            setOccupiedCell(prev => ({
            ...prev,
            D4: {
                ...prev.D4,
                health: 150,
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
        setShowSkillsSoldierEmpire(true);
        if (stateSkillsSoldiersEmpire.stateSkillsWestArcher === true) {
            setStateSkillsSoldiersEmpire(prev => ({...prev, showStateSkillsWestArcher: true}));
        }
        if (stateSkillsSoldiersEmpire.stateSkillsWestSwordsman === true) {
            setStateSkillsSoldiersEmpire(prev => ({...prev, showStateSkillsWestSwordsman: true}));
        }
        if (stateSkillsSoldiersEmpire.stateSkillsEastArcher === true) {
            setStateSkillsSoldiersEmpire(prev => ({...prev, showStateSkillsEastArcher: true}));
        }
        if (stateSkillsSoldiersEmpire.stateSkillsEastPathfinder === true) {
            setStateSkillsSoldiersEmpire(prev => ({...prev, showStateSkillsEastPathfinder: true}));
        }
        if (stateSkillsHero.poultice !== 0){
            setStateSkillsHero(prev => ({...prev, showPoultice: true}))
        }
        
        setStateSkillsHero(prev => ({...prev, showKeepInLine: true}))
       
    };

    useEffect(() => {
        if(occupiedCellOpponent.A1.health + occupiedCellOpponent.A2.health + occupiedCellOpponent.A3.health + occupiedCellOpponent.A4.health + occupiedCellOpponent.A5.health + occupiedCellOpponent.A6.health + occupiedCellOpponent.A7.health + occupiedCellOpponent.A8.health <= 650 && showStoryMessages.countForMessage === 0) {
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
                const swordsmanCells = Object.values(occupiedCell).filter(cell => 
                    cell.name === "Лучники запада"
                );
            
            
                const allSwordsmenDead = swordsmanCells.length > 0 && 
                swordsmanCells.every(cell => cell.health <= 0);
            
                if (allSwordsmenDead) {
                    setStateSkillsSoldiersEmpire(prev => ({
                        ...prev, 
                        showStateSkillsWestArcher: false
                }));
            }
            }, [occupiedCell]);
        
            useEffect(() => {
                const swordsmanCells = Object.values(occupiedCell).filter(cell => 
                    cell.name === "Мечники запада"
                );
            
            
                const allSwordsmenDead = swordsmanCells.length > 0 && 
                swordsmanCells.every(cell => cell.health <= 0);
            
                if (allSwordsmenDead) {
                    setStateSkillsSoldiersEmpire(prev => ({
                        ...prev, 
                        showStateSkillsWestSwordsman: false
                }));
            }
            }, [occupiedCell]);
    
            useEffect(() => {
                const swordsmanCells = Object.values(occupiedCell).filter(cell => 
                    cell.name === "Лучники востока"
                );
            
            
                const allSwordsmenDead = swordsmanCells.length > 0 && 
                swordsmanCells.every(cell => cell.health <= 0);
            
                if (allSwordsmenDead) {
                    setStateSkillsSoldiersEmpire(prev => ({
                        ...prev, 
                        showStateSkillsEastArcher: false
                }));
            }
            }, [occupiedCell]);

            useEffect(() => {
                const swordsmanCells = Object.values(occupiedCell).filter(cell => 
                    cell.name === "Следопыты востока"
                );
            
            
                const allSwordsmenDead = swordsmanCells.length > 0 && 
                swordsmanCells.every(cell => cell.health <= 0);
            
                if (allSwordsmenDead) {
                    setStateSkillsSoldiersEmpire(prev => ({
                        ...prev, 
                        showStateSkillsEastPathfinder: false
                }));
            }
            }, [occupiedCell]);

            useEffect(() => {
                        if (reserve.empireEastArcher === 0 && reserve.empireEastPathfinder === 0 && reserve.empireWestArcher === 0 && reserve.empireWestSwordsman === 0) {
                            setShowButtonPoultice(false);
                        }
                        else {
                            setShowButtonPoultice(true);
                        }
                    }, [reserve]);
    
    return (
        <div className={classes.gamePageEmpire}>
            
            <div className={classes.topbar} style={{backgroundColor: "cadetblue", backgroundImage: "linear-gradient(180deg, black -20%, cadetblue 47%, cadetblue 53%, black 120%)"}}>
                <HomeButton/>Игра<BackButton/>
            </div>
            {showStoryMessages.intro && <IntroEmpireGameLvl3 setShowStoryMessages={setShowStoryMessages}/>}

            {showStoryMessages.halfHealth && <MessageHalfHealthLvl3 setShowStoryMessages={setShowStoryMessages}/>}

            {showStoryMessages.outro && <OutroEmpireGameLvl3 setShowStoryMessages={setShowStoryMessages} resources={resources} setResources={setResources}/>}

            {showStoryMessages.lose && <LoseMessage/>}

            <div className={classes.skillsBlockLeft}>

                {occupiedCell.C1.showCard && <div className={classes.cardEmpireBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C1.classEmpireSoldier === 1 
                    ? CardWestArcher
                    : occupiedCell.C1.classEmpireSoldier === 2 
                    ? CardWestSwordsman 
                    : occupiedCell.C1.classEmpireSoldier === 3 
                    ? CardEastArcher
                    : occupiedCell.C1.classEmpireSoldier === 4 
                    ? CardEastPathFinder
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max={ occupiedCell.C1.name === "Лучники запада" ? 80 : occupiedCell.C1.name === "Мечники запада" ? 130 : occupiedCell.C1.name === "Лучники востока" ? 150 : occupiedCell.C1.name === "Следопыты востока" ? 250 : 0 } value={occupiedCell.C1.health}></progress>
                    <p>{occupiedCell.C1.name}</p>
                    <p>Attack:  {occupiedCell.C1.attack}</p>
                    <p>Defense: {occupiedCell.C1.defense}:</p>
                </div>}

                {occupiedCell.C2.showCard && <div className={classes.cardEmpireBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C2.classEmpireSoldier === 1 
                    ? CardWestArcher
                    : occupiedCell.C2.classEmpireSoldier === 2 
                    ? CardWestSwordsman
                    : occupiedCell.C2.classEmpireSoldier === 3 
                    ? CardEastArcher
                    : occupiedCell.C2.classEmpireSoldier === 4 
                    ? CardEastPathFinder
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max={ occupiedCell.C2.name === "Лучники запада" ? 80 : occupiedCell.C2.name === "Мечники запада" ? 130 : occupiedCell.C2.name === "Лучники востока" ? 150 : occupiedCell.C2.name === "Следопыты востока" ? 250 : 0 } value={occupiedCell.C2.health}></progress>
                    <p>{occupiedCell.C2.name}</p>
                    <p>Attack:  {occupiedCell.C2.attack}</p>
                    <p>Defense: {occupiedCell.C2.defense}:</p>
                </div>}

                {occupiedCell.C3.showCard && <div className={classes.cardEmpireBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C3.classEmpireSoldier === 1 
                    ? CardWestArcher
                    : occupiedCell.C3.classEmpireSoldier === 2 
                    ? CardWestSwordsman
                    : occupiedCell.C3.classEmpireSoldier === 3 
                    ? CardEastArcher
                    : occupiedCell.C3.classEmpireSoldier === 4 
                    ? CardEastPathFinder
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max={ occupiedCell.C3.name === "Лучники запада" ? 80 : occupiedCell.C3.name === "Мечники запада" ? 130 : occupiedCell.C3.name === "Лучники востока" ? 150 : occupiedCell.C3.name === "Следопыты востока" ? 250 : 0 } value={occupiedCell.C3.health}></progress>
                    <p>{occupiedCell.C3.name}</p>
                    <p>Attack:  {occupiedCell.C3.attack}</p>
                    <p>Defense: {occupiedCell.C3.defense}:</p>
                </div>}

                {occupiedCell.C4.showCard && <div className={classes.cardEmpireBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C4.classEmpireSoldier === 1 
                    ? CardWestArcher
                    : occupiedCell.C4.classEmpireSoldier === 2 
                    ? CardWestSwordsman
                    : occupiedCell.C4.classEmpireSoldier === 3 
                    ? CardEastArcher
                    : occupiedCell.C4.classEmpireSoldier === 4 
                    ? CardEastPathFinder
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max={ occupiedCell.C4.name === "Лучники запада" ? 80 : occupiedCell.C4.name === "Мечники запада" ? 130 : occupiedCell.C4.name === "Лучники востока" ? 150 : occupiedCell.C4.name === "Следопыты востока" ? 250 : 0 } value={occupiedCell.C4.health}></progress>
                    <p>{occupiedCell.C4.name}</p>
                    <p>Attack:  {occupiedCell.C4.attack}</p>
                    <p>Defense: {occupiedCell.C4.defense}:</p>
                </div>}

                {occupiedCell.D1.showCard && <div className={classes.cardEmpireBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D1.classEmpireSoldier === 1 
                    ? CardWestArcher
                    : occupiedCell.D1.classEmpireSoldier === 2 
                    ? CardWestSwordsman
                    : occupiedCell.D1.classEmpireSoldier === 3 
                    ? CardEastArcher
                    : occupiedCell.D1.classEmpireSoldier === 4 
                    ? CardEastPathFinder
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max={ occupiedCell.D1.name === "Лучники запада" ? 80 : occupiedCell.D1.name === "Мечники запада" ? 130 : occupiedCell.D1.name === "Лучники востока" ? 150 : occupiedCell.D1.name === "Следопыты востока" ? 250 : 0 } value={occupiedCell.D1.health}></progress>
                    <p>{occupiedCell.D1.name}</p>
                    <p>Attack:  {occupiedCell.D1.attack}</p>
                    <p>Defense: {occupiedCell.D1.defense}:</p>
                </div>}

                {occupiedCell.D2.showCard && <div className={classes.cardEmpireBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D2.classEmpireSoldier === 1 
                    ? CardWestArcher
                    : occupiedCell.D2.classEmpireSoldier === 2 
                    ? CardWestSwordsman
                    : occupiedCell.D2.classEmpireSoldier === 3 
                    ? CardEastArcher
                    : occupiedCell.D2.classEmpireSoldier === 4 
                    ? CardEastPathFinder
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max={ occupiedCell.D2.name === "Лучники запада" ? 80 : occupiedCell.D2.name === "Мечники запада" ? 130 : occupiedCell.D2.name === "Лучники востока" ? 150 : occupiedCell.D2.name === "Следопыты востока" ? 250 : 0 } value={occupiedCell.D2.health}></progress>
                    <p>{occupiedCell.D2.name}</p>
                    <p>Attack:  {occupiedCell.D2.attack}</p>
                    <p>Defense: {occupiedCell.D2.defense}:</p>
                </div>}

                {occupiedCell.D3.showCard && <div className={classes.cardEmpireBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D3.classEmpireSoldier === 1 
                    ? CardWestArcher
                    : occupiedCell.D3.classEmpireSoldier === 2 
                    ? CardWestSwordsman
                    : occupiedCell.D3.classEmpireSoldier === 3 
                    ? CardEastArcher
                    : occupiedCell.D3.classEmpireSoldier === 4 
                    ? CardEastPathFinder
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max={ occupiedCell.D3.name === "Лучники запада" ? 80 : occupiedCell.D3.name === "Мечники запада" ? 130 : occupiedCell.D3.name === "Лучники востока" ? 150 : occupiedCell.D3.name === "Следопыты востока" ? 250 : 0 } value={occupiedCell.D3.health}></progress>
                    <p>{occupiedCell.D3.name}</p>
                    <p>Attack:  {occupiedCell.D3.attack}</p>
                    <p>Defense: {occupiedCell.D3.defense}:</p>
                </div>}

                {occupiedCell.D4.showCard && <div className={classes.cardEmpireBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D4.classEmpireSoldier === 1 
                    ? CardWestArcher
                    : occupiedCell.D4.classEmpireSoldier === 2 
                    ? CardWestSwordsman
                    : occupiedCell.D4.classEmpireSoldier === 3 
                    ? CardEastArcher
                    : occupiedCell.D4.classEmpireSoldier === 4 
                    ? CardEastPathFinder
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max={ occupiedCell.D4.name === "Лучники запада" ? 80 : occupiedCell.D4.name === "Мечники запада" ? 130 : occupiedCell.D4.name === "Лучники востока" ? 150 : occupiedCell.D4.name === "Следопыты востока" ? 250 : 0 } value={occupiedCell.D4.health}></progress>
                    <p>{occupiedCell.D4.name}</p>
                    <p>Attack:  {occupiedCell.D4.attack}</p>
                    <p>Defense: {occupiedCell.D4.defense}:</p>
                </div>}

                {occupiedCellOpponent.A1.showCard && <div className={classes.cardWastelandTop}>
                    <img className={classes.imageCard} src={AngalJavelin} alt="AngalJavelin" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="150" value={occupiedCellOpponent.A1.health}></progress>
                    <p>{occupiedCellOpponent.A1.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A1.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A1.defense}:</p>
                </div>}

                {occupiedCellOpponent.A2.showCard && <div className={classes.cardWastelandTop}>
                    <img className={classes.imageCard} src={AngalJavelin} alt="AngalJavelin" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="150" value={occupiedCellOpponent.A2.health}></progress>
                    <p>{occupiedCellOpponent.A2.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A2.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A2.defense}:</p>
                </div>}

                {occupiedCellOpponent.A3.showCard && <div className={classes.cardWastelandTop}>
                    <img className={classes.imageCard} src={AngalJavelin} alt="AngalJavelin" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="150" value={occupiedCellOpponent.A3.health}></progress>
                    <p>{occupiedCellOpponent.A3.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A3.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A3.defense}:</p>
                </div>}

                {occupiedCellOpponent.A4.showCard && <div className={classes.cardWastelandTop}>
                    <img className={classes.imageCard} src={AngalJavelin} alt="AngalJavelin" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="150" value={occupiedCellOpponent.A4.health}></progress>
                    <p>{occupiedCellOpponent.A4.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A4.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A4.defense}:</p>
                </div>}

                {occupiedCellOpponent.A5.showCard && <div className={classes.cardWastelandTop}>
                    <img className={classes.imageCard} src={AngalHunter} alt="AngalHunter" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A5.health}></progress>
                    <p>{occupiedCellOpponent.A5.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A5.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A5.defense}:</p>
                </div>}
                
                {occupiedCellOpponent.A6.showCard && <div className={classes.cardWastelandTop}>
                    <img className={classes.imageCard} src={AngalMaces} alt="AngalMaces" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="250" value={occupiedCellOpponent.A6.health}></progress>
                    <p>{occupiedCellOpponent.A6.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A6.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A6.defense}:</p>
                </div>}

                {occupiedCellOpponent.A7.showCard && <div className={classes.cardWastelandTop}>
                    <img className={classes.imageCard} src={AngalMaces} alt="AngalMaces" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="250" value={occupiedCellOpponent.A7.health}></progress>
                    <p>{occupiedCellOpponent.A7.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A7.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A7.defense}:</p>
                </div>}

                {occupiedCellOpponent.A8.showCard && <div className={classes.cardWastelandTop}>
                    <img className={classes.imageCard} src={AngalHunter} alt="AngalHunter" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A8.health}></progress>
                    <p>{occupiedCellOpponent.A8.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A8.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A8.defense}:</p>
                </div>}

            </div>

                {showShop && <div className={classes.shop}>
                    
                    <button className={classes.westArcherBuy} onClick={handleBuyWestArcher} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitEmpire}>Лучники запада: {reserve.empireWestArcher}</p> <p className={classes.titleBuyUnitEmpire}>Цена: 35</p> </button>
                    
                    <button className={classes.westSwordsmanBuy} onClick={handleBuyWestSwordsman} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitEmpire}>Мечники запада: {reserve.empireWestSwordsman}</p> <p className={classes.titleBuyUnitEmpire}>Цена: 75</p> </button>

                    <button className={classes.eastArcherBuy} onClick={handleBuyEastArcher} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitEmpire}>Лучники востока: {reserve.empireEastArcher}</p> <p className={classes.titleBuyUnitEmpire}>Цена: 90</p> </button>
                    
                    <button className={classes.eastPathfinderBuy} onClick={handleBuyEastPathfinder} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitEmpire}>Следопыты востока: {reserve.empireEastPathfinder}</p> <p className={classes.titleBuyUnitEmpire}>Цена: 140</p> </button>

                    {showButtonPoultice && <button className={classes.poulticeBuyEmpire} onClick={handleBuyPoultice} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitEmpire}>Припарки: {stateSkillsHero.poultice}</p> <p className={classes.titleBuyUnitEmpire}>Цена: 50</p> </button>}

                    <h1>GOLD:{resources}</h1>

                    <button className={classes.closeButton} onClick={handleCloseShop} disabled={reserve.empireWestArcher + reserve.empireWestSwordsman + reserve.empireEastArcher + reserve.empireEastPathfinder === 0}>Готово</button>
                    
                </div>}

            <div className={classes.skillsBlockRight}>
                {buttonStateGame.stateShopButton && <button className={classes.shopButtonEmpire} onClick={handleOpenShop}>Магазин</button>}
                {buttonStateGame.stateStartButton && <button className={classes.buttonStartGameEmpire} onClick={handleStartGame}>Старт</button>}
                {buttonStateGame.stateOverallButton && <button className={classes.elvesButtonSkillsWestArcher} onClick={handleRequestForWestArcherReserves} disabled={stateStyleSoldier === 2 || stateStyleSoldier === 3 || stateStyleSoldier === 4 ||  stateButtonSoldiers.empireButtonWestArcher === true || reserve.empireWestArcher === 0}>Лучники запада: {reserve.empireWestArcher}</button>} 
                {buttonStateGame.stateOverallButton && <button className={classes.elvesButtonSkillsWestSwordsman} onClick={handleRequestForWestSwordsmanReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 3 || stateStyleSoldier === 4 || stateButtonSoldiers.empireButtonWestSwordsman === true || reserve.empireWestSwordsman === 0}>Мечники запада: {reserve.empireWestSwordsman}</button>}
                {buttonStateGame.stateOverallButton && <button className={classes.elvesButtonSkillsEastArcher} onClick={handleRequestForEastArcherReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 2 || stateStyleSoldier === 4 || stateButtonSoldiers.empireButtonEastArcher === true || reserve.empireEastArcher === 0}>Лучники востока: {reserve.empireEastArcher}</button>}
                {buttonStateGame.stateOverallButton && <button className={classes.elvesButtonSkillsEastPathfinder} onClick={handleRequestForEastPathfinderReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 2 || stateStyleSoldier === 3 || stateButtonSoldiers.empireButtonEastPathfinder === true || reserve.empireEastPathfinder === 0}>Следопыты востока: {reserve.empireEastPathfinder}</button>}
               
                {showSkillsSoldierEmpire && <div className={classes.skillSoldiersWasteland}>

                    <img className={classes.avatarHeroEmpire} src={Avatar} alt="Avatar" draggable="false" />

                    {stateSkillsHero.showPoultice && <button className={classes.buttonSkillPoulticeEmpire} onClick={handleSkillPoultice} title="Припарка лечит выбранного юнита">Припарка: {stateSkillsHero.poultice}</button>}

                    {stateSkillsHero.showKeepInLine && <button className={classes.buttonSkillKeepInLine} onClick={handleSkillHeroKeepInLine} title="Дисциплина - воодушевляет всех эльфов запада и повышает их защиту">Дисциплина</button>}

                    {stateSkillsSoldiersEmpire.showStateSkillsWestArcher && <button className={classes.buttonSkillWestArcher} onClick={handleSkillWestArcher} title="Залп стрел по противнику">Залп</button>}

                    {stateSkillsSoldiersEmpire.showStateSkillsWestSwordsman && <button className={classes.buttonSkillWestSwordsman} onClick={handleSkillWestSwordsman} title="Атака строем - мечники запада, атакуют по площади">Атака строем</button>}

                    {stateSkillsSoldiersEmpire.showStateSkillsEastArcher && <button className={classes.buttonSkillEastArcher} onClick={handleSkillEastArcher} title="Меткий выстрел - лучники востока, атакуют юнита и ослабляют его защиту">Меткий выстрел</button>}
                    
                    {stateSkillsSoldiersEmpire.showStateSkillsEastPathfinder && <button className={classes.buttonSkillEastPathfinder} onClick={handleSkillEastPathfinder} title="Истребление - если цель является Ангалитом, то Следопыты востока наносят колосальный урон юнит, иначе противник получает средний урон">Истребление</button>}

                </div>}
            </div>

            <div className={classes.blockUnits}>

                <div className={classes.blockFlex1}>
                    
                    <div className={classes.cellA1}>
                        <button className={occupiedCellOpponent.A1.health > 0 && attackQueue === 1 ? classes.unitWastelandJavelinChoice 
                        : occupiedCellOpponent.A1.health <= 0 && attackQueue === 1 ? classes.unitWastelandDeath 
                        : occupiedCellOpponent.A1.health <= 0 ? classes.unitWastelandDeath 
                        : classes.unitWastelandJavelin} id={"A1"} onClick={() => {handleAttack("A1")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A1: {...prev.A1, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A1: {...prev.A1,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A1.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCellOpponent.A1.health} max="150"></progress>
                        </button>
                    </div>

                    <div className={classes.cellA2}>
                        <button className={occupiedCellOpponent.A2.health > 0 && attackQueue === 2 ? classes.unitWastelandJavelinChoice 
                        : occupiedCellOpponent.A2.health <= 0 && attackQueue === 2 ? classes.unitWastelandDeath 
                        : occupiedCellOpponent.A2.health <= 0 ? classes.unitWastelandDeath 
                        : classes.unitWastelandJavelin} id={"A2"} onClick={() => {handleAttack("A2")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A2: {...prev.A2, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A2: {...prev.A2,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A2.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCellOpponent.A2.health} max="150"></progress>
                        </button>
                    </div>
                       
                    <div className={classes.cellA3}>
                        <button className={occupiedCellOpponent.A3.health > 0 && attackQueue === 3 ? classes.unitWastelandJavelinChoice 
                        : occupiedCellOpponent.A3.health <= 0 && attackQueue === 3 ? classes.unitWastelandDeath 
                        : occupiedCellOpponent.A3.health <= 0 ? classes.unitWastelandDeath 
                        : classes.unitWastelandJavelin} id={"A3"} onClick={() => {handleAttack("A3")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A3.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCellOpponent.A3.health} max="150"></progress>
                        </button>
                    </div>

                    <div className={classes.cellA4}>
                        <button className={occupiedCellOpponent.A4.health > 0 && attackQueue === 4 ? classes.unitWastelandJavelinChoice 
                        : occupiedCellOpponent.A4.health <= 0 && attackQueue === 4 ? classes.unitWastelandDeath 
                        : occupiedCellOpponent.A4.health <= 0 ? classes.unitWastelandDeath 
                        : classes.unitWastelandJavelin} id={"A4"} onClick={() => {handleAttack("A4")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A4.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCellOpponent.A4.health} max="150"></progress>
                        </button>
                    </div>

                    <div className={classes.cellA5}>
                        <button className={occupiedCellOpponent.A5.health > 0 && attackQueue === 5 ? classes.unitWastelandHunterChoice 
                        : occupiedCellOpponent.A5.health <= 0 && attackQueue === 5 ? classes.unitWastelandDeath 
                        : occupiedCellOpponent.A5.health <= 0 ? classes.unitWastelandDeath 
                        : classes.unitWastelandHunter} id={"A5"} onClick={() => {handleAttack("A5")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A5: {...prev.A5, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A5: {...prev.A5,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A5.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCellOpponent.A5.health} max="100"></progress>
                        </button>
                    </div>
                    
                    <div className={classes.cellA6}>
                        <button className={occupiedCellOpponent.A6.health > 0 && attackQueue === 6 ? classes.unitWastelandMacesChoice 
                        : occupiedCellOpponent.A6.health <= 0 && attackQueue === 6 ? classes.unitWastelandDeath 
                        : occupiedCellOpponent.A6.health <= 0 ? classes.unitWastelandDeath 
                        : classes.unitWastelandMaces} id={"A6"} onClick={() => {handleAttack("A6")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A6: {...prev.A6, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A6: {...prev.A6,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A6.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCellOpponent.A6.health} max="250"></progress>
                        </button>
                    </div>

                    <div className={classes.cellA7}>
                        <button className={occupiedCellOpponent.A7.health > 0 && attackQueue === 7 ? classes.unitWastelandMacesChoice 
                        : occupiedCellOpponent.A7.health <= 0 && attackQueue === 7 ? classes.unitWastelandDeath 
                        : occupiedCellOpponent.A7.health <= 0 ? classes.unitWastelandDeath 
                        : classes.unitWastelandMaces} id={"A7"} onClick={() => {handleAttack("A7")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A7: {...prev.A7, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A7: {...prev.A7,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A7.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCellOpponent.A7.health} max="250"></progress>
                        </button>
                    </div>

                    <div className={classes.cellA8}>
                        <button className={occupiedCellOpponent.A8.health > 0 && attackQueue === 8 ? classes.unitWastelandHunterChoice 
                        : occupiedCellOpponent.A8.health <= 0 && attackQueue === 8 ? classes.unitWastelandDeath 
                        : occupiedCellOpponent.A8.health <= 0 ? classes.unitWastelandDeath 
                        : classes.unitWastelandHunter} id={"A8"} onClick={() => {handleAttack("A8")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A8: {...prev.A8, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A8: {...prev.A8,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A8.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCellOpponent.A8.health} max="100"></progress>
                        </button>
                    </div>

                </div>

                {buttonStateGame.stateOverallButton && <div>

                    <div className={classes.cellC1}>
                        <button 
                            className={occupiedCell.C1.name === "Лучники запада" && occupiedCell.C1.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.C1.name === "Мечники запада" && occupiedCell.C1.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.C1.name === "Лучники востока" && occupiedCell.C1.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.C1.name === "Следопыты востока" && occupiedCell.C1.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.C1.occupied === true && occupiedCell.C1.health === 0 ? classes.unitEmpireDeath : classes.cell} 
                            id={"C1"} 
                            onClick={() => handleTroopDeployment("C1")} 
                            disabled={occupiedCell.C1.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC2}>
                        <button 
                            className={occupiedCell.C2.name === "Лучники запада" && occupiedCell.C2.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.C2.name === "Мечники запада" && occupiedCell.C2.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.C2.name === "Лучники востока" && occupiedCell.C2.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.C2.name === "Следопыты востока" && occupiedCell.C2.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.C2.occupied === true && occupiedCell.C2.health === 0 ? classes.unitEmpireDeath : classes.cell}
                            id={"C2"} 
                            onClick={() => handleTroopDeployment("C2")} 
                            disabled={occupiedCell.C2.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC3}>
                        <button 
                            className={occupiedCell.C3.name === "Лучники запада" && occupiedCell.C3.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.C3.name === "Мечники запада" && occupiedCell.C3.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.C3.name === "Лучники востока" && occupiedCell.C3.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.C3.name === "Следопыты востока" && occupiedCell.C3.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.C3.occupied === true && occupiedCell.C3.health === 0 ? classes.unitEmpireDeath : classes.cell}
                            id={"C3"} 
                            onClick={() => handleTroopDeployment("C3")} 
                            disabled={occupiedCell.C3.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC4}>
                        <button 
                            className={occupiedCell.C4.name === "Лучники запада" && occupiedCell.C4.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.C4.name === "Мечники запада" && occupiedCell.C4.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.C4.name === "Лучники востока" && occupiedCell.C4.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.C4.name === "Следопыты востока" && occupiedCell.C4.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.C4.occupied === true && occupiedCell.C4.health === 0 ? classes.unitEmpireDeath : classes.cell}
                            id={"C4"} 
                            onClick={() => handleTroopDeployment("C4")} 
                            disabled={occupiedCell.C4.occupied === true}>+
                        </button>
                    </div>

                </div>}

                {showGameField && <div>

                    <div className={classes.cellC1}>
                        <button 
                            className={occupiedCell.C1.name === "Лучники запада" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitEmpireWestArcherBackChoice 
                                : occupiedCell.C1.name === "Лучники запада" && occupiedCell.C1.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.C1.name === "Мечники запада" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitEmpireWestSwordsmanBackChoice 
                                : occupiedCell.C1.name === "Мечники запада" && occupiedCell.C1.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.C1.name === "Лучники востока" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitEmpireEastArcherBackChoice 
                                : occupiedCell.C1.name === "Лучники востока" && occupiedCell.C1.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.C1.name === "Следопыты востока" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitEmpireEastPathfinderBackChoice 
                                : occupiedCell.C1.name === "Следопыты востока" && occupiedCell.C1.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.C1.occupied === true && occupiedCell.C1.health === 0 ? classes.unitEmpireDeath : classes.emptyСell}
                            id={"C1"} 
                            onClick={() => {handleChoiceCellAttack("C1")}} 
                            disabled={occupiedCell.C1.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C1.health <= 0}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCell.C1.health} max={ occupiedCell.C1.name === "Лучники запада" ? 80 : occupiedCell.C1.name === "Мечники запада" ? 130 : occupiedCell.C1.name === "Лучники востока" ? 150 : occupiedCell.C1.name === "Следопыты востока" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellC2}>
                        <button 
                            className={occupiedCell.C2.name === "Лучники запада" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitEmpireWestArcherBackChoice 
                                : occupiedCell.C2.name === "Лучники запада" && occupiedCell.C2.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.C2.name === "Мечники запада" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitEmpireWestSwordsmanBackChoice 
                                : occupiedCell.C2.name === "Мечники запада" && occupiedCell.C2.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.C2.name === "Лучники востока" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitEmpireEastArcherBackChoice 
                                : occupiedCell.C2.name === "Лучники востока" && occupiedCell.C2.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.C2.name === "Следопыты востока" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitEmpireEastPathfinderBackChoice 
                                : occupiedCell.C2.name === "Следопыты востока" && occupiedCell.C2.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.C2.occupied === true && occupiedCell.C2.health === 0 ? classes.unitEmpireDeath : classes.emptyСell}
                            id={"C2"} 
                            onClick={() => {handleChoiceCellAttack("C2")}} 
                            disabled={occupiedCell.C2.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C2.health <= 0}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCell.C2.health} max={ occupiedCell.C2.name === "Лучники запада" ? 80 : occupiedCell.C2.name === "Мечники запада" ? 130 : occupiedCell.C2.name === "Лучники востока" ? 150 : occupiedCell.C2.name === "Следопыты востока" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellC3}>
                        <button 
                            className={occupiedCell.C3.name === "Лучники запада" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitEmpireWestArcherBackChoice 
                                : occupiedCell.C3.name === "Лучники запада" && occupiedCell.C3.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.C3.name === "Мечники запада" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitEmpireWestSwordsmanBackChoice 
                                : occupiedCell.C3.name === "Мечники запада" && occupiedCell.C3.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.C3.name === "Лучники востока" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitEmpireEastArcherBackChoice 
                                : occupiedCell.C3.name === "Лучники востока" && occupiedCell.C3.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.C3.name === "Следопыты востока" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitEmpireEastPathfinderBackChoice 
                                : occupiedCell.C3.name === "Следопыты востока" && occupiedCell.C3.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.C3.occupied === true && occupiedCell.C3.health === 0 ? classes.unitEmpireDeath : classes.emptyСell}
                            id={"C3"} 
                            onClick={() => {handleChoiceCellAttack("C3")}} 
                            disabled={occupiedCell.C3.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C3.health <= 0}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCell.C3.health} max={ occupiedCell.C3.name === "Лучники запада" ? 80 : occupiedCell.C3.name === "Мечники запада" ? 130 : occupiedCell.C3.name === "Лучники востока" ? 150 : occupiedCell.C3.name === "Следопыты востока" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellC4}>
                        <button 
                            className={occupiedCell.C4.name === "Лучники запада" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitEmpireWestArcherBackChoice 
                                : occupiedCell.C4.name === "Лучники запада" && occupiedCell.C4.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.C4.name === "Мечники запада" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitEmpireWestSwordsmanBackChoice 
                                : occupiedCell.C4.name === "Мечники запада" && occupiedCell.C4.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.C4.name === "Лучники востока" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitEmpireEastArcherBackChoice 
                                : occupiedCell.C4.name === "Лучники востока" && occupiedCell.C4.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.C4.name === "Следопыты востока" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitEmpireEastPathfinderBackChoice 
                                : occupiedCell.C4.name === "Следопыты востока" && occupiedCell.C4.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.C4.occupied === true && occupiedCell.C4.health === 0 ? classes.unitEmpireDeath : classes.emptyСell}
                            id={"C4"} 
                            onClick={() => {handleChoiceCellAttack("C4")}} 
                            disabled={occupiedCell.C4.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C4.health <= 0}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCell.C4.health} max={ occupiedCell.C4.name === "Лучники запада" ? 80 : occupiedCell.C4.name === "Мечники запада" ? 130 : occupiedCell.C4.name === "Лучники востока" ? 150 : occupiedCell.C4.name === "Следопыты востока" ? 250 : 0 }></progress>
                        </button>
                    </div>
                    
                </div>}

                {buttonStateGame.stateOverallButton && <div>

                    <div className={classes.cellD1}>
                        <button 
                            className={occupiedCell.D1.name === "Лучники запада" && occupiedCell.D1.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.D1.name === "Мечники запада" && occupiedCell.D1.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.D1.name === "Лучники востока" && occupiedCell.D1.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.D1.name === "Следопыты востока" && occupiedCell.D1.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.D1.occupied === true && occupiedCell.D1.health === 0 ? classes.unitEmpireDeath : classes.cell}
                            id={"D1"} 
                            onClick={() => handleTroopDeployment("D1")} 
                            disabled={occupiedCell.D1.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD2}>
                        <button 
                            className={occupiedCell.D2.name === "Лучники запада" && occupiedCell.D2.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.D2.name === "Мечники запада" && occupiedCell.D2.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.D2.name === "Лучники востока" && occupiedCell.D2.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.D2.name === "Следопыты востока" && occupiedCell.D2.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.D2.occupied === true && occupiedCell.D2.health === 0 ? classes.unitEmpireDeath : classes.cell}
                            id={"D2"} 
                            onClick={() => handleTroopDeployment("D2")} 
                            disabled={occupiedCell.D2.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD3}>
                        <button 
                            className={occupiedCell.D3.name === "Лучники запада" && occupiedCell.D3.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.D3.name === "Мечники запада" && occupiedCell.D3.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.D3.name === "Лучники востока" && occupiedCell.D3.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.D3.name === "Следопыты востока" && occupiedCell.D3.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.D3.occupied === true && occupiedCell.D3.health === 0 ? classes.unitEmpireDeath : classes.cell}
                            id={"D3"} 
                            onClick={() => handleTroopDeployment("D3")} 
                            disabled={occupiedCell.D3.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD4}>
                        <button 
                            className={occupiedCell.D4.name === "Лучники запада" && occupiedCell.D4.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.D4.name === "Мечники запада" && occupiedCell.D4.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.D4.name === "Лучники востока" && occupiedCell.D4.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.D4.name === "Следопыты востока" && occupiedCell.D4.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.D4.occupied === true && occupiedCell.D4.health === 0 ? classes.unitEmpireDeath : classes.cell}
                            id={"D4"} 
                            onClick={() => handleTroopDeployment("D4")} 
                            disabled={occupiedCell.D4.occupied === true}>+
                        </button>
                    </div>

                </div>}

                {showGameField && <div>

                    <div className={classes.cellD1}>
                        <button 
                            className={occupiedCell.D1.name === "Лучники запада" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitEmpireWestArcherBackChoice 
                                : occupiedCell.D1.name === "Лучники запада" && occupiedCell.D1.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.D1.name === "Мечники запада" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitEmpireWestSwordsmanBackChoice 
                                : occupiedCell.D1.name === "Мечники запада" && occupiedCell.D1.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.D1.name === "Лучники востока" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitEmpireEastArcherBackChoice 
                                : occupiedCell.D1.name === "Лучники востока" && occupiedCell.D1.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.D1.name === "Следопыты востока" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitEmpireEastPathfinderBackChoice 
                                : occupiedCell.D1.name === "Следопыты востока" && occupiedCell.D1.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.D1.occupied === true && occupiedCell.D1.health === 0 ? classes.unitEmpireDeath : classes.emptyСell}
                            id={"D1"} 
                            onClick={() => {handleChoiceCellAttack("D1")}} 
                            disabled={occupiedCell.D1.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D1.health <= 0}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCell.D1.health} max={ occupiedCell.D1.name === "Лучники запада" ? 80 : occupiedCell.D1.name === "Мечники запада" ? 130 : occupiedCell.D1.name === "Лучники востока" ? 150 : occupiedCell.D1.name === "Следопыты востока" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellD2}>
                        <button 
                            className={occupiedCell.D2.name === "Лучники запада" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitEmpireWestArcherBackChoice 
                                : occupiedCell.D2.name === "Лучники запада" && occupiedCell.D2.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.D2.name === "Мечники запада" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitEmpireWestSwordsmanBackChoice 
                                : occupiedCell.D2.name === "Мечники запада" && occupiedCell.D2.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.D2.name === "Лучники востока" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitEmpireEastArcherBackChoice 
                                : occupiedCell.D2.name === "Лучники востока" && occupiedCell.D2.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.D2.name === "Следопыты востока" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitEmpireEastPathfinderBackChoice 
                                : occupiedCell.D2.name === "Следопыты востока" && occupiedCell.D2.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.D2.occupied === true && occupiedCell.D2.health === 0 ? classes.unitEmpireDeath : classes.emptyСell}
                            id={"D2"} 
                            onClick={() => {handleChoiceCellAttack("D2")}} 
                            disabled={occupiedCell.D2.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D2.health <= 0}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCell.D2.health} max={ occupiedCell.D2.name === "Лучники запада" ? 80 : occupiedCell.D2.name === "Мечники запада" ? 130 : occupiedCell.D2.name === "Лучники востока" ? 150 : occupiedCell.D2.name === "Следопыты востока" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellD3}>
                        <button 
                            className={occupiedCell.D3.name === "Лучники запада" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitEmpireWestArcherBackChoice 
                                : occupiedCell.D3.name === "Лучники запада" && occupiedCell.D3.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.D3.name === "Мечники запада" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitEmpireWestSwordsmanBackChoice 
                                : occupiedCell.D3.name === "Мечники запада" && occupiedCell.D3.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.D3.name === "Лучники востока" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitEmpireEastArcherBackChoice 
                                : occupiedCell.D3.name === "Лучники востока" && occupiedCell.D3.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.D3.name === "Следопыты востока" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitEmpireEastPathfinderBackChoice 
                                : occupiedCell.D3.name === "Следопыты востока" && occupiedCell.D3.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.D3.occupied === true && occupiedCell.D3.health === 0 ? classes.unitEmpireDeath : classes.emptyСell}
                            id={"D3"} 
                            onClick={() => {handleChoiceCellAttack("D3")}} 
                            disabled={occupiedCell.D3.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D3.health <= 0}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCell.D3.health} max={ occupiedCell.D3.name === "Лучники запада" ? 80 : occupiedCell.D3.name === "Мечники запада" ? 130 : occupiedCell.D3.name === "Лучники востока" ? 150 : occupiedCell.D3.name === "Следопыты востока" ? 250 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellD4}>
                        <button 
                            className={occupiedCell.D4.name === "Лучники запада" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitEmpireWestArcherBackChoice 
                                : occupiedCell.D4.name === "Лучники запада" && occupiedCell.D4.health !== 0 ? classes.unitEmpireWestArcherBack 
                                : occupiedCell.D4.name === "Мечники запада" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitEmpireWestSwordsmanBackChoice 
                                : occupiedCell.D4.name === "Мечники запада" && occupiedCell.D4.health !== 0 ? classes.unitEmpireWestSwordsmanBack 
                                : occupiedCell.D4.name === "Лучники востока" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitEmpireEastArcherBackChoice 
                                : occupiedCell.D4.name === "Лучники востока" && occupiedCell.D4.health !== 0 ? classes.unitEmpireEastArcherBack 
                                : occupiedCell.D4.name === "Следопыты востока" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitEmpireEastPathfinderBackChoice 
                                : occupiedCell.D4.name === "Следопыты востока" && occupiedCell.D4.health !== 0 ? classes.unitEmpireEastPathfinderBack 
                                : occupiedCell.D4.occupied === true && occupiedCell.D4.health === 0 ? classes.unitEmpireDeath : classes.emptyСell}
                            id={"D4"} 
                            onClick={() => {handleChoiceCellAttack("D4")}} 
                            disabled={occupiedCell.D4.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D4.health <= 0}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCell.D4.health} max={ occupiedCell.D4.name === "Лучники запада" ? 80 : occupiedCell.D4.name === "Мечники запада" ? 130 : occupiedCell.D4.name === "Лучники востока" ? 150 : occupiedCell.D4.name === "Следопыты востока" ? 250 : 0 }></progress>
                        </button>  
                    </div>
                
                </div>}
                    
            </div>
            
        </div>
    )
}

