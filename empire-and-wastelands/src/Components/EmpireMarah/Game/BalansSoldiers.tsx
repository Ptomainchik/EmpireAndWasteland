export const Soldiers = () => {

const SoldiersOfWasteland = {
            Hero: {
                call: "Призыв - поднимает атаку всех юнитов ангалов!!! WastelandGame",
                duty: "Долг крови - слабая атака по всем юнитам противника!!! WastelandGame",
            },
            Hunter:{
                name: "Охотники",
                health: 100,
                attack: 12,
                defense: 3,
                first: false,
                baf: null,
                skill: "Разделка - удвоенная атака по выбраному юниту!!!  WastelandGame ",
                price: 50,
                priority: 1,
            },
            Javelin:{
                name: "Метатели",
                health: 150,
                attack: 15,
                defense: 4,
                first: false,
                baf: null,
                skill: "Бросок - усиленная атака по выбраному юниту и малое уменьшение его защиты!!!  WastelandGame ",
                price: 70,
                priority: 3,
            },
            Maces:{
                name: "Булавоносцы",
                health: 250,
                attack: 20,
                defense: 5,
                first: false,
                baf: "Меньший урон от атак Мечников запада!!!   EmpireGame",
                skill: "Удар - слегка усиленная атака по выбраному юниту и среднее уменьшение его защиты!!!  WastelandGame ",
                price: 100,
                priority: 2,
            },
            Angalit:{
                name: "Ангалиты",
                health: 300,
                attack: 30,
                defense: 5,
                first: false,
                baf: "Игнорирование защиты противника!!!  EmpireGame",
                skill: "Безумие - средне усиленная атака по выбраному юниту, а ближайшие юниты по горизонтали так-же получают малый урон!!!  WastelandGame ",
                price: 150,
                priority: 4,
            },
    };


const SoldiersOfEmpire = {
            Hero: {
                keepInLine: "Дисциплина - средне повышает защиту всех эльфов запада!!! EmpireGame",
                fury: "Ярость - средне повышает атаку всех эльфов востока!!! EmpireGame",
            },
            WastArcher:{
                name: "Лучники запада",
                health: 80,
                attack: 10,
                defense: 4,
                first: true,
                baf: "Ответ от первой атаки!!!  WastlelandGame",
                skill: "Залп - средний урон по выбраному юниту!!! EmpireGame",
                price: 35,
                priority: 1,
            },
            WestSwordsman:{
                name: "Мечники запада",
                health: 130,
                attack: 15,
                defense: 5,
                first: false,
                baf: "Уменьшеный урон от атак Метателей!!!  WastlelandGame ",
                skill: "Атака строем - слегка усиленная атака по выбраному юниту, а ближайшие юниты по горизонтали так-же получают малый урон!!!  EmpireGame ",
                price: 75,
                priority: 3,
            },
            EastArcher:{
                name: "Лучники востока",
                health: 150,
                attack: 25,
                defense: 4,
                first: true,
                baf: "Ответ от первой атаки!!!    WastlelandGame",
                skill: "Меткий выстрел - сильно повышенная атака по выбраному юниту и слабое понижение защиты у него!!! EmpireGame ",
                price: 90,
                priority: 2,
            },
            EastPathfinder:{
                name: "Следопыты востока",
                health: 250,
                attack: 30,
                defense: 4,
                first: false,
                baf: "Невидимость до первой собственной атаки!!!    WastlelandGame",
                skill: "Истребление - если цель является Ангалитом, то Следопыты востока наносят колосальный урон, иначе юнит получает средний урон!!! EmpireGame",
                price: 140,
                priority: 4,
            },
    };

    const Poultice = {
        poultice: {
            price: 50,
        }
    }
    return (
        <p>
            НЕ ЗАБУДЬ УДАЛИТЬ СПИСКИ ЮНИТОВ!!!
        </p>
    )
     
      
    
        
    
};