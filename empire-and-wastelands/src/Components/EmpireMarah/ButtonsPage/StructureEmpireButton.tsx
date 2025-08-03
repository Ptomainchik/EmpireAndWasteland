import classes from "../../Styles/Pages.module.css";
import { useNavigate } from "react-router-dom";

export const StructureButtonEmpire = () => {
    const navigate = useNavigate();
    function handleButtonStructure(){
        navigate("/structureemp")
    }
    return (
        <button className={classes.buttonPageEmpire} onClick={handleButtonStructure} style={{border:"solid 0.1vw black"}}>Структура Империи</button>
    )
}