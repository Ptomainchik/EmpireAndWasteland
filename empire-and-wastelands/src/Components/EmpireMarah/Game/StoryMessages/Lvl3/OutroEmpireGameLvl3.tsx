import classes from "../../../../Styles/StoryMessages.module.css";
import EmpireWin from "../../../../../Images/EmpireMarahImage/EmpireWin.webp";
import { useNavigate } from "react-router-dom";

export const OutroEmpireGameLvl3 = (props:any) => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        props.setResources(props.resources + 600);
        props.setShowStoryMessages((prev: any) => ({...prev, outro: false, countForMessage: 2 }));
        navigate("/gameemplvl4");
    };
    
    return (
        <div className={classes.outroEmpire}>
            <img className={classes.centerImageWin} src={EmpireWin} alt="EmpireWin" draggable="false"/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consequatur magnam pariatur et ad ea labore dolor molestiae, cum quod iste molestias ab nulla minima. Libero iure nesciunt id.
                Excepturi, repellat. Lorem ipsum dolor sit amet co iste quis non tenetur sed minus officiis doloribus deleniti reiciendis explicabo debitis ullam!
                +600GOLD!!!
            </p>
            <button className={classes.nextButtonEmpire} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}