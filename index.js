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

let totals = 100
let ordered = 50

const logInfo = (to = 0, or = 0) => {
    if (or > to) return console.log("На складе недостаточно твоаров!", `(totals =  ${or},  ordered = ${to})` )
    return console.log("Заказ оформлен, с вами свяжется менеджер", `(totals =  ${or},  ordered = ${to})`)
}


logInfo(totals, 20)
logInfo(totals, 80)
logInfo(totals, 130)


console.log('')
console.log('Задание 3')
console.log('робота із prompt, ведіть пароль у спливаюче вікно (пароль: jqueryismyjam)')

const ADMIN_PASSWORD = 'jqueryismyjam';
let message 

const inAdmin = () => {
    message = prompt(`ведіть пароль адміністратора \n пароль '${ADMIN_PASSWORD}'`)
    // console.log(p)
    if (message === null) return  alert('Отменено пользователем!')
    if (message === ADMIN_PASSWORD) return alert('Добро пожаловать!')
    return alert('Доступ запрещен, неверный пароль!')
}

 setTimeout(() => inAdmin(), 1000);






let credits = 23580
const pricePerDroid = 300

const purchase = () => {
    let totalPrice = prompt(`скільки купити "ремонтных дроидов"? ціна за 1шт-${pricePerDroid}, на рахунку ${credits}`)
    if (totalPrice === null) return console.log('Отменено пользователем!')

    if (totalPrice.trim() > 0) {

        console.log('')
        console.log('Задание 4')

        console.log(`Рахунок до операції = ${credits}`)        

        credits = credits - (totalPrice * pricePerDroid)
        if (credits < 0) console.log('Недостаточно средств на счету!')
        else console.log(`Вы купили ${totalPrice} дроидов, на счету осталось ${credits} кредитов.`)
    }
    

    
}
   
    setTimeout(() => purchase(), 6000);







    
const objPrices = [
    {name: 'Китай', price: 100},
    {name: 'Чили', price: 250},
    {name: 'Австралия', price: 170},
    {name: 'Индия', price: 80},
    {name: 'Ямайка', price: 120},
] 


const designer = (nam = 'не вказано', pri = 'не вказано') => {
    console.log('')
    console.log('Задание 5')
    return  console.log(`Доставка в ${nam} будет стоить ${pri} кредитов`)
}

const pass = (n = 1, s = ' ') => {    
    let pNext = s
    for (let i = 0; i < n; i++) {
        pNext += s        
    }
  return  pNext
}

const Designer = (obj) => {
    let elm = '\n'
    for (let i = 0; i < obj.length; i++) {
        elm += pass(30) + obj[i].name + '\n'
    }

    
    return elm
}

const totol = () => {
    
    const country = prompt(`вкажіть країну доставки \n країни в які доставка є: \n ${Designer(objPrices)}`)
    if (country === null) return console.log('Отменено пользователем!')
    // country = country
    // console.log('country = ', country)

    for (const element of objPrices) {
        const elem = element.name.toLocaleUpperCase()
        if (elem === country.toLocaleUpperCase()) {

            // console.log('elem = ', elem)        
            // console.log('country = ', country)

           return  designer(element.name, element.price)
        }
    }


    return console.log('В вашей стране доставка не доступна')



}


setTimeout(() => totol(), 7000);








let total = 0;
let bool = true

const inputNumeric = () => {

    if (bool) {
        console.log('')
        console.log('Задание 6')
        bool = !bool
     }
    
    
    const input = prompt(`введіть число, \n зараз це число = ${total}`)
    if (input === null) {
        console.log(`Общая сумма чисел равна ${total}`)
        return alert(`Общая сумма чисел равна ${total}`)
    }
    // console.log('num = ', num)


    // console.log('Number(num) = ', Number(num))


    // n = (Number(num)) ? `усе ок, тут число = ${num}` : `усе погано, тут строка = ${num}`
    // console.log(n)

 
    
    if (Number(input.trim())) {
        console.log(`успішно додано число = ${input}`)
        total += Number(input.trim())
        return inputNumeric()
    } else {
        console.log(`неможна додавати до числа строку '${input}'`)
        alert('Было введено не число, попробуйте еще раз')
        return inputNumeric()
    }
    
        
}

setTimeout(() => inputNumeric(), 9000);