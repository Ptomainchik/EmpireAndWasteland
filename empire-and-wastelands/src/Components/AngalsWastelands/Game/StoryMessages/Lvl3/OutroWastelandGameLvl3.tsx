import classes from "../../../../Styles/StoryMessages.module.css";
import WastelandWin from "../../../../../Images/AngalsWastelandsImage/WastelandWin.webp";
import { useNavigate } from "react-router-dom";

export const OutroWastelandGameLvl3 = (props:any) => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        props.setResources(props.resources + 500);
        props.setShowStoryMessages((prev: any) => ({...prev, outro: false, countForMessage: 2 }));
        navigate("/gamewaslvl4");
    };
    
    return (
        <div className={classes.outroWasteland}>
            <img className={classes.centerImageWin} src={WastelandWin} alt="WastelandWin" draggable="false"/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consequatur magnam pariatur et ad ea labore dolor molestiae, cum quod iste molestias ab nulla minima. Libero iure nesciunt id.
                Excepturi, repellat. Lorem ipsum dolor sit amet co iste quis non tenetur sed minus officiis doloribus deleniti reiciendis explicabo debitis ullam!
                +300GOLD!!!
            </p>
            <button className={classes.nextButtonWasteland} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}