import classes from "../../../Styles/StoryMessages.module.css";
import images from "../../../../Images/AngalsWastelandsImage/AngalHunter.webp";
import imagess from "../../../../Images/AngalsWastelandsImage/AngalJavelin.webp";
import { useNavigate } from "react-router-dom";

export const OutroWastelandGame1Lvl = (props:any) => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        props.setShowStoryMessages((prev: any) => ({...prev, outro: false, countForMessage: 2 }));
        navigate("/gamewaslvl2");
    };

    localStorage.setItem('wastelandResources', props.resources.toString());
    
    return (
        <div className={classes.outroWasteland}>
            <img className={classes.rightImage} src={images} alt="images" draggable="false"/>
            <img className={classes.leftImage} src={imagess} alt="images" draggable="false"/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consequatur magnam pariatur et ad ea labore dolor molestiae, cum quod iste molestias ab nulla minima. Libero iure nesciunt id.
                Excepturi, repellat. Lorem ipsum dolor sit amet co iste quis non tenetur sed minus officiis doloribus deleniti reiciendis explicabo debitis ullam!
            </p>
            <button className={classes.nextButton} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}