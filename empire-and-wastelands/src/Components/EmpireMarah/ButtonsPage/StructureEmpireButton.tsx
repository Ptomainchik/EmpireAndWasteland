import classes from "../../Styles/Pages.module.css";
import { useNavigate } from "react-router-dom";

export const StructureButtonEmpire = () => {
    const navigate = useNavigate();
    function handleButtonStructure(){
        navigate("/structureemp")
    }
    return (
        <button className={classes.buttonPage} onClick={handleButtonStructure}>Структура Империи</button>
    )
}