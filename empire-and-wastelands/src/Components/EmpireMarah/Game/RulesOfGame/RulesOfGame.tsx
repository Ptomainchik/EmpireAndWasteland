import classes from "../../../Styles/Games.module.css";

export const RulesOfGame = ({setShowRules}: any) => {

        function handleCloseRules() {
            setShowRules(false);
        }

    return (
        <div className={classes.rulesPageEmpire}>

                <div className={classes.blockRules}>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonBigEmpire}>Магазин</button> 
                    <p className={classes.textRules}>Это кнопка магазина, здесь вы можете купить юнитов и припарки.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallEmpire}>Лучники запада: 1</button> 
                    <p className={classes.textRules}>Это кнопка выбора определённых войск в резерве, кликнув на неё вы можете выбрать данного юнита для последующего расположения на игровом поле.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallEmpire}>Мечники запада: 1</button> 
                    <p className={classes.textRules}>Это кнопка выбора определённых войск в резерве, кликнув на неё вы можете выбрать данного юнита для последующего расположения на игровом поле.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallEmpire}>Лучники востока: 1</button> 
                    <p className={classes.textRules}>Это кнопка выбора определённых войск в резерве, кликнув на неё вы можете выбрать данного юнита для последующего расположения на игровом поле.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallEmpire}>Следопыты востока: 1</button> 
                    <p className={classes.textRules}>Это кнопка выбора определённых войск в резерве, кликнув на неё вы можете выбрать данного юнита для последующего расположения на игровом поле.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonBigEmpire}>Старт</button> 
                    <p className={classes.textRules}>Это кнопка старта игры, начать игру можно только если на игровом поле установлен хотя бы один юнит.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonCell}>+</button> 
                    <p className={classes.textRules}>Это клетка на которую можно установить юнита.</p> 
                </div>

                </div>


                <div className={classes.blockRules}>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallEmpire}>Припарка: 1</button> 
                    <p className={classes.textRules}>Это кнопка припарки, нажав на нее, вы сможете восстановить всё здоровье предварительно выбранного юнита.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallEmpire}>Дисциплина</button> 
                    <p className={classes.textRules}>Эта кнопка повышает защиту всех эльфов запада.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallEmpire}>Ярость</button> 
                    <p className={classes.textRules}>Эта кнопка повышает атаку всех эльфов востока.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallEmpire}>Обстрел</button> 
                    <p className={classes.textRules}>Это кнопка навыка Лучников Запада. Нажав на неё, вы нанесёте средний урон юниту противника, который на данный момент совершает ход.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallEmpire}>Атака строем</button> 
                    <p className={classes.textRules}>Это кнопка навыка Мечников Запада. Нажав на неё, вы нанесёте средний урон юниту противника, совершающему ход, и слабый урон ближайшим к нему юнитам по горизонтали.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallEmpire}>Меткий выстрел</button> 
                    <p className={classes.textRules}>Это кнопка навыка Лучников Востока. Нажав на неё, вы нанесёте повышенный урон юниту противника, который на данный момент совершает ход, и уменьшите его защиту.</p> 
                </div>

                <div className={classes.miniBlockRules}>
                    <button className={classes.buttonSmallEmpire}>Истребление</button> 
                    <p className={classes.textRules}>Это кнопка навыка Следопытов Востока. Нажав на неё, вы нанесёте повышенный урон единице противника. Если целью атаки станет Ангалит, урон увеличится многократно.</p> 
                </div>

                </div>

                <button className={classes.closeButton} onClick={handleCloseRules}>Закрыть</button>

        </div>
    )
}