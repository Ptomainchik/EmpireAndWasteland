import classes from "../../Styles/Games.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useEffect, useState } from "react";
import Avatar from "../../../Images/AngalsWastelandsImage/AngalAvatar.jpg";
import Card from "../../../Images/AngalsWastelandsImage/CoatOfArmsOfWasteland.webp";
import CardAngalHunter from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalHunter.jpg";
import CardAngalJavelin from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalJavelin.jpg";
import WestArcher from "../../../Images/ImpireMarahImage/ImageImpireCardWestArcher.jpg";
import { LoseMessage } from "./StoryMessages/LoseMessage";
import { IntroWastelandGameLvl1 } from "./StoryMessages/Lvl1/IntroWastelandGameLvl1";
import { MessageHalfHealthLvl1 } from "./StoryMessages/Lvl1/MessageHalfHealthLvl1";
import { OutroWastelandGameLvl1 } from "./StoryMessages/Lvl1/OutroWastelandGameLvl1";
import { useGameResources } from "./HookForResources/HookResources";

export const GameWastelandLvl1 = () => {
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
    const [showPointerSkills, setShowPointerSkills] = useState({
                showA1:false,
                showA2:false,
                showA3:false,
                showA4:false,
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
        showStateSkillsHunter: false,
        showStateSkillsJavelin: false,
        stateHunterQuantitySkills: true,
        stateJavelinQuantitySkills: true,
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
                health: 80,
                attack: 12,
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

        if (id === "S1") {
            setShowPointerSkills(prev => ({...prev, showSkillHunter: true}));
        }
        else if (id === "S2") {
            setShowPointerSkills(prev => ({...prev, showSkillJavelin: true}));
        }
    }

    function handlePointerPoultice (id: string) {
        if (id === "SP") {
            setShowPointerSkills(prev => ({...prev, showSkillPoultice: true}));
        }
    }

    function handlePointerTargetsSkillsFalse () {
        setShowPointerSkills(prev => ({...prev,
            showA1: false,
            showA2: false,
            showA3: false,
            showA4: false,
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
                health: prev.C2.health - 5
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
                health: prev.C3.health - 5
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
                health: prev.C4.health - 5
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
                health: prev.C1.health - 5
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
                health: prev.C2.health - 5
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
                health: prev.C3.health - 5
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
                health: prev.C4.health - 5
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
                health: prev.C1.health - 5
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
                health: prev.C2.health - 5
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
                health: prev.C3.health - 5
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
                health: prev.C4.health - 5
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
                health: prev.C1.health - 5
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
                health: prev.C2.health - 5
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
                health: prev.C3.health - 5
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
                health: prev.C4.health - 5
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
                health: prev.D2.health - 5
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
                health: prev.D3.health - 5
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
                health: prev.D4.health - 5
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
                health: prev.D1.health - 5
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
                health: prev.D2.health - 5
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
                health: prev.D3.health - 5
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
                health: prev.D4.health - 5
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
                health: prev.D1.health - 5
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
                health: prev.D2.health - 5
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
                health: prev.D3.health - 5
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
                health: prev.D4.health - 5
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
                health: prev.D1.health - 5
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
                health: prev.D2.health - 5
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
                health: prev.D3.health - 5
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
                health: prev.D4.health - 5
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
                            let nextQueue = currentQueue === 4 ? 1 : currentQueue + 1;
                            let attempts = 0;
                            
                            while (attempts < 4) {
                                const nextAttackerKey = `A${nextQueue}` as keyof typeof currentOpponents;
                                if (currentOpponents[nextAttackerKey].health > 0) {
                                    return nextQueue;
                                }
                                nextQueue = nextQueue === 4 ? 1 : nextQueue + 1;
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
                        let nextQueue = currentQueue === 4 ? 1 : currentQueue + 1;
                        let attempts = 0;
                        
                        while (attempts < 4) {
                            const nextAttackerKey = `A${nextQueue}` as keyof typeof currentOpponents;
                            if (currentOpponents[nextAttackerKey].health > 0) {
                                return nextQueue;
                            }
                            nextQueue = nextQueue === 4 ? 1 : nextQueue + 1;
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
                    let nextQueue = currentQueue === 4 ? 1 : currentQueue + 1;
                    let attempts = 0;
                    
                    while (attempts < 4) {
                        const nextAttackerKey = `A${nextQueue}` as keyof typeof currentOpponents;
                        if (currentOpponents[nextAttackerKey].health > 0) {
                            return nextQueue;
                        }
                        nextQueue = nextQueue === 4 ? 1 : nextQueue + 1;
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

        if (stateSkillsSoldiersWasteland.stateSkillsHunter === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, stateHunterQuantitySkills : false}));
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsHunter: false}));
        }
        setShowPointerSkills(prev => ({...prev, showA1: false, showA2: false, showA3: false, showA4: false, showSkillHunter: false}));
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

        if (stateSkillsSoldiersWasteland.stateSkillsJavelin === true) {
            setStateSkillsSoldiersWasteland(prev => ({...prev, stateJavelinQuantitySkills : false}));
            setStateSkillsSoldiersWasteland(prev => ({...prev, showStateSkillsJavelin: false}));
        }
        setShowPointerSkills(prev => ({...prev, showA1: false, showA2: false, showA3: false, showA4: false, showSkillJavelin: false}));
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
        if (stateSkillsHero.poultice !== 0){
            setStateSkillsHero(prev => ({...prev, showPoultice: true}))
        }
    };

    useEffect(() => {
        if(occupiedCellOpponent.A1.health + occupiedCellOpponent.A2.health + occupiedCellOpponent.A3.health + occupiedCellOpponent.A4.health <= 160 && showStoryMessages.countForMessage === 0) {
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
        if(occupiedCellOpponent.A1.health + occupiedCellOpponent.A2.health + occupiedCellOpponent.A3.health + occupiedCellOpponent.A4.health <= 0 && showStoryMessages.countForMessage === 1) {
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
                    if (reserve.wastelandHunter === 0 && reserve.wastelandJavelin === 0 && reserve.wastelandMaces === 0 && reserve.wastelandAngalit === 0) {
                        setShowButtonPoultice(false);
                    }
                    else {
                        setShowButtonPoultice(true);
                    }
    }, [reserve]);
    

    return (
        <div className={classes.gamePageWasteland}>
            
            <div className={classes.topbar} style={{backgroundColor: "darkolivegreen", backgroundImage: "linear-gradient(180deg, black -20%, darkolivegreen 47%, darkolivegreen 53%, black 120%)"}}>
                <HomeButton/>Игра<BackButton/>
            </div>
            {showStoryMessages.intro && <IntroWastelandGameLvl1 setShowStoryMessages={setShowStoryMessages}/>}

            {showStoryMessages.halfHealth && <MessageHalfHealthLvl1 setShowStoryMessages={setShowStoryMessages}/>}

            {showStoryMessages.outro && <OutroWastelandGameLvl1 setShowStoryMessages={setShowStoryMessages} resources={resources} setResources={setResources}/>}

            {showStoryMessages.lose && <LoseMessage/>}

            <div className={classes.skillsBlockLeft}>

                {showPointerSkills.showSkillPoultice && <div className={classes.cardWastelandTop}>
                    <p className={classes.textCard}>
                        Припарка - восстанавливает всё здоровье выбранного юнита.
                    </p>
                </div>}
                                                
                {showPointerSkills.showSkillHunter && <div className={classes.cardWastelandTop}>
                    <p className={classes.textCard}>
                        Разделка - атака охотников, наносящая средний урон юниту противника.
                    </p>
                </div>}
                                                
                {showPointerSkills.showSkillJavelin && <div className={classes.cardWastelandTop}>
                    <p className={classes.textCard}>
                        Бросок - атака метателей, наносящая средний урон юниту противника и уменьшающая защиту цели.
                    </p>
                </div>}
                                
                {occupiedCell.C1.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C1.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C1.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.C1.name === "Охотники" ? 80 : occupiedCell.C1.name === "Метатели" ? 100 : 0 } value={occupiedCell.C1.health}></progress>
                    <p>{occupiedCell.C1.name}</p>
                    <p>Атака:  {occupiedCell.C1.attack}</p>
                    <p>Защита: {occupiedCell.C1.defense}</p>
                    <p>Бафф: {occupiedCell.C1.name === "Охотники" ? "Нет"
                        : occupiedCell.C1.name === "Метатели" ? "Нет"
                        : ""}
                    </p>
                </div>}

                {occupiedCell.C2.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C2.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C2.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.C2.name === "Охотники" ? 80 : occupiedCell.C2.name === "Метатели" ? 100 : 0 } value={occupiedCell.C2.health}></progress>
                    <p>{occupiedCell.C2.name}</p>
                    <p>Атака:  {occupiedCell.C2.attack}</p>
                    <p>Защита: {occupiedCell.C2.defense}</p>
                    <p>Бафф: {occupiedCell.C2.name === "Охотники" ? "Нет"
                        : occupiedCell.C2.name === "Метатели" ? "Нет"
                        : ""}
                    </p>
                </div>}

                {occupiedCell.C3.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C3.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C3.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.C3.name === "Охотники" ? 80 : occupiedCell.C3.name === "Метатели" ? 100 : 0 } value={occupiedCell.C3.health}></progress>
                    <p>{occupiedCell.C3.name}</p>
                    <p>Атака:  {occupiedCell.C3.attack}</p>
                    <p>Защита: {occupiedCell.C3.defense}</p>
                    <p>Бафф: {occupiedCell.C3.name === "Охотники" ? "Нет"
                        : occupiedCell.C3.name === "Метатели" ? "Нет"
                        : ""}
                    </p>
                </div>}

                {occupiedCell.C4.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.C4.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.C4.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.C4.name === "Охотники" ? 80 : occupiedCell.C4.name === "Метатели" ? 100 : 0 } value={occupiedCell.C4.health}></progress>
                    <p>{occupiedCell.C4.name}</p>
                    <p>Атака:  {occupiedCell.C4.attack}</p>
                    <p>Защита: {occupiedCell.C4.defense}</p>
                    <p>Бафф: {occupiedCell.C4.name === "Охотники" ? "Нет"
                        : occupiedCell.C4.name === "Метатели" ? "Нет"
                        : ""}
                    </p>
                </div>}

                {occupiedCell.D1.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D1.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D1.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.D1.name === "Охотники" ? 80 : occupiedCell.D1.name === "Метатели" ? 100 : 0 } value={occupiedCell.D1.health}></progress>
                    <p>{occupiedCell.D1.name}</p>
                    <p>Атака:  {occupiedCell.D1.attack}</p>
                    <p>Защита: {occupiedCell.D1.defense}</p>
                    <p>Бафф: {occupiedCell.D1.name === "Охотники" ? "Нет"
                        : occupiedCell.D1.name === "Метатели" ? "Нет"
                        : ""}
                    </p>
                </div>}

                {occupiedCell.D2.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D2.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D2.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.D2.name === "Охотники" ? 80 : occupiedCell.D2.name === "Метатели" ? 100 : 0 } value={occupiedCell.D2.health}></progress>
                    <p>{occupiedCell.D2.name}</p>
                    <p>Атака:  {occupiedCell.D2.attack}</p>
                    <p>Защита: {occupiedCell.D2.defense}</p>
                    <p>Бафф: {occupiedCell.D2.name === "Охотники" ? "Нет"
                        : occupiedCell.D2.name === "Метатели" ? "Нет"
                        : ""}
                    </p>
                </div>}

                {occupiedCell.D3.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D3.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D3.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.D3.name === "Охотники" ? 80 : occupiedCell.D3.name === "Метатели" ? 100 : 0 } value={occupiedCell.D3.health}></progress>
                    <p>{occupiedCell.D3.name}</p>
                    <p>Атака:  {occupiedCell.D3.attack}</p>
                    <p>Защита: {occupiedCell.D3.defense}</p>
                    <p>Бафф: {occupiedCell.D3.name === "Охотники" ? "Нет"
                        : occupiedCell.D3.name === "Метатели" ? "Нет"
                        : ""}
                    </p>
                </div>}

                {occupiedCell.D4.showCard && <div className={classes.cardWastelandBottom}>
                    <img className={classes.imageCard} src={occupiedCell.D4.classWastlelandSoldier === 1 
                    ? CardAngalHunter
                    : occupiedCell.D4.classWastlelandSoldier === 2 
                    ? CardAngalJavelin
                    : Card} alt="Card" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max={ occupiedCell.D4.name === "Охотники" ? 80 : occupiedCell.D4.name === "Метатели" ? 100 : 0 } value={occupiedCell.D4.health}></progress>
                    <p>{occupiedCell.D4.name}</p>
                    <p>Атака:  {occupiedCell.D4.attack}</p>
                    <p>Защита: {occupiedCell.D4.defense}</p>
                    <p>Бафф: {occupiedCell.D4.name === "Охотники" ? "Нет"
                        : occupiedCell.D4.name === "Метатели" ? "Нет"
                        : ""}
                    </p>
                </div>}

                {occupiedCellOpponent.A1.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={WestArcher} alt="WestArcher" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="80" value={occupiedCellOpponent.A1.health}></progress>
                    <p>{occupiedCellOpponent.A1.name}</p>
                    <p>Атака:  {occupiedCellOpponent.A1.attack}</p>
                    <p>Защита: {occupiedCellOpponent.A1.defense}</p>
                    <p>Бафф: {occupiedCellOpponent.A1.buff}</p>
                </div>}

                {occupiedCellOpponent.A2.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={WestArcher} alt="WestArcher" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="80" value={occupiedCellOpponent.A2.health}></progress>
                    <p>{occupiedCellOpponent.A2.name}</p>
                    <p>Атака:  {occupiedCellOpponent.A2.attack}</p>
                    <p>Защита: {occupiedCellOpponent.A2.defense}</p>
                    <p>Бафф: {occupiedCellOpponent.A2.buff}</p>
                </div>}

                {occupiedCellOpponent.A3.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={WestArcher} alt="WestArcher" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="80" value={occupiedCellOpponent.A3.health}></progress>
                    <p>{occupiedCellOpponent.A3.name}</p>
                    <p>Атака:  {occupiedCellOpponent.A3.attack}</p>
                    <p>Защита: {occupiedCellOpponent.A3.defense}</p>
                    <p>Бафф: {occupiedCellOpponent.A3.buff}</p>
                </div>}

                {occupiedCellOpponent.A4.showCard && <div className={classes.cardEmpireTop}>
                    <img className={classes.imageCard} src={WestArcher} alt="WestArcher" draggable="false"/>
                    <progress className={classes.healthScaleEmpire} max="80" value={occupiedCellOpponent.A4.health}></progress>
                    <p>{occupiedCellOpponent.A4.name}</p>
                    <p>Атака:  {occupiedCellOpponent.A4.attack}</p>
                    <p>Защита: {occupiedCellOpponent.A4.defense}</p>
                    <p>Бафф: {occupiedCellOpponent.A4.buff}</p>
                </div>}

            </div>

                {showShop && <div className={classes.shop}>
                    
                    <button className={classes.hunterBuy} onClick={handleBuyHunter} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitWasteland}>Охотники: {reserve.wastelandHunter}</p> <p className={classes.titleBuyUnitWasteland}>Цена: 40</p> </button>
                    
                    <button className={classes.javelinBuy} onClick={handleBuyJavelin} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitWasteland}>Метатели: {reserve.wastelandJavelin}</p> <p className={classes.titleBuyUnitWasteland}>Цена: 70</p> </button>
                    
                    {showButtonPoultice && <button className={classes.poulticeBuyWasteland} onClick={handleBuyPoultice} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnitWasteland}>Припарки: {stateSkillsHero.poultice}</p> <p className={classes.titleBuyUnitWasteland}>Цена: 50</p> </button>}

                    <h1>GOLD:{resources}</h1>

                    <button className={classes.closeButton} onClick={handleCloseShop} disabled={reserve.wastelandHunter + reserve.wastelandJavelin + reserve.wastelandMaces + reserve.wastelandAngalit === 0}>Готово</button>
                    
                </div>}

            <div className={classes.skillsBlockRight}>
                {buttonStateGame.stateShopButton && <button className={classes.shopButtonWasteland} onClick={handleOpenShop}>Магазин</button>}
                {buttonStateGame.stateStartButton && <button className={classes.buttonStartGameWasteland} onClick={handleStartGame}>Старт</button>}
                {buttonStateGame.stateOverallButton && <button className={classes.angalsButtonSkillsHunters} onClick={handleRequestForHunterReserves} disabled={stateStyleSoldier === 2 || stateStyleSoldier === 3 || stateStyleSoldier === 4 ||  stateButtonSoldiers.wastelandButtonHunter === true || reserve.wastelandHunter === 0}>Охотники: {reserve.wastelandHunter}</button>} 
                {buttonStateGame.stateOverallButton && <button className={classes.angalsButtonSkillsJavelin} onClick={handleRequestForJavelinReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 3 || stateStyleSoldier === 4 || stateButtonSoldiers.wastelandButtonJavelin === true || reserve.wastelandJavelin === 0}>Метатели: {reserve.wastelandJavelin}</button>}
               
                {showSkillsSoldierWasteland && <div>
                                                
                    <img className={classes.avatarHeroWasteland} src={Avatar} alt="Avatar" draggable="false" />
                                                
                    {stateSkillsHero.showPoultice && <button id="SP" className={classes.buttonSkillPoulticeWasteland} onClick={handleSkillPoultice} onMouseEnter={() => handlePointerPoultice("SP")}
                            onMouseLeave={handlePointerTargetsSkillsFalse}>Припарка: {stateSkillsHero.poultice}</button>}
                                                                      
                    {stateSkillsSoldiersWasteland.showStateSkillsHunter && <button id="S1" className={classes.buttonSkillHunter} onClick={handleSkillHunter} onMouseEnter={() => handlePointerOneTargetSkill("S1")}
                            onMouseLeave={handlePointerTargetsSkillsFalse}>Разделка</button>}
                                                
                    {stateSkillsSoldiersWasteland.showStateSkillsJavelin && <button id="S2" className={classes.buttonSkillJavelin} onClick={handleSkillJavelin} onMouseEnter={() => handlePointerOneTargetSkill("S2")}
                            onMouseLeave={handlePointerTargetsSkillsFalse}>Бросок</button>}
                   
                </div>}
            </div>

            <div className={classes.blockUnits}>

                <div className={classes.blockFlex1}>

                    <div className={classes.cellA1}>
                        <button className={occupiedCellOpponent.A1.health > 0 && attackQueue === 1 ? classes.unitEmpireWestArcherChoice 
                        : occupiedCellOpponent.A1.health <= 0 && attackQueue === 1 ? classes.unitEmpireDeath 
                        : occupiedCellOpponent.A1.health <= 0 ? classes.unitEmpireDeath 
                        : classes.unitEmpireWestArcher} id={"A1"} onClick={() => {handleAttack("A1")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A1: {...prev.A1, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A1: {...prev.A1,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A1.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCellOpponent.A1.health} max="80"></progress>
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
                        : classes.unitEmpireWestArcher}id={"A3"} onClick={() => {handleAttack("A3")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A3.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCellOpponent.A3.health} max="80"></progress>
                        </button>
                        {showPointerSkills.showA3 && <div className={classes.pointer} style={{background: "brown"}}></div>}
                    </div>

                    <div className={classes.cellA4}>
                        <button className={occupiedCellOpponent.A4.health > 0 && attackQueue === 4 ? classes.unitEmpireWestArcherChoice 
                        : occupiedCellOpponent.A4.health <= 0 && attackQueue === 4 ? classes.unitEmpireDeath 
                        : occupiedCellOpponent.A4.health <= 0 ? classes.unitEmpireDeath 
                        : classes.unitEmpireWestArcher} id={"A4"} onClick={() => {handleAttack("A4")}} 
                            onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4, showCard: true}}))}
                            onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4,showCard: false}}))} 
                            disabled={stateButtonsSkills === true || occupiedCellOpponent.A4.health <= 0 || buttonStateGame.stateAttackButton === false || buttonStateGame.stateFixStartButton === false}>
                        <progress className={classes.healthScaleEmpireUnit} value={occupiedCellOpponent.A4.health} max="80"></progress>
                        </button>
                        {showPointerSkills.showA4 && <div className={classes.pointer} style={{background: "brown"}}></div>}
                    </div>

                </div>

                {buttonStateGame.stateOverallButton && <div>

                    <div className={classes.cellC1}>
                        <button 
                            className={occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.C1.occupied === true && occupiedCell.C1.health === 0 ? classes.unitWastelandDeath : classes.cell} 
                            id={"C1"} 
                            onClick={() => handleTroopDeployment("C1")} 
                            disabled={occupiedCell.C1.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC2}>
                        <button 
                            className={occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.C2.occupied === true && occupiedCell.C2.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"C2"} 
                            onClick={() => handleTroopDeployment("C2")} 
                            disabled={occupiedCell.C2.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC3}>
                        <button 
                            className={occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.C3.occupied === true && occupiedCell.C3.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"C3"} 
                            onClick={() => handleTroopDeployment("C3")} 
                            disabled={occupiedCell.C3.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellC4}>
                        <button 
                            className={occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.C4.occupied === true && occupiedCell.C4.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"C4"} 
                            onClick={() => handleTroopDeployment("C4")} 
                            disabled={occupiedCell.C4.occupied === true}>+
                        </button>
                    </div>

                </div>}

                {showGameField && <div>

                    <div className={classes.cellC1}>
                        <button 
                            className={occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitWastelandHunterBackChoice : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitWastelandJavelinBackChoice : occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.C1.occupied === true && occupiedCell.C1.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C1"} 
                            onClick={() => {handleChoiceCellAttack("C1")}} 
                            disabled={occupiedCell.C1.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C1.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C1.health} max={ occupiedCell.C1.name === "Охотники" ? 80 : occupiedCell.C1.name === "Метатели" ? 100 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellC2}>
                        <button 
                            className={occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitWastelandHunterBackChoice : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitWastelandJavelinBackChoice : occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.C2.occupied === true && occupiedCell.C2.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C2"} 
                            onClick={() => {handleChoiceCellAttack("C2")}} 
                            disabled={occupiedCell.C2.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C2.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C2.health} max={ occupiedCell.C2.name === "Охотники" ? 80 : occupiedCell.C2.name === "Метатели" ? 100 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellC3}>
                        <button 
                            className={occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitWastelandHunterBackChoice : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitWastelandJavelinBackChoice : occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.C3.occupied === true && occupiedCell.C3.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C3"} 
                            onClick={() => {handleChoiceCellAttack("C3")}} 
                            disabled={occupiedCell.C3.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C3.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C3.health} max={ occupiedCell.C3.name === "Охотники" ? 80 : occupiedCell.C3.name === "Метатели" ? 100 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellC4}>
                        <button 
                            className={occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitWastelandHunterBackChoice : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitWastelandJavelinBackChoice : occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.C4.occupied === true && occupiedCell.C4.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"C4"} 
                            onClick={() => {handleChoiceCellAttack("C4")}} 
                            disabled={occupiedCell.C4.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C4.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.C4.health} max={ occupiedCell.C4.name === "Охотники" ? 80 : occupiedCell.C4.name === "Метатели" ? 100 : 0 }></progress>
                        </button>
                    </div>
                    
                </div>}

                {buttonStateGame.stateOverallButton && <div>

                    <div className={classes.cellD1}>
                        <button 
                            className={occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.D1.occupied === true && occupiedCell.D1.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"D1"} 
                            onClick={() => handleTroopDeployment("D1")} 
                            disabled={occupiedCell.D1.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD2}>
                        <button 
                            className={occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.D2.occupied === true && occupiedCell.D2.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"D2"} 
                            onClick={() => handleTroopDeployment("D2")} 
                            disabled={occupiedCell.D2.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD3}>
                        <button 
                            className={occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.D3.occupied === true && occupiedCell.D3.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"D3"} 
                            onClick={() => handleTroopDeployment("D3")} 
                            disabled={occupiedCell.D3.occupied === true}>+
                        </button>
                    </div>

                    <div className={classes.cellD4}>
                        <button 
                            className={occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.D4.occupied === true && occupiedCell.D4.health === 0 ? classes.unitWastelandDeath : classes.cell}
                            id={"D4"} 
                            onClick={() => handleTroopDeployment("D4")} 
                            disabled={occupiedCell.D4.occupied === true}>+
                        </button>
                    </div>

                </div>}

                {showGameField && <div>

                    <div className={classes.cellD1}>
                        <button 
                            className={occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitWastelandHunterBackChoice : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitWastelandJavelinBackChoice : occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.D1.occupied === true && occupiedCell.D1.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D1"} 
                            onClick={() => {handleChoiceCellAttack("D1")}} 
                            disabled={occupiedCell.D1.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D1.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D1.health} max={ occupiedCell.D1.name === "Охотники" ? 80 : occupiedCell.D1.name === "Метатели" ? 100 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellD2}>
                        <button 
                            className={occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitWastelandHunterBackChoice : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitWastelandJavelinBackChoice : occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.D2.occupied === true && occupiedCell.D2.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D2"} 
                            onClick={() => {handleChoiceCellAttack("D2")}} 
                            disabled={occupiedCell.D2.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D2.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D2.health} max={ occupiedCell.D2.name === "Охотники" ? 80 : occupiedCell.D2.name === "Метатели" ? 100 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellD3}>
                        <button 
                            className={occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitWastelandHunterBackChoice : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitWastelandJavelinBackChoice : occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.D3.occupied === true && occupiedCell.D3.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D3"} 
                            onClick={() => {handleChoiceCellAttack("D3")}} 
                            disabled={occupiedCell.D3.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D3.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D3.health} max={ occupiedCell.D3.name === "Охотники" ? 80 : occupiedCell.D3.name === "Метатели" ? 100 : 0 }></progress>
                        </button>
                    </div>

                    <div className={classes.cellD4}>
                        <button 
                            className={occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitWastelandHunterBackChoice : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitWastelandJavelinBackChoice : occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 ? classes.unitWastelandHunterBack : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 ? classes.unitWastelandJavelinBack : occupiedCell.D4.occupied === true && occupiedCell.D4.health === 0 ? classes.unitWastelandDeath : classes.emptyСell}
                            id={"D4"} 
                            onClick={() => {handleChoiceCellAttack("D4")}} 
                            disabled={occupiedCell.D4.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D4.health <= 0}>
                        <progress className={classes.healthScaleWastelandUnit} value={occupiedCell.D4.health} max={ occupiedCell.D4.name === "Охотники" ? 80 : occupiedCell.D4.name === "Метатели" ? 100 : 0 }></progress>
                        </button>  
                    </div>
                
                
                </div>}
                    
            </div>
            
        </div>
    )
}