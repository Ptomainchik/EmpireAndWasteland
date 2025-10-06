import classes from "../../../../Styles/StoryMessages.module.css";
import WastelandVictory from "../../../../../Images/AngalsWastelandsImage/WastelandVictory.jpg";
import { useNavigate } from "react-router-dom";

export const OutroWastelandGameLvl4 = (props:any) => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        props.setShowStoryMessages((prev: any) => ({...prev, outro: false, countForMessage: 2 }));
        navigate("/"); 
    };
    
    return (
        <div className={classes.outroEmpire}>
            <img className={classes.centerImage} src={WastelandVictory} alt="WastelandVictory" draggable="false"/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consequatur magnam pariatur et ad ea labore dolor molestiae, cum quod iste molestias ab nulla minima. Libero iure nesciunt id.
                Excepturi, repellat. Lorem ipsum dolor sit amet co iste quis non tenetur sed minus officiis doloribus deleniti reiciendis explicabo debitis ullam!
            </p>
            <button className={classes.nextButtonEmpire} onClick={handleCloseMessage}>На главную</button>
        </div>
    )
}