import classes from "../../Styles/Games.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useState } from "react";
import Images from "../../../Images/AngalsWastelandsImage/CoatOfArmsOfWasteland.webp";
import Images1 from "../../../Images/ImpireMarahImage/CoatOfArmsEmpire.webp";

export const GameWasteland = () => {
    const [resources, setResources] = useState(2250);
    const [showShop, setShowShop] = useState(false);
    const [reserve, setReserve] = useState({
        wastelandHunter: 0,
        wastelandJavelin: 0,
        wastelandMaces: 0,
        wastelandAngalit: 0,
    });

    
    const [stateChoiceButton, setStateChoiceButton] = useState(true);
    const [showGameField, setShowGameField] = useState(false);
    const [buttonStartGame, setButtonStartGame] = useState(true);
    const [occupiedCellOpponent, setOccupiedCellOpponent] = useState({
            A2:{
                name: "Лучники востока",
                occupied: false,
                health: 70,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A3:{
                name: "Лучники востока",
                occupied: false,
                health: 30,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A4:{
                name: "Лучники востока",
                occupied: false,
                health: 30,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A5:{
                name: "Лучники востока",
                occupied: false,
                health: 30,
                attack: 10,
                defense: 3,
                first: true,
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
            },
            C5:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
            },
            C6:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
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
            },
            D5:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
            },
            D6:{
                name: "",
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
            },
           
        }
    );// Не тупи это состояние решение всех наших проблем, просто добавляй всё в обьекты с ключ: значение и дёргай за него. Тут решается всё, ходовка, атаки и хранение данных, attack, defense, health. Пердоль пока пальцы не сотрёшь!!!
    const [roundMoveState, setRoundMoveState] = useState(0);
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

    function handleTroopDeployment(id: string) {
    setStateButtonsSkills(false);
    setStateStyleSoldier(0);
    if(["C1", "C2", "C3", "C4", "C5", "C6", "D1", "D2", "D3", "D4", "D5", "D6"].includes(id) && stateButtonSoldiers.wastelandButtonHunter === true ) {
        
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
                },
        }));
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
                },
        }));
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
                },
        }));
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
                },
        }));
        }
        else if(id === "C5"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C5:{
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                },
        }));
        }
        else if(id === "C6"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C6:{
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                },
        }));
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
                },
        }));
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
                },
        }));
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
                },
        }));
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
                },
        }));
        }
        else if(id === "D5"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D5:{
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                },
        }));
        }
        else if(id === "D6"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D6:{
                    name: "Охотники",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                },
        }));
        }
    }
    else if(["C1", "C2", "C3", "C4", "C5", "C6", "D1", "D2", "D3", "D4", "D5", "D6"].includes(id) && stateButtonSoldiers.wastelandButtonJavelin === true ) {
        
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
            },
        }));
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
                },
        }));
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
                },
        }));
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
                },
        }));
        }
        else if(id === "C5"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C5:{
                    name: "Метатели",
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
        else if(id === "C6"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            C6:{
                    name: "Метатели",
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
        else if(id === "D1"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D1:{
                    name: "Метатели",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
        else if(id === "D2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D2:{
                    name: "Метатели",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
        else if(id === "D3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D3:{
                    name: "Метатели",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
        else if(id === "D4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D4:{
                    name: "Метатели",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
        else if(id === "D5"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D5:{
                    name: "Метатели",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
        else if(id === "D6"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            D6:{
                    name: "Метатели",
                    occupied: true,
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
    }
    else{
        return
    } 
}

   function handleChoiceCellAttack(id: string) {
    setStateChoiceButton(false);
    setOccupiedCell(prev => ({
        ...prev,
        C1: { ...prev.C1, choice: id === "C1", showCard: id === "C1" },
        C2: { ...prev.C2, choice: id === "C2", showCard: id === "C2" },
        C3: { ...prev.C3, choice: id === "C3", showCard: id === "C3" },
        C4: { ...prev.C4, choice: id === "C4", showCard: id === "C4" },
        C5: { ...prev.C5, choice: id === "C5", showCard: id === "C5" },
        C6: { ...prev.C6, choice: id === "C6", showCard: id === "C6" },
        D1: { ...prev.D1, choice: id === "D1", showCard: id === "D1" },
        D2: { ...prev.D2, choice: id === "D2", showCard: id === "D2" },
        D3: { ...prev.D3, choice: id === "D3", showCard: id === "D3" },
        D4: { ...prev.D4, choice: id === "D4", showCard: id === "D4" },
        D5: { ...prev.D5, choice: id === "D5", showCard: id === "D5" },
        D6: { ...prev.D6, choice: id === "D6", showCard: id === "D6" }
    }));
}

    function handleAttack(id:any) {
    setStateChoiceButton(true);
    if (id === "A2" && occupiedCell.C1.choice === true) {
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
                health: prev.A2.health - (occupiedCell.C1.attack - prev.A2.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C2.choice === true) {
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
    else if (id === "A2" && occupiedCell.C3.choice === true) {
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
                health: prev.A2.health - (occupiedCell.C3.attack - prev.A2.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C4.choice === true) {
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
                health: prev.A2.health - (occupiedCell.C4.attack - prev.A2.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C5.choice === true) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C5: {
                ...prev.C5,
                health: prev.C5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.C5.attack - prev.A2.defense - 3),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.C6.choice === true) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C6: {
                ...prev.C6,
                health: prev.C6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.C6.attack - prev.A2.defense - 4),
                first: false
            }
        }));
        handleCounterattack()
    }


    else if (id === "A3" && occupiedCell.C1.choice === true) {
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
                health: prev.A3.health - (occupiedCell.C1.attack - prev.A3.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C2.choice === true) {
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
                health: prev.A3.health - (occupiedCell.C2.attack - prev.A3.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C3.choice === true) {
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
    else if (id === "A3" && occupiedCell.C4.choice === true) {
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
                health: prev.A3.health - (occupiedCell.C4.attack - prev.A3.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C5.choice === true) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C5: {
                ...prev.C5,
                health: prev.C5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.C5.attack - prev.A3.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.C6.choice === true) {
        if(occupiedCellOpponent.A3.first === true){
             setOccupiedCell(prev => ({
            ...prev,
            C6: {
                ...prev.C6,
                health: prev.C6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.C6.attack - prev.A3.defense - 3),
                first: false
            }
        }));
       handleCounterattack()
    }


    else if (id === "A4" && occupiedCell.C1.choice === true) {
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
                health: prev.A4.health - (occupiedCell.C1.attack - prev.A4.defense - 3),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C2.choice === true) {
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
                health: prev.A4.health - (occupiedCell.C2.attack - prev.A4.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C3.choice === true) {
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
                health: prev.A4.health - (occupiedCell.C3.attack - prev.A4.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C4.choice === true) {
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
    else if (id === "A4" && occupiedCell.C5.choice === true) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C5: {
                ...prev.C5,
                health: prev.C5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.C5.attack - prev.A4.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.C6.choice === true) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C6: {
                ...prev.C6,
                health: prev.C6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.C6.attack - prev.A4.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }


    else if (id === "A5" && occupiedCell.C1.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
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
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.C1.attack - prev.A5.defense - 4),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C2.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
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
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.C2.attack - prev.A5.defense - 3),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C3.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
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
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.C3.attack - prev.A5.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C4.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
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
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.C4.attack - prev.A5.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C5.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C5: {
                ...prev.C5,
                health: prev.C5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.C5.attack - prev.A5.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.C6.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            C6: {
                ...prev.C6,
                health: prev.C6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.C6.attack - prev.A5.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }


    if (id === "A2" && occupiedCell.D1.choice === true) {
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
                health: prev.A2.health - (occupiedCell.D1.attack - prev.A2.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D2.choice === true) {
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
    else if (id === "A2" && occupiedCell.D3.choice === true) {
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
                health: prev.A2.health - (occupiedCell.D3.attack - prev.A2.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D4.choice === true) {
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
                health: prev.A2.health - (occupiedCell.D4.attack - prev.A2.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D5.choice === true) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D5: {
                ...prev.D5,
                health: prev.D5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.D5.attack - prev.A2.defense - 3),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A2" && occupiedCell.D6.choice === true) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D6: {
                ...prev.D6,
                health: prev.D6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.D6.attack - prev.A2.defense - 4),
                first: false
            }
        }));
        handleCounterattack()
    }


    else if (id === "A3" && occupiedCell.D1.choice === true) {
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
                health: prev.A3.health - (occupiedCell.D1.attack - prev.A3.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D2.choice === true) {
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
                health: prev.A3.health - (occupiedCell.D2.attack - prev.A3.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D3.choice === true) {
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
    else if (id === "A3" && occupiedCell.D4.choice === true) {
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
                health: prev.A3.health - (occupiedCell.D4.attack - prev.A3.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D5.choice === true) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D5: {
                ...prev.D5,
                health: prev.D5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.D5.attack - prev.A3.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A3" && occupiedCell.D6.choice === true) {
        if(occupiedCellOpponent.A3.first === true){
             setOccupiedCell(prev => ({
            ...prev,
            D6: {
                ...prev.D6,
                health: prev.D6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.D6.attack - prev.A3.defense - 3),
                first: false
            }
        }));
       handleCounterattack()
    }


    else if (id === "A4" && occupiedCell.D1.choice === true) {
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
                health: prev.A4.health - (occupiedCell.D1.attack - prev.A4.defense - 3),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D2.choice === true) {
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
                health: prev.A4.health - (occupiedCell.D2.attack - prev.A4.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D3.choice === true) {
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
                health: prev.A4.health - (occupiedCell.D3.attack - prev.A4.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D4.choice === true) {
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
    else if (id === "A4" && occupiedCell.D5.choice === true) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D5: {
                ...prev.D5,
                health: prev.D5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.D5.attack - prev.A4.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A4" && occupiedCell.D6.choice === true) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D6: {
                ...prev.D6,
                health: prev.D6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.D6.attack - prev.A4.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }


    else if (id === "A5" && occupiedCell.D1.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
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
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.D1.attack - prev.A5.defense - 4),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D2.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
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
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.D2.attack - prev.A5.defense - 3),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D3.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
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
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.D3.attack - prev.A5.defense - 2),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D4.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
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
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.D4.attack - prev.A5.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D5.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D5: {
                ...prev.D5,
                health: prev.D5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.D5.attack - prev.A5.defense),
                first: false
            }
        }));
        handleCounterattack()
    }
    else if (id === "A5" && occupiedCell.D6.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            D6: {
                ...prev.D6,
                health: prev.D6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.D6.attack - prev.A5.defense - 1),
                first: false
            }
        }));
        handleCounterattack()
    }
    
};
    function handleCounterattack(){

    }
// Здесь происходит атака на юнита противника и проверяется приоритет атаки.


    function handleStartGame() {
        setButtonStartGame(false);
        setShowGameField(true);
    };

    const getButtonClass = (id: string) => {
    const soldierType = styledButtons[id];
    if (soldierType === 1) {
       
        return classes.unitWastelandHunter;
    }
    else if (soldierType === 2) {
    
        return classes.unitWastelandJavelin;
    }
    return classes.cell;
};

    return (
        <div className={classes.gamePageWasteland}>
            
            <div className={classes.topbar} style={{backgroundColor: "darkolivegreen", backgroundImage: "linear-gradient(180deg, black -20%, darkolivegreen 47%, darkolivegreen 53%, black 120%)"}}>
                <HomeButton/>Игра<BackButton/>
            </div>
        
            <div className={classes.skillsBlockEmpire}>

                {occupiedCell.C1.showCard && <div className={occupiedCell.C1.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.C1.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.C1.health}></progress>
                    <p>{occupiedCell.C1.name}</p>
                    <p>Attack:  {occupiedCell.C1.attack}</p>
                    <p>Defense: {occupiedCell.C1.defense}:</p>
                </div>}

                {occupiedCell.C2.showCard && <div className={occupiedCell.C2.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.C2.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.C2.health}></progress>
                    <p>{occupiedCell.C2.name}</p>
                    <p>Attack:  {occupiedCell.C2.attack}</p>
                    <p>Defense: {occupiedCell.C2.defense}:</p>
                </div>}

                {occupiedCell.C3.showCard && <div className={occupiedCell.C3.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.C3.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.C3.health}></progress>
                    <p>{occupiedCell.C3.name}</p>
                    <p>Attack:  {occupiedCell.C3.attack}</p>
                    <p>Defense: {occupiedCell.C3.defense}:</p>
                </div>}

                {occupiedCell.C4.showCard && <div className={occupiedCell.C4.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.C4.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.C4.health}></progress>
                    <p>{occupiedCell.C4.name}</p>
                    <p>Attack:  {occupiedCell.C4.attack}</p>
                    <p>Defense: {occupiedCell.C4.defense}:</p>
                </div>}

                {occupiedCell.C5.showCard && <div className={occupiedCell.C5.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.C5.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.C5.health}></progress>
                    <p>{occupiedCell.C5.name}</p>
                    <p>Attack:  {occupiedCell.C5.attack}</p>
                    <p>Defense: {occupiedCell.C5.defense}:</p>
                </div>}

                {occupiedCell.C6.showCard && <div className={occupiedCell.C6.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.C6.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <p>{occupiedCell.C6.name}</p>
                    <p>Attack:  {occupiedCell.C6.attack}</p>
                    <p>Defense: {occupiedCell.C6.defense}:</p>
                </div>}

                {occupiedCell.D1.showCard && <div className={occupiedCell.D1.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.D1.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.D1.health}></progress>
                    <p>{occupiedCell.D1.name}</p>
                    <p>Attack:  {occupiedCell.D1.attack}</p>
                    <p>Defense: {occupiedCell.D1.defense}:</p>
                </div>}

                {occupiedCell.D2.showCard && <div className={occupiedCell.D2.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.D2.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.D2.health}></progress>
                    <p>{occupiedCell.D2.name}</p>
                    <p>Attack:  {occupiedCell.D2.attack}</p>
                    <p>Defense: {occupiedCell.D2.defense}:</p>
                </div>}

                {occupiedCell.D3.showCard && <div className={occupiedCell.D3.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.D3.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.D3.health}></progress>
                    <p>{occupiedCell.D3.name}</p>
                    <p>Attack:  {occupiedCell.D3.attack}</p>
                    <p>Defense: {occupiedCell.D3.defense}:</p>
                </div>}

                {occupiedCell.D4.showCard && <div className={occupiedCell.D4.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.D4.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.D4.health}></progress>
                    <p>{occupiedCell.D4.name}</p>
                    <p>Attack:  {occupiedCell.D4.attack}</p>
                    <p>Defense: {occupiedCell.D4.defense}:</p>
                </div>}

                {occupiedCell.D5.showCard && <div className={occupiedCell.D5.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.D5.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.D5.health}></progress>
                    <p>{occupiedCell.D5.name}</p>
                    <p>Attack:  {occupiedCell.D5.attack}</p>
                    <p>Defense: {occupiedCell.D5.defense}:</p>
                </div>}

                {occupiedCell.D6.showCard && <div className={occupiedCell.D6.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.D6.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img src={Images} alt="Images" draggable="false"/>
                    <p>{occupiedCell.D6.name}</p>
                    <p>Attack:  {occupiedCell.D6.attack}</p>
                    <p>Defense: {occupiedCell.D6.defense}:</p>
                </div>}


                {occupiedCellOpponent.A2.showCard && <div className={classes.cardEastEmpireArcher}>
                    <img src={Images1} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A2.health}></progress>
                    <p>{occupiedCellOpponent.A2.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A2.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A2.defense}:</p>
                </div>}

                {occupiedCellOpponent.A3.showCard && <div className={classes.cardEastEmpireArcher}>
                    <img src={Images1} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A3.health}></progress>
                    <p>{occupiedCellOpponent.A3.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A3.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A3.defense}:</p>
                </div>}

                {occupiedCellOpponent.A4.showCard && <div className={classes.cardEastEmpireArcher}>
                    <img src={Images1} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A4.health}></progress>
                    <p>{occupiedCellOpponent.A4.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A4.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A4.defense}:</p>
                </div>}

                {occupiedCellOpponent.A5.showCard && <div className={classes.cardEastEmpireArcher}>
                    <img src={Images1} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCellOpponent.A5.health}></progress>
                    <p>{occupiedCellOpponent.A5.name}</p>
                    <p>Attack:  {occupiedCellOpponent.A5.attack}</p>
                    <p>Defense: {occupiedCellOpponent.A5.defense}:</p>
                </div>}

            </div>

                <button className={classes.shopButton} onClick={handleOpenShop} disabled={buttonStartGame === false}>Магазин</button>

                {showShop && <div className={classes.shop}>
                    <button className={classes.unitWastelandHunter} onClick={handleBuyHunter} disabled={resources <= 0 || stateButtonsSkills === true}>Ангальские охотники</button>
                    {resources} resurs {reserve.wastelandHunter} soldiki
                    <button className={classes.unitWastelandHunter} onClick={handleBuyJavelin} disabled={resources <= 0 || stateButtonsSkills === true}>Ангальские метатели</button>
                    {resources} resurs {reserve.wastelandJavelin} soldiki
                    <button className={classes.closeButton} onClick={handleCloseShop}>Закрыть</button>
                </div>}

            <div className={classes.skillsBlockWasteland}>
                <button className={classes.buttonStartGame} onClick={handleStartGame} disabled={buttonStartGame === false}>Start</button>
                <button className={classes.angalsButtonSkillsHunters} onClick={handleRequestForHunterReserves} disabled={stateStyleSoldier === 2 || stateStyleSoldier === 3 || stateStyleSoldier === 4 ||  stateButtonSoldiers.wastelandButtonHunter === true || reserve.wastelandHunter === 0 || buttonStartGame === false}>Анагалы охотники: {reserve.wastelandHunter}</button> 
                <button className={classes.angalsButtonSkillsJavelin} onClick={handleRequestForJavelinReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 3 || stateStyleSoldier === 4 || stateButtonSoldiers.wastelandButtonJavelin === true || reserve.wastelandJavelin === 0 || buttonStartGame === false}>Анагалы метатели: {reserve.wastelandJavelin}</button>
            </div>

            <div className={classes.blockUnits}>

                <div className={classes.blockFlex1}>
                    
                    <button className={classes.cell} id={"A1"}>+</button>

                    <button className={classes.unitEmpireEastArcher} id={"A2"} onClick={() => {handleAttack("A2")}} 
                        onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A2: {...prev.A2, showCard: true}}))}
                        onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A2: {...prev.A2,showCard: false}}))} 
                        disabled={stateButtonsSkills === true}>+{occupiedCellOpponent.A2.health}
                    </button>

                    <button className={classes.unitEmpireEastArcher} id={"A3"} onClick={() => {handleAttack("A3")}} 
                        onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3, showCard: true}}))}
                        onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3,showCard: false}}))} 
                        disabled={stateButtonsSkills === true}>+{occupiedCellOpponent.A3.health}
                    </button>

                    <button className={classes.unitEmpireEastArcher} id={"A4"} onClick={() => {handleAttack("A4")}} 
                        onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4, showCard: true}}))}
                        onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4,showCard: false}}))} 
                        disabled={stateButtonsSkills === true}>+{occupiedCellOpponent.A4.health}
                    </button>

                    <button className={classes.unitEmpireEastArcher} id={"A5"} onClick={() => {handleAttack("A5")}} 
                        onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A5: {...prev.A5, showCard: true}}))}
                        onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A5: {...prev.A5,showCard: false}}))} 
                        disabled={stateButtonsSkills === true}>+{occupiedCellOpponent.A5.health}
                    </button>
                    
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

                {buttonStartGame && <div className={classes.blockFlex4}>
                    <button 
                        className={getButtonClass("C1")} 
                        id={"C1"} 
                        onClick={() => handleTroopDeployment("C1")} 
                        disabled={occupiedCell.C1.occupied === true }
                    >+ {occupiedCell.C1.health}</button>
                    <button 
                        className={getButtonClass("C2")}
                        id={"C2"} 
                        onClick={() => handleTroopDeployment("C2")} 
                        disabled={occupiedCell.C2.occupied === true}
                    >+</button>
                    <button 
                        className={getButtonClass("C3")}
                        id={"C3"} 
                        onClick={() => handleTroopDeployment("C3")} 
                        disabled={occupiedCell.C3.occupied === true}
                    >+{occupiedCell.C3.health}</button>
                    <button 
                        className={getButtonClass("C4")}
                        id={"C4"} 
                        onClick={() => handleTroopDeployment("C4")} 
                        disabled={occupiedCell.C4.occupied === true}
                    >+</button>
                    <button 
                        className={getButtonClass("C5")} 
                        id={"C5"} 
                        onClick={() => handleTroopDeployment("C5")} 
                        disabled={occupiedCell.C5.occupied === true}
                    >+</button>
                    <button 
                        className={getButtonClass("C6")} 
                        id={"C6"} 
                        onClick={() => handleTroopDeployment("C6")} 
                        disabled={occupiedCell.C6.occupied === true}
                    >+</button>
                </div>}

                {showGameField && <div className={classes.blockFlex4}>
                    <button 
                        className={getButtonClass("C1")} 
                        id={"C1"} 
                        onClick={() => {handleChoiceCellAttack("C1")}} 
                        disabled={occupiedCell.C1.occupied === false}
                    >+ {occupiedCell.C1.health}</button>
                    <button 
                        className={getButtonClass("C2")}
                        id={"C2"} 
                        onClick={() => {handleChoiceCellAttack("C2")}} 
                        disabled={occupiedCell.C2.occupied === false}
                    >+ {occupiedCell.C2.health}</button>
                    <button 
                        className={getButtonClass("C3")}
                        id={"C3"} 
                        onClick={() => {handleChoiceCellAttack("C3")}} 
                        disabled={occupiedCell.C3.occupied === false}
                    >+{occupiedCell.C3.health}</button>
                    <button 
                        className={getButtonClass("C4")}
                        id={"C4"} 
                        onClick={() => {handleChoiceCellAttack("C4")}} 
                        disabled={occupiedCell.C4.occupied === false}
                    >+ {occupiedCell.C4.health}</button>
                    <button 
                        className={getButtonClass("C5")} 
                        id={"C5"} 
                        onClick={() => {handleChoiceCellAttack("C5")}} 
                        disabled={occupiedCell.C5.occupied === false}
                    >+ {occupiedCell.C5.health}</button>
                    <button 
                        className={getButtonClass("C6")} 
                        id={"C6"} 
                        onClick={() => {handleChoiceCellAttack("C6")}} 
                        disabled={occupiedCell.C6.occupied === false}
                    >+ {occupiedCell.C6.health}</button>
                </div>}

                {buttonStartGame && <div className={classes.blockFlex5}>
                    <button 
                        className={getButtonClass("D1")} 
                        id={"D1"} 
                        onClick={() => handleTroopDeployment("D1")} 
                        disabled={occupiedCell.D1.occupied === true }
                    >+ {occupiedCell.D1.health}</button>
                    <button 
                        className={getButtonClass("D2")}
                        id={"D2"} 
                        onClick={() => handleTroopDeployment("D2")} 
                        disabled={occupiedCell.D2.occupied === true}
                    >+</button>
                    <button 
                        className={getButtonClass("D3")}
                        id={"D3"} 
                        onClick={() => handleTroopDeployment("D3")} 
                        disabled={occupiedCell.D3.occupied === true}
                    >+{occupiedCell.D3.health}</button>
                    <button 
                        className={getButtonClass("D4")}
                        id={"D4"} 
                        onClick={() => handleTroopDeployment("D4")} 
                        disabled={occupiedCell.D4.occupied === true}
                    >+</button>
                    <button 
                        className={getButtonClass("D5")} 
                        id={"D5"} 
                        onClick={() => handleTroopDeployment("D5")} 
                        disabled={occupiedCell.D5.occupied === true}
                    >+</button>
                    <button 
                        className={getButtonClass("D6")} 
                        id={"D6"} 
                        onClick={() => handleTroopDeployment("D6")} 
                        disabled={occupiedCell.D6.occupied === true}
                    >+</button>
                </div>}

                {showGameField && <div className={classes.blockFlex5}>
                    <button 
                        className={getButtonClass("D1")} 
                        id={"D1"} 
                        onClick={() => {handleChoiceCellAttack("D1")}} 
                        disabled={occupiedCell.D1.occupied === false}
                    >+ {occupiedCell.D1.health}</button>
                    <button 
                        className={getButtonClass("D2")}
                        id={"D2"} 
                        onClick={() => {handleChoiceCellAttack("D2")}} 
                        disabled={occupiedCell.D2.occupied === false}
                    >+ {occupiedCell.D2.health}</button>
                    <button 
                        className={getButtonClass("D3")}
                        id={"D3"} 
                        onClick={() => {handleChoiceCellAttack("D3")}} 
                        disabled={occupiedCell.D3.occupied === false}
                    >+{occupiedCell.D3.health}</button>
                    <button 
                        className={getButtonClass("D4")}
                        id={"D4"} 
                        onClick={() => {handleChoiceCellAttack("D4")}} 
                        disabled={occupiedCell.D4.occupied === false}
                    >+ {occupiedCell.D4.health}</button>
                    <button 
                        className={getButtonClass("D5")} 
                        id={"D5"} 
                        onClick={() => {handleChoiceCellAttack("D5")}} 
                        disabled={occupiedCell.D5.occupied === false}
                    >+ {occupiedCell.D5.health}</button>
                    <button 
                        className={getButtonClass("D6")} 
                        id={"D6"} 
                        onClick={() => {handleChoiceCellAttack("D6")}} 
                        disabled={occupiedCell.D6.occupied === false}
                    >+ {occupiedCell.D6.health}</button>
                </div>}
                    
            </div>
            
        </div>
    )
}