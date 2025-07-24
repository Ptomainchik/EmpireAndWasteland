import { AngalsButtonChoice } from "../ChoiceButton/AngalsButtonChoice/AngalsButtonChoice";
import { ElvesButtonChoice } from "../ChoiceButton/ElvesButtonChoice/ElvesButtonChoice";
import classes from "../Styles/StartPage.module.css";


export const StartPage = () => {
    return (
        <div className={classes.startPage}>
            <ElvesButtonChoice/>
            <AngalsButtonChoice/>
            <div className={classes.overlayInfoBlockStartPage}>
                <div className={classes.infoBlockStartPage}>
                    <h3>Империя и Пустоши</h3>
                    <p>
                       Эта глава повествует о вечном противостоянии двух рас и государств - Империи Марах и Пустоши Ангалов.
                    </p>
                </div>
            </div>
        </div>
    )
};