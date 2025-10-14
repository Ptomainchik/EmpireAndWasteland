import classes from "../../../Styles/Games.module.css";

export const RulesOfGame = ({setShowRules}: any) => {

        function handleCloseRules() {
            setShowRules(false);
        }

    return (
        <div className={classes.rulesPageWasteland}>

                <div className={classes.blockRules}>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonBigWasteland}>Магазин</button> 
                    <p className={classes.textRules}>Это кнопка магазина, здесь вы можете купить юнитов и припарки.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallWasteland}>Охотники: 1</button> 
                    <p className={classes.textRules}>Это кнопка выбора определённых войск в резерве, кликнув на неё вы можете выбрать данного юнита для последующего расположения на игровом поле.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallWasteland}>Метатели: 1</button> 
                    <p className={classes.textRules}>Это кнопка выбора определённых войск в резерве, кликнув на неё вы можете выбрать данного юнита для последующего расположения на игровом поле.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallWasteland}>Булавоносцы: 1</button> 
                    <p className={classes.textRules}>Это кнопка выбора определённых войск в резерве, кликнув на неё вы можете выбрать данного юнита для последующего расположения на игровом поле.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallWasteland}>Ангалиты: 1</button> 
                    <p className={classes.textRules}>Это кнопка выбора определённых войск в резерве, кликнув на неё вы можете выбрать данного юнита для последующего расположения на игровом поле.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonBigWasteland}>Старт</button> 
                    <p className={classes.textRules}>Это кнопка старта игры, начать игру можно только если на игровом поле установлен хотя бы один юнит.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonCell}>+</button> 
                    <p className={classes.textRules}>Это клетка на которую можно установить юнита.</p> 
                </div>

                </div>


                <div className={classes.blockRules}>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallWasteland}>Припарка: 1</button> 
                    <p className={classes.textRules}>Это кнопка припарки, нажав на нее, вы сможете восстановить всё здоровье предварительно выбранного юнита.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallWasteland}>Призыв</button> 
                    <p className={classes.textRules}>Эта кнопка повышает атаку всех ангалов.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallWasteland}>Долг крови</button> 
                    <p className={classes.textRules}>Эта кнопка запускает атаку фамильяров, наносящую слабый урон всем юнитам противника.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallWasteland}>Разделка</button> 
                    <p className={classes.textRules}>Это кнопка навыка Охотников. Нажав на неё, вы нанесёте средний урон юниту противника, который на данный момент совершает ход.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallWasteland}>Бросок</button> 
                    <p className={classes.textRules}>Это кнопка навыка Метателей. Нажав на неё, вы нанесёте средний урон юниту противника, который на данный момент совершает ход, и уменьшите его защиту.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallWasteland}>Ошеломление</button> 
                    <p className={classes.textRules}>Это кнопка навыка Булавоносцев. Нажав на неё, вы нанесёте повышенный урон юниту противника, который на данный момент совершает ход, и уменьшите его защиту.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallWasteland}>Истребление</button> 
                    <p className={classes.textRules}>Это кнопка навыка Ангалиты. Нажав на неё, вы нанесёте повышенный урон юниту противника, который на данный момент совершает ход, и слабый урон ближайшим к нему юнитам по горизонтали.</p> 
                </div>

                </div>

                <button className={classes.closeButton} onClick={handleCloseRules}>Закрыть</button>

        </div>
    )
}