import classes from "../../../Styles/StoryMessages.module.css";
import DeadAngal from "../../../../Images/AngalsWastelandsImage/DeadAngal.webp";
import { useNavigate } from "react-router-dom";

export const LoseMessage = () => {

    const navigate = useNavigate();

    function handleCloseMessage() {
        navigate("/");
    };

    return (
        <div className={classes.loseMessageWasteland}>
            <img className={classes.centerImageLoseWasteland} src={DeadAngal} alt="DeadAngal" draggable="false"/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consequatur magnam pariatur et ad ea labore dolor molestiae, cum quod iste molestias ab nulla minima. Libero iure nesciunt id.
                Excepturi, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus modi facere vel ipsam eligendi, excepturi quam maxime iste quis non tenetur sed minus officiis doloribus deleniti reiciendis explicabo debitis ullam!
            </p>
            <button className={classes.nextButtonWasteland} onClick={handleCloseMessage}>На главную</button>
        </div>
    )
}