import classes from "../../Styles/Games.module.css";
import { BackButton } from "../../Buttons/BackButton";
import { HomeButton } from "../../Buttons/HomeButton";
import { useState } from "react";
import Images from "../../../Images/AngalsWastelandsImage/CoatOfArmsOfWasteland.webp";
import AngalJavelin from "../../../Images/AngalsWastelandsImage/ImageWastelandCardAngalJavelin.jpg";
import WestArcher from "../../../Images/ImpireMarahImage/ImageImpireCardWestArcher.jpg";

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
    const [buttonStateGame, setButtonStateGame] = useState({
        stateOverallButton: true,
        stateShopButton: true,
        stateStartButton: false,
        stateAttackButton: true,
    });
    const [occupiedCellOpponent, setOccupiedCellOpponent] = useState({
            A1:{
                name: "Лучники запада",
                occupied: false,
                health: 10,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A2:{
                name: "Лучники запада",
                occupied: false,
                health: 10,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A3:{
                name: "Лучники запада",
                occupied: false,
                health: 10,
                attack: 30,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A4:{
                name: "Лучники запада",
                occupied: false,
                health: 10,
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
                    health: 20,
                    attack: 5,
                    defense: 5,
                    choice: false,
                    classWastlelandSoldier: 1,
                    showCard: false,
                    priority: 1,
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
                    priority: 1,
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
                    priority: 1,
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
                    priority: 1,
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
                    priority: 1,
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
                    priority: 1,
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
                    priority: 1,
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
                    priority: 1,
                },
        }));
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
                health: prev.A1.health - (occupiedCell.C1.attack - prev.A1.defense - 1),
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
                health: prev.A1.health - (occupiedCell.C2.attack - prev.A1.defense -1),
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
                health: prev.A1.health - (occupiedCell.C3.attack - prev.A1.defense - 1),
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
                health: prev.A1.health - (occupiedCell.C4.attack - prev.A1.defense - 1),
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
                health: prev.A2.health - (occupiedCell.C1.attack - prev.A2.defense - 1),
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
                health: prev.A2.health - (occupiedCell.C2.attack - prev.A2.defense - 1),
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
                health: prev.A2.health - (occupiedCell.C3.attack - prev.A2.defense - 1),
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
                health: prev.A2.health - (occupiedCell.C4.attack - prev.A2.defense - 1),
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
                health: prev.A3.health - (occupiedCell.C1.attack - prev.A3.defense - 1),
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
                health: prev.A3.health - (occupiedCell.C2.attack - prev.A3.defense - 1),
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
                health: prev.A3.health - (occupiedCell.C3.attack - prev.A3.defense - 1),
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
                health: prev.A3.health - (occupiedCell.C4.attack - prev.A3.defense - 1),
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
                health: prev.A4.health - (occupiedCell.C1.attack - prev.A4.defense - 1),
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
                health: prev.A4.health - (occupiedCell.C2.attack - prev.A4.defense - 1),
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
                health: prev.A4.health - (occupiedCell.C3.attack - prev.A4.defense - 1),
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
                health: prev.A4.health - (occupiedCell.C4.attack - prev.A4.defense - 1),
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
                health: prev.A1.health - (occupiedCell.D1.attack - prev.A1.defense - 1),
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
                health: prev.A1.health - (occupiedCell.D2.attack - prev.A1.defense - 1),
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
                health: prev.A1.health - (occupiedCell.D3.attack - prev.A1.defense - 1),
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
                health: prev.A1.health - (occupiedCell.D4.attack - prev.A1.defense - 1),
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
                health: prev.A2.health - (occupiedCell.D1.attack - prev.A2.defense - 1),
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
                health: prev.A2.health - (occupiedCell.D2.attack - prev.A2.defense - 1),
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
                health: prev.A2.health - (occupiedCell.D3.attack - prev.A2.defense - 1),
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
                health: prev.A2.health - (occupiedCell.D4.attack - prev.A2.defense - 1),
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
                health: prev.A3.health - (occupiedCell.D1.attack - prev.A3.defense - 1),
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
                health: prev.A3.health - (occupiedCell.D2.attack - prev.A3.defense - 1),
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
                health: prev.A3.health - (occupiedCell.D3.attack - prev.A3.defense - 1),
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
                health: prev.A3.health - (occupiedCell.D4.attack - prev.A3.defense - 1),
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
                health: prev.A4.health - (occupiedCell.D1.attack - prev.A4.defense - 1),
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
                health: prev.A4.health - (occupiedCell.D2.attack - prev.A4.defense - 1),
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
                health: prev.A4.health - (occupiedCell.D3.attack - prev.A4.defense - 1),
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
                health: prev.A4.health - (occupiedCell.D4.attack - prev.A4.defense - 1),
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

    function handleStartGame() {
        setButtonStateGame({
            stateOverallButton: false,
            stateShopButton: false,
            stateStartButton: false,
            stateAttackButton: true,
        });
        setShowGameField(true);
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
                : classes.card
                }>
                    <img className={classes.imageCard} src={occupiedCell.C1.classWastlelandSoldier === 1 
                    ? Images
                    : occupiedCell.C1.classWastlelandSoldier === 2 
                    ? AngalJavelin
                    : Images} alt="Images" draggable="false"/>
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
                    <img className={classes.imageCard} src={occupiedCell.C2.classWastlelandSoldier === 1 
                    ? Images
                    : occupiedCell.C2.classWastlelandSoldier === 2 
                    ? AngalJavelin
                    : Images} alt="Images" draggable="false"/>
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
                    <img className={classes.imageCard} src={occupiedCell.C3.classWastlelandSoldier === 1 
                    ? Images
                    : occupiedCell.C3.classWastlelandSoldier === 2 
                    ? AngalJavelin
                    : Images} alt="Images" draggable="false"/>
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
                    <img className={classes.imageCard} src={occupiedCell.C4.classWastlelandSoldier === 1 
                    ? Images
                    : occupiedCell.C4.classWastlelandSoldier === 2 
                    ? AngalJavelin
                    : Images} alt="Images" draggable="false"/>
                    <progress className={classes.healthScaleWasteland} max="100" value={occupiedCell.C4.health}></progress>
                    <p>{occupiedCell.C4.name}</p>
                    <p>Attack:  {occupiedCell.C4.attack}</p>
                    <p>Defense: {occupiedCell.C4.defense}:</p>
                </div>}

                {occupiedCell.D1.showCard && <div className={occupiedCell.D1.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.D1.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>
                    <img className={classes.imageCard} src={occupiedCell.D1.classWastlelandSoldier === 1 
                    ? Images
                    : occupiedCell.D1.classWastlelandSoldier === 2 
                    ? AngalJavelin
                    : Images} alt="Images" draggable="false"/>
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
                    <img className={classes.imageCard} src={occupiedCell.D2.classWastlelandSoldier === 1 
                    ? Images
                    : occupiedCell.D2.classWastlelandSoldier === 2 
                    ? AngalJavelin
                    : Images} alt="Images" draggable="false"/>
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
                    <img className={classes.imageCard} src={occupiedCell.D3.classWastlelandSoldier === 1 
                    ? Images
                    : occupiedCell.D3.classWastlelandSoldier === 2 
                    ? AngalJavelin
                    : Images} alt="Images" draggable="false"/>
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
                    <img className={classes.imageCard} src={occupiedCell.D4.classWastlelandSoldier === 1 
                    ? Images
                    : occupiedCell.D4.classWastlelandSoldier === 2 
                    ? AngalJavelin
                    : Images} alt="Images" draggable="false"/>
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

            </div>

                {showShop && <div className={classes.shop}>
                    <button className={classes.unitWastelandHunter} onClick={handleBuyHunter} disabled={resources <= 0 || stateButtonsSkills === true}>Ангальские охотники</button>
                    {resources} resurs {reserve.wastelandHunter} soldiki
                    <button className={classes.javelinBuy} onClick={handleBuyJavelin} disabled={resources <= 0 || stateButtonsSkills === true}><p className={classes.titleBuyUnit}>Ангальские метатели</p></button>
                    {resources} resurs {reserve.wastelandJavelin} soldiki
                    <button className={classes.closeButton} onClick={handleCloseShop} disabled={reserve.wastelandHunter + reserve.wastelandJavelin + reserve.wastelandMaces + reserve.wastelandAngalit === 0}>Готово</button>
                </div>}

            <div className={classes.skillsBlockWasteland}>
                {buttonStateGame.stateShopButton && <button className={classes.shopButton} onClick={handleOpenShop}>Магазин</button>}
                {buttonStateGame.stateStartButton && <button className={classes.buttonStartGame} onClick={handleStartGame}>Старт</button>}
                {buttonStateGame.stateOverallButton && <button className={classes.angalsButtonSkillsHunters} onClick={handleRequestForHunterReserves} disabled={stateStyleSoldier === 2 || stateStyleSoldier === 3 || stateStyleSoldier === 4 ||  stateButtonSoldiers.wastelandButtonHunter === true || reserve.wastelandHunter === 0}>Охотники: {reserve.wastelandHunter}</button>} 
                {buttonStateGame.stateOverallButton && <button className={classes.angalsButtonSkillsJavelin} onClick={handleRequestForJavelinReserves} disabled={stateStyleSoldier === 1 || stateStyleSoldier === 3 || stateStyleSoldier === 4 || stateButtonSoldiers.wastelandButtonJavelin === true || reserve.wastelandJavelin === 0}>Метатели: {reserve.wastelandJavelin}</button>}
            </div>

            <div className={classes.blockUnits}>

                <div className={classes.blockFlex1}>

                    <button className={attackQueue === 1 ? classes.unitEmpireWestArcherChoice : occupiedCellOpponent.A1.health <= 0 ? classes.unitEmpireDeath : classes.unitEmpireWestArcher} id={"A1"} onClick={() => {handleAttack("A1")}} 
                        onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A1: {...prev.A1, showCard: true}}))}
                        onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A1: {...prev.A1,showCard: false}}))} 
                        disabled={stateButtonsSkills === true || occupiedCellOpponent.A1.health <= 0 || buttonStateGame.stateAttackButton === false}>+{occupiedCellOpponent.A1.health}
                    </button>

                    <button className={attackQueue === 2 ? classes.unitEmpireWestArcherChoice : occupiedCellOpponent.A2.health <= 0 ? classes.unitEmpireDeath : classes.unitEmpireWestArcher} id={"A2"} onClick={() => {handleAttack("A2")}} 
                        onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A2: {...prev.A2, showCard: true}}))}
                        onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A2: {...prev.A2,showCard: false}}))} 
                        disabled={stateButtonsSkills === true || occupiedCellOpponent.A2.health <= 0 || buttonStateGame.stateAttackButton === false}>+{occupiedCellOpponent.A2.health}
                    </button>

                    <button className={attackQueue === 3 ? classes.unitEmpireWestArcherChoice : occupiedCellOpponent.A3.health <= 0 ? classes.unitEmpireDeath : classes.unitEmpireWestArcher} id={"A3"} onClick={() => {handleAttack("A3")}} 
                        onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3, showCard: true}}))}
                        onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A3: {...prev.A3,showCard: false}}))} 
                        disabled={stateButtonsSkills === true || occupiedCellOpponent.A3.health <= 0 || buttonStateGame.stateAttackButton === false}>+{occupiedCellOpponent.A3.health}
                    </button>

                    <button className={attackQueue === 4 ? classes.unitEmpireWestArcherChoice : occupiedCellOpponent.A4.health <= 0 ? classes.unitEmpireDeath : classes.unitEmpireWestArcher} id={"A4"} onClick={() => {handleAttack("A4")}} 
                        onMouseEnter={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4, showCard: true}}))}
                        onMouseLeave={() => setOccupiedCellOpponent(prev => ({...prev, A4: {...prev.A4,showCard: false}}))} 
                        disabled={stateButtonsSkills === true || occupiedCellOpponent.A4.health <= 0 || buttonStateGame.stateAttackButton === false}>+{occupiedCellOpponent.A4.health}
                    </button>

                </div>

                <div className={classes.blockFlex2}>
                    <button className={classes.cell} id={"B1"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"B2"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"B3"} disabled={stateButtonsSkills === true}>+</button>
                    <button className={classes.cell} id={"B4"} disabled={stateButtonsSkills === true}>+</button>
                </div>

                {buttonStateGame.stateOverallButton && <div className={classes.blockFlex4}>
                    <button 
                        className={occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 ? classes.unitWastelandHunter : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.C1.occupied === true && occupiedCell.C1.health === 0 ? classes.unitWastelandDeath : classes.cell} 
                        id={"C1"} 
                        onClick={() => handleTroopDeployment("C1")} 
                        disabled={occupiedCell.C1.occupied === true}
                    >+ {occupiedCell.C1.health}</button>
                    <button 
                        className={occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 ? classes.unitWastelandHunter : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.C2.occupied === true && occupiedCell.C2.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"C2"} 
                        onClick={() => handleTroopDeployment("C2")} 
                        disabled={occupiedCell.C2.occupied === true}
                    >+</button>
                    <button 
                        className={occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 ? classes.unitWastelandHunter : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.C3.occupied === true && occupiedCell.C3.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"C3"} 
                        onClick={() => handleTroopDeployment("C3")} 
                        disabled={occupiedCell.C3.occupied === true}
                    >+{occupiedCell.C3.health}</button>
                    <button 
                        className={occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 ? classes.unitWastelandHunter : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.C4.occupied === true && occupiedCell.C4.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"C4"} 
                        onClick={() => handleTroopDeployment("C4")} 
                        disabled={occupiedCell.C4.occupied === true}
                    >+</button>
                </div>}

                {showGameField && <div className={classes.blockFlex4}>
                    <button 
                        className={occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitWastelandHunterChoice : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 && occupiedCell.C1.choice === true ? classes.unitWastelandJavelinChoice : occupiedCell.C1.name === "Охотники" && occupiedCell.C1.health !== 0 ? classes.unitWastelandHunter : occupiedCell.C1.name === "Метатели" && occupiedCell.C1.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.C1.occupied === true && occupiedCell.C1.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"C1"} 
                        onClick={() => {handleChoiceCellAttack("C1")}} 
                        disabled={occupiedCell.C1.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C1.health <= 0}
                    >+ {occupiedCell.C1.health}</button>
                    <button 
                        className={occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitWastelandHunterChoice : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 && occupiedCell.C2.choice === true ? classes.unitWastelandJavelinChoice : occupiedCell.C2.name === "Охотники" && occupiedCell.C2.health !== 0 ? classes.unitWastelandHunter : occupiedCell.C2.name === "Метатели" && occupiedCell.C2.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.C2.occupied === true && occupiedCell.C2.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"C2"} 
                        onClick={() => {handleChoiceCellAttack("C2")}} 
                        disabled={occupiedCell.C2.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C2.health <= 0}
                    >+ {occupiedCell.C2.health}</button>
                    <button 
                        className={occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitWastelandHunterChoice : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 && occupiedCell.C3.choice === true ? classes.unitWastelandJavelinChoice : occupiedCell.C3.name === "Охотники" && occupiedCell.C3.health !== 0 ? classes.unitWastelandHunter : occupiedCell.C3.name === "Метатели" && occupiedCell.C3.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.C3.occupied === true && occupiedCell.C3.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"C3"} 
                        onClick={() => {handleChoiceCellAttack("C3")}} 
                        disabled={occupiedCell.C3.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C3.health <= 0}
                    >+{occupiedCell.C3.health}</button>
                    <button 
                        className={occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitWastelandHunterChoice : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 && occupiedCell.C4.choice === true ? classes.unitWastelandJavelinChoice : occupiedCell.C4.name === "Охотники" && occupiedCell.C4.health !== 0 ? classes.unitWastelandHunter : occupiedCell.C4.name === "Метатели" && occupiedCell.C4.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.C4.occupied === true && occupiedCell.C4.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"C4"} 
                        onClick={() => {handleChoiceCellAttack("C4")}} 
                        disabled={occupiedCell.C4.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.C4.health <= 0} 
                    >+ {occupiedCell.C4.health}</button>
                </div>}

                {buttonStateGame.stateOverallButton && <div className={classes.blockFlex5}>
                    <button 
                        className={occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 ? classes.unitWastelandHunter : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.D1.occupied === true && occupiedCell.D1.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"D1"} 
                        onClick={() => handleTroopDeployment("D1")} 
                        disabled={occupiedCell.D1.occupied === true}
                    >+ {occupiedCell.D1.health}</button>
                    <button 
                        className={occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 ? classes.unitWastelandHunter : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.D2.occupied === true && occupiedCell.D2.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"D2"} 
                        onClick={() => handleTroopDeployment("D2")} 
                        disabled={occupiedCell.D2.occupied === true}
                    >+</button>
                    <button 
                        className={occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 ? classes.unitWastelandHunter : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.D3.occupied === true && occupiedCell.D3.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"D3"} 
                        onClick={() => handleTroopDeployment("D3")} 
                        disabled={occupiedCell.D3.occupied === true}
                    >+{occupiedCell.D3.health}</button>
                    <button 
                        className={occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 ? classes.unitWastelandHunter : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.D4.occupied === true && occupiedCell.D4.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"D4"} 
                        onClick={() => handleTroopDeployment("D4")} 
                        disabled={occupiedCell.D4.occupied === true}
                    >+</button>
                </div>}

                {showGameField && <div className={classes.blockFlex5}>
                    <button 
                        className={occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitWastelandHunterChoice : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 && occupiedCell.D1.choice === true ? classes.unitWastelandJavelinChoice : occupiedCell.D1.name === "Охотники" && occupiedCell.D1.health !== 0 ? classes.unitWastelandHunter : occupiedCell.D1.name === "Метатели" && occupiedCell.D1.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.D1.occupied === true && occupiedCell.D1.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"D1"} 
                        onClick={() => {handleChoiceCellAttack("D1")}} 
                        disabled={occupiedCell.D1.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D1.health <= 0}
                    >+ {occupiedCell.D1.health}</button>
                    <button 
                        className={occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitWastelandHunterChoice : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 && occupiedCell.D2.choice === true ? classes.unitWastelandJavelinChoice : occupiedCell.D2.name === "Охотники" && occupiedCell.D2.health !== 0 ? classes.unitWastelandHunter : occupiedCell.D2.name === "Метатели" && occupiedCell.D2.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.D2.occupied === true && occupiedCell.D2.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"D2"} 
                        onClick={() => {handleChoiceCellAttack("D2")}} 
                        disabled={occupiedCell.D2.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D2.health <= 0}
                    >+ {occupiedCell.D2.health}</button>
                    <button 
                        className={occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitWastelandHunterChoice : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 && occupiedCell.D3.choice === true ? classes.unitWastelandJavelinChoice : occupiedCell.D3.name === "Охотники" && occupiedCell.D3.health !== 0 ? classes.unitWastelandHunter : occupiedCell.D3.name === "Метатели" && occupiedCell.D3.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.D3.occupied === true && occupiedCell.D3.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"D3"} 
                        onClick={() => {handleChoiceCellAttack("D3")}} 
                        disabled={occupiedCell.D3.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D3.health <= 0}
                    >+{occupiedCell.D3.health}</button>
                    <button 
                        className={occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitWastelandHunterChoice : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 && occupiedCell.D4.choice === true ? classes.unitWastelandJavelinChoice : occupiedCell.D4.name === "Охотники" && occupiedCell.D4.health !== 0 ? classes.unitWastelandHunter : occupiedCell.D4.name === "Метатели" && occupiedCell.D4.health !== 0 ? classes.unitWastelandJavelin : occupiedCell.D4.occupied === true && occupiedCell.D4.health === 0 ? classes.unitWastelandDeath : classes.cell}
                        id={"D4"} 
                        onClick={() => {handleChoiceCellAttack("D4")}} 
                        disabled={occupiedCell.D4.occupied === false || stateOfButtonsDuringAttack === false || occupiedCell.D4.health <= 0}
                    >+ {occupiedCell.D4.health}</button>
                </div>}
                    
            </div>
            
        </div>
    )
}