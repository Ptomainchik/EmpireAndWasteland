import classes from "../../../../Styles/StoryMessages.module.css";
import AngalSon from "../../../../../Images/AngalsWastelandsImage/AngalSon.jpg";

export const MessageHalfHealthLvl3 = ({setShowStoryMessages}: any) => {

    function handleCloseMessage() {
        setShowStoryMessages((prev: any) => ({...prev, halfHealth: false, countForMessage: 1}))
    };

    return (
        <div className={classes.messageAtHalfHealthWasteland}>
            <img className={classes.leftImage} style={{border: "solid 0.3vw darkolivegreen"}} src={AngalSon} alt="AngalSon" draggable="false"/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consequatur magnam pariatur et ad ea labore dolor molestiae, cum quod iste molestias ab nulla minima. Libero iure nesciunt id.
                Excepturi, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus modi facere vel ipsam eligendi, excepturi quam maxime iste quis non tenetur sed minus officiis doloribus deleniti reiciendis explicabo debitis ullam!
            </p>
            <button className={classes.nextButtonWasteland} onClick={handleCloseMessage}>Продолжить</button>
        </div>
    )
}