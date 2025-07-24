import classes from "../../Styles/Pages.module.css";
import { useNavigate } from "react-router-dom";

export const StructureButtonWasteland = () => {
    const navigate = useNavigate();
    function handleButtonStructure(){
        navigate("/structurewas")
    }
    return (
        <button className={classes.buttonPage} onClick={handleButtonStructure}>Структура Пустоши</button>
    )
}