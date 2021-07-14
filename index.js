console.log('Задание 1')
let name = 'Генератор защитного поля'
let price = 1000

const log = (n = 'нічого', p = 'незазначено') => {

    if (n !== name) n += ' (назву змінено)'
    if (p !== price) p += ' (ціну змінено)'

    return `Выбран ${n}, цена за штуку ${p} кредитов`
}


console.log(log(name, price))

// price = 2000
console.log(log(name, 2000))


console.log('')
console.log('Задание 2')

let total = 100
let ordered = 50

const logInfo = (to = 0, or = 0) => {
    if (or > to) return console.log("На складе недостаточно твоаров!", `(total =  ${or},  ordered = ${to})` )
    return console.log("Заказ оформлен, с вами свяжется менеджер", `(total =  ${or},  ordered = ${to})`)
}


logInfo(total, 20)
logInfo(total, 80)
logInfo(total, 130)


console.log('')
console.log('Задание 3')
console.log('робота із prompt, ведіть пароль у спливаюче вікно (пароль: jqueryismyjam)')

const ADMIN_PASSWORD = 'jqueryismyjam';
let message 

const inAdmin = () => {
    message = prompt('ведіть пароль')
    // console.log(p)
    if (message === null) return  alert('Отменено пользователем!')
    if (message === ADMIN_PASSWORD) return alert('Добро пожаловать!')
    return alert('Доступ запрещен, неверный пароль!')
}

 setTimeout(() => inAdmin(), 1000);




console.log('')
console.log('Задание 4')

let credits = 23580
const pricePerDroid = 300

const purchase = () => {
    let totalPrice = prompt(`скільки купити "ремонтных дроидов"? ціна за 1шт-${pricePerDroid}, на рахунку ${credits}`)
    if (totalPrice === null) return console.log('Отменено пользователем!')

    if (totalPrice.trim() > 0) {

        console.log(`Рахунок до операції = ${credits}`)

        credits = credits - (totalPrice * pricePerDroid)
        if (credits < 0) console.log('Недостаточно средств на счету!')
        else console.log(`Вы купили ${totalPrice} дроидов, на счету осталось ${credits} кредитов.`)
    }
    

    
}


   
    setTimeout(() => purchase(), 6000);



console.log('')
console.log('Задание 5')

