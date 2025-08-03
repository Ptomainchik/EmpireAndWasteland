import classes from "../../Styles/Pages.module.css";
import { useNavigate } from "react-router-dom";

export const StructureButtonWasteland = () => {
    const navigate = useNavigate();
    function handleButtonStructure(){
        navigate("/structurewas")
    }
    return (
        <button className={classes.buttonPageWasteland} onClick={handleButtonStructure} style={{border:"solid 0.1vw black"}}>Структура Пустоши</button>
    )
}