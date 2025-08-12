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

    
    const [stateChoiceButton, setStateChoiceButton] = useState(true);
    const [showGameField, setShowGameField] = useState(false);
    const [buttonStartGame, setButtonStartGame] = useState(true);
    const [occupiedCellOpponent, setOccupiedCellOpponent] = useState({
            A2:{
                occupied: false,
                health: 70,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A3:{
                occupied: false,
                health: 30,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A4:{
                occupied: false,
                health: 30,
                attack: 10,
                defense: 3,
                first: true,
                classEmpireSoldier: 0,
                showCard: false,
            },
            A5:{
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
            E1:{
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
            },
            E2:{
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
            },
            E3:{
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
            },
            E4:{
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
            },
            E5:{
                occupied: false,
                health: 0,
                attack: 0,
                defense: 0,
                choice: false,
                classWastlelandSoldier: 0,
                showCard: false,
            },
            E6:{
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
    if(["E1", "E2", "E3", "E4", "E5", "E6"].includes(id) && stateButtonSoldiers.wastelandButtonHunter === true ) {
        
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
        if(id === "E1"){
        setOccupiedCell(prevOccupiedCell => ({
            ...prevOccupiedCell,
            E1:{
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
        else if(id === "E2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            E2:{
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
        else if(id === "E3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            E3:{
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
        else if(id === "E4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            E4:{
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
        else if(id === "E5"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            E5:{
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
        else if(id === "E6"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            E6:{
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
    else if(["E1", "E2", "E3", "E4", "E5", "E6"].includes(id) && stateButtonSoldiers.wastelandButtonJavelin === true ) {
        
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
        if(id === "E1"){
        setOccupiedCell(prevOccupiedCell => ({
            ...prevOccupiedCell,
            E1:{
                occupied: true,
                health: 30,
                attack: 10,
                defense: 10,
                choice: false,
                classWastlelandSoldier: 2,
                showCard: false,
            },
        }));
        }
        else if(id === "E2"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            E2:{
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 10,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
        else if(id === "E3"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            E3:{
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 10,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
        else if(id === "E4"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            E4:{
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 10,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
        else if(id === "E5"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            E5:{
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 10,
                    choice: false,
                    classWastlelandSoldier: 2,
                    showCard: false,
                },
        }));
        }
        else if(id === "E6"){
            setOccupiedCell(prevOccupiedCell => ({
                ...prevOccupiedCell,
            E6:{
                    occupied: true,
                    health: 30,
                    attack: 10,
                    defense: 10,
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

    function handleChoiceCellAttack(id:any) {
        setStateChoiceButton(false);
        if(id === "E1"){
           setOccupiedCell(prev => ({
    E1: { ...prev.E1, choice: true, showCard: true},
    E2: { ...prev.E2, choice: false, showCard: false },
    E3: { ...prev.E3, choice: false, showCard: false },
    E4: { ...prev.E4, choice: false, showCard: false },
    E5: { ...prev.E5, choice: false, showCard: false },
    E6: { ...prev.E6, choice: false, showCard: false }
    }));
        }
        else if(id === "E2"){
           setOccupiedCell(prev => ({
    E1: { ...prev.E1, choice: false, showCard: false },
    E2: { ...prev.E2, choice: true, showCard: true },
    E3: { ...prev.E3, choice: false, showCard: false },
    E4: { ...prev.E4, choice: false, showCard: false },
    E5: { ...prev.E5, choice: false, showCard: false },
    E6: { ...prev.E6, choice: false, showCard: false }
    }));
        }
        else if(id === "E3"){
           setOccupiedCell(prev => ({
    E1: { ...prev.E1, choice: false, showCard: false },
    E2: { ...prev.E2, choice: false, showCard: false },
    E3: { ...prev.E3, choice: true, showCard: true },
    E4: { ...prev.E4, choice: false, showCard: false },
    E5: { ...prev.E5, choice: false, showCard: false },
    E6: { ...prev.E6, choice: false, showCard: false }
    }));
        }
        else if(id === "E4"){
           setOccupiedCell(prev => ({
    E1: { ...prev.E1, choice: false, showCard: false },
    E2: { ...prev.E2, choice: false, showCard: false },
    E3: { ...prev.E3, choice: false, showCard: false },
    E4: { ...prev.E4, choice: true, showCard: true },
    E5: { ...prev.E5, choice: false, showCard: false },
    E6: { ...prev.E6, choice: false, showCard: false }
    }));
        }
        else if(id === "E5"){
           setOccupiedCell(prev => ({
    E1: { ...prev.E1, choice: false, showCard: false },
    E2: { ...prev.E2, choice: false, showCard: false },
    E3: { ...prev.E3, choice: false, showCard: false },
    E4: { ...prev.E4, choice: false, showCard: false },
    E5: { ...prev.E5, choice: true, showCard: true },
    E6: { ...prev.E6, choice: false, showCard: false }
    }));
        }
        else if(id === "E6"){
           setOccupiedCell(prev => ({
    E1: { ...prev.E1, choice: false, showCard: false},
    E2: { ...prev.E2, choice: false, showCard: false },
    E3: { ...prev.E3, choice: false, showCard: false },
    E4: { ...prev.E4, choice: false, showCard: false },
    E5: { ...prev.E5, choice: false, showCard: false },
    E6: { ...prev.E6, choice: true, showCard: true }
    }));
        }
    }

    function handleAttack(id:any) {
    setStateChoiceButton(true);
    if (id === "A2" && occupiedCell.E1.choice === true) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E1: {
                ...prev.E1,
                health: prev.E1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.E1.attack - prev.A2.defense - 1),
                first: false
            }
        }));
    }
    else if (id === "A2" && occupiedCell.E2.choice === true) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E2: {
                ...prev.E2,
                health: prev.E2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.E2.attack - prev.A2.defense),
                first: false
            }
        }));
    }
    else if (id === "A2" && occupiedCell.E3.choice === true) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E3: {
                ...prev.E3,
                health: prev.E3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.E3.attack - prev.A2.defense - 1),
                first: false
            }
        }));
        
    }
    else if (id === "A2" && occupiedCell.E4.choice === true) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E4: {
                ...prev.E4,
                health: prev.E4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.E4.attack - prev.A2.defense - 2),
                first: false
            }
        }));
        
    }
    else if (id === "A2" && occupiedCell.E5.choice === true) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E5: {
                ...prev.E5,
                health: prev.E5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.E5.attack - prev.A2.defense - 3),
                first: false
            }
        }));
        
    }
    else if (id === "A2" && occupiedCell.E6.choice === true) {
        if(occupiedCellOpponent.A2.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E6: {
                ...prev.E6,
                health: prev.E6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A2: {
                ...prev.A2,
                health: prev.A2.health - (occupiedCell.E6.attack - prev.A2.defense - 4),
                first: false
            }
        }));
        
    }


    else if (id === "A3" && occupiedCell.E1.choice === true) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E1: {
                ...prev.E1,
                health: prev.E1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.E1.attack - prev.A3.defense - 2),
                first: false
            }
        }));
        
    }
    else if (id === "A3" && occupiedCell.E2.choice === true) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E2: {
                ...prev.E2,
                health: prev.E2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.E2.attack - prev.A3.defense - 1),
                first: false
            }
        }));
        
    }
    else if (id === "A3" && occupiedCell.E3.choice === true) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E3: {
                ...prev.E3,
                health: prev.E3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.E3.attack - prev.A3.defense),
                first: false
            }
        }));
        
    }
    else if (id === "A3" && occupiedCell.E4.choice === true) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E4: {
                ...prev.E4,
                health: prev.E4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.E4.attack - prev.A3.defense - 1),
                first: false
            }
        }));
        
    }
    else if (id === "A3" && occupiedCell.E5.choice === true) {
        if(occupiedCellOpponent.A3.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E5: {
                ...prev.E5,
                health: prev.E5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.E5.attack - prev.A3.defense - 2),
                first: false
            }
        }));
        
    }
    else if (id === "A3" && occupiedCell.E6.choice === true) {
        if(occupiedCellOpponent.A3.first === true){
             setOccupiedCell(prev => ({
            ...prev,
            E6: {
                ...prev.E6,
                health: prev.E6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A3: {
                ...prev.A3,
                health: prev.A3.health - (occupiedCell.E6.attack - prev.A3.defense - 3),
                first: false
            }
        }));
       
    }


    else if (id === "A4" && occupiedCell.E1.choice === true) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E1: {
                ...prev.E1,
                health: prev.E1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.E1.attack - prev.A4.defense - 3),
                first: false
            }
        }));
     
    }
    else if (id === "A4" && occupiedCell.E2.choice === true) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E2: {
                ...prev.E2,
                health: prev.E2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.E2.attack - prev.A4.defense - 2),
                first: false
            }
        }));
        
    }
    else if (id === "A4" && occupiedCell.E3.choice === true) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E3: {
                ...prev.E3,
                health: prev.E3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.E3.attack - prev.A4.defense - 1),
                first: false
            }
        }));
        
    }
    else if (id === "A4" && occupiedCell.E4.choice === true) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E4: {
                ...prev.E4,
                health: prev.E4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.E4.attack - prev.A4.defense),
                first: false
            }
        }));
        
    }
    else if (id === "A4" && occupiedCell.E5.choice === true) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E5: {
                ...prev.E5,
                health: prev.E5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.E5.attack - prev.A4.defense - 1),
                first: false
            }
        }));
        
    }
    else if (id === "A4" && occupiedCell.E6.choice === true) {
        if(occupiedCellOpponent.A4.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E6: {
                ...prev.E6,
                health: prev.E6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A4: {
                ...prev.A4,
                health: prev.A4.health - (occupiedCell.E6.attack - prev.A4.defense - 2),
                first: false
            }
        }));
        
    }


    else if (id === "A5" && occupiedCell.E1.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E1: {
                ...prev.E1,
                health: prev.E1.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.E1.attack - prev.A5.defense - 4),
                first: false
            }
        }));
        
    }
    else if (id === "A5" && occupiedCell.E2.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E2: {
                ...prev.E2,
                health: prev.E2.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.E2.attack - prev.A5.defense - 3),
                first: false
            }
        }));
        
    }
    else if (id === "A5" && occupiedCell.E3.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E3: {
                ...prev.E3,
                health: prev.E3.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.E3.attack - prev.A5.defense - 2),
                first: false
            }
        }));
        
    }
    else if (id === "A5" && occupiedCell.E4.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E4: {
                ...prev.E4,
                health: prev.E4.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.E4.attack - prev.A5.defense - 1),
                first: false
            }
        }));
        
    }
    else if (id === "A5" && occupiedCell.E5.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E5: {
                ...prev.E5,
                health: prev.E5.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.E5.attack - prev.A5.defense),
                first: false
            }
        }));
        
    }
    else if (id === "A5" && occupiedCell.E6.choice === true) {
        if(occupiedCellOpponent.A5.first === true){
            setOccupiedCell(prev => ({
            ...prev,
            E6: {
                ...prev.E6,
                health: prev.E6.health - 4
            }
        }));
        }
        setOccupiedCellOpponent(prev => ({
            ...prev,
            A5: {
                ...prev.A5,
                health: prev.A5.health - (occupiedCell.E6.attack - prev.A5.defense - 1),
                first: false
            }
        }));
        
    }
};

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
                {occupiedCell.E1.showCard && <div className={occupiedCell.E1.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.E1.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>E1:
                    {occupiedCell.E1.health}:     
                    {occupiedCell.E1.attack}:
                    {occupiedCell.E1.defense}:
                </div>}
                {occupiedCell.E2.showCard && <div className={occupiedCell.E2.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.E2.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>E2:
                    {occupiedCell.E2.health}:     
                    {occupiedCell.E2.attack}:
                    {occupiedCell.E2.defense}:
                </div>}
                {occupiedCell.E3.showCard && <div className={occupiedCell.E3.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.E3.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>E3:
                    {occupiedCell.E3.health}:     
                    {occupiedCell.E3.attack}:
                    {occupiedCell.E3.defense}:
                </div>}
                {occupiedCell.E4.showCard && <div className={occupiedCell.E4.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.E4.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>E4:
                    {occupiedCell.E4.health}:     
                    {occupiedCell.E4.attack}:
                    {occupiedCell.E4.defense}:
                </div>}
                {occupiedCell.E5.showCard && <div className={occupiedCell.E5.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.E5.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>E5:
                    {occupiedCell.E5.health}:     
                    {occupiedCell.E5.attack}:
                    {occupiedCell.E5.defense}:
                </div>}
                {occupiedCell.E6.showCard && <div className={occupiedCell.E6.classWastlelandSoldier === 1 
                ? classes.cardWastelandHunter 
                : occupiedCell.E6.classWastlelandSoldier === 2 
                ? classes.cardWastelandJavelin 
                : classes.card}>E6:
                    {occupiedCell.E6.health}:     
                    {occupiedCell.E6.attack}:
                    {occupiedCell.E6.defense}:
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
                    <button className={classes.unitEmpireEastArcher} id={"A2"} onClick={() => {handleAttack("A2")}} disabled={stateButtonsSkills === true}>+{occupiedCellOpponent.A2.health}</button>
                    <button className={classes.unitEmpireEastArcher} id={"A3"} onClick={() => {handleAttack("A3")}} disabled={stateButtonsSkills === true}>+{occupiedCellOpponent.A3.health}</button>
                    <button className={classes.unitEmpireEastArcher} id={"A4"} onClick={() => {handleAttack("A4")}} disabled={stateButtonsSkills === true}>+{occupiedCellOpponent.A4.health}</button>
                    <button className={classes.unitEmpireEastArcher} id={"A5"} onClick={() => {handleAttack("A5")}} disabled={stateButtonsSkills === true}>+{occupiedCellOpponent.A5.health}</button>
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

                {buttonStartGame && <div className={classes.blockFlex5}>
                    <button 
                        className={getButtonClass("E1")} 
                        id={"E1"} 
                        onClick={() => handleTroopDeployment("E1")} 
                        disabled={occupiedCell.E1.occupied === true }
                    >+ {occupiedCell.E1.health}</button>
                    <button 
                        className={getButtonClass("E2")}
                        id={"E2"} 
                        onClick={() => handleTroopDeployment("E2")} 
                        disabled={occupiedCell.E2.occupied === true}
                    >+</button>
                    <button 
                        className={getButtonClass("E3")}
                        id={"E3"} 
                        onClick={() => handleTroopDeployment("E3")} 
                        disabled={occupiedCell.E3.occupied === true}
                    >+{occupiedCell.E3.health}</button>
                    <button 
                        className={getButtonClass("E4")}
                        id={"E4"} 
                        onClick={() => handleTroopDeployment("E4")} 
                        disabled={occupiedCell.E4.occupied === true}
                    >+</button>
                    <button 
                        className={getButtonClass("E5")} 
                        id={"E5"} 
                        onClick={() => handleTroopDeployment("E5")} 
                        disabled={occupiedCell.E5.occupied === true}
                    >+</button>
                    <button 
                        className={getButtonClass("E6")} 
                        id={"E6"} 
                        onClick={() => handleTroopDeployment("E6")} 
                        disabled={occupiedCell.E6.occupied === true}
                    >+</button>
                </div>}

                {showGameField && <div className={classes.blockFlex5}>
                    <button 
                        className={getButtonClass("E1")} 
                        id={"E1"} 
                        onClick={() => {handleChoiceCellAttack("E1")}} 
                        disabled={occupiedCell.E1.occupied === false}
                    >+ {occupiedCell.E1.health}</button>
                    <button 
                        className={getButtonClass("E2")}
                        id={"E2"} 
                        onClick={() => {handleChoiceCellAttack("E2")}} 
                        disabled={occupiedCell.E2.occupied === false}
                    >+ {occupiedCell.E2.health}</button>
                    <button 
                        className={getButtonClass("E3")}
                        id={"E3"} 
                        onClick={() => {handleChoiceCellAttack("E3")}} 
                        disabled={occupiedCell.E3.occupied === false}
                    >+{occupiedCell.E3.health}</button>
                    <button 
                        className={getButtonClass("E4")}
                        id={"E4"} 
                        onClick={() => {handleChoiceCellAttack("E4")}} 
                        disabled={occupiedCell.E4.occupied === false}
                    >+ {occupiedCell.E4.health}</button>
                    <button 
                        className={getButtonClass("E5")} 
                        id={"E5"} 
                        onClick={() => {handleChoiceCellAttack("E5")}} 
                        disabled={occupiedCell.E5.occupied === false}
                    >+ {occupiedCell.E5.health}</button>
                    <button 
                        className={getButtonClass("E6")} 
                        id={"E6"} 
                        onClick={() => {handleChoiceCellAttack("E6")}} 
                        disabled={occupiedCell.E6.occupied === false}
                    >+ {occupiedCell.E6.health}</button>
                </div>}
                    
            </div>
            
        </div>
    )
}