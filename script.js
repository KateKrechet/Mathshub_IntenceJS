// //alert('Hello')

// //confirm('вы учите JS?')

// const skill=document.getElementById('skill')
// const islove=document.getElementById('islove')
// //const skillText=prompt('какой язык вы учите?','пока не в курсе')
// const isloveValue=confirm('вы любите изучаемый язык?')
// //skill.innerText=skillText
// islove.innerText=isloveValue

// let a="seven"
// a=7
// const b=8

// //string
// const  str1='I\'m oK'
// const  str2='Text'
// const  str3=`I'm say ${str1}`

// console.log(str1)
// console.log(str2)
// console.log(str3)

//NUMBER
//+-*/** 
// const num1=75+15
// alert(num1)
// console.log(typeof "5")
// const rem=7+8+"5"
// const rem1=7+8*"a"
// console.log(rem1)

// //BIGINT
// const bigint=103123123n
// console.log(bigint)

// //BOOLEAN
// //> < >= <= >== <== == ===
// const bool=10>5
// console.log(bool)


// //NULL
// let empty=null
// console.log(typeof empty)

// //UNDEFINED
// let box=undefined
// console.log(box,typeof box)

// //SYMBOL
// const uniq=Symbol('id')
// const uniq2=Symbol('id')
// console.log(uniq==uniq2)//false

// оператор присваивания
const variant = "option1"
//оператор сравнения по значению == и по зн и по типу ===
// console.log(5=="5")//true
// console.log(5==="5")//false
// console.log("abc">15)//должно быть по utf-8

// const userName = prompt("Who you are", "anonim")

// if (userName === "admin") {
//     alert("Hello,boss!")
// } else if (userName === "anonim"||!userName) {
//     alert("I dont know you!")
// } else {
//     alert(`Hi${userName}`)
// }
//идеальный счетчик
//  const counts=prompt("До скольки вы хотите досчитать?","20")
//  let i=10
// while(i<=counts){
//     console.log(i)
//     i+=1

// }

// do{
//     console.log(i)
//          i+=1//10 i=10
// }while(i<=counts)
// console.log(i)//11

// const arr=[]

// for(let i=1;i<=50;++i)
// {
//     arr.push(i)

// }
// //console.log(arr)
// const newArr=[]

// for(elem of arr){
//     const marker=elem%3
//     if(!marker){//массив из чисел которые делятся на 3 без остатка
//         newArr.push(elem)
//     }

// }
// console.log(newArr)

// const obj={
//     name:"Sasha",
//     age:25,
//     city:"Voronezh"
// }
// for(key in obj){
//     console.log(key,obj[key])

// }

//FUNCTION
// //declaration
// function scream(a,b){
//         return a*b
// }

// //expression
// const wowScream=function(){
//     alert("WOOOOW")
// }

// //arrow
// const arrow=()=>{
//     allert("arrow is in the sky")
// }
// console.log(scream(2,3))

//ИГРА
//Нажав на Начать, запускается игра: генерируется задача,
// пользователь может ввести ответ
//Должна появиться кнопка проверить
//При нажатии проверить - сравниваем ввод польз с ответом
//Вывести рез-т и правильное значение, сменить кнопку на начать заново

//функция формирования числа в диапазоне
const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1=getRandomNumInRange(0,100)
    // const randomNum2=getRandomNumInRange(0,100)

    // let symbol 
    // if(Math.random()>0.5){//генерируем числа от 0 до 1
    //     symbol="+"
    // }else {
    //     symbol="-"
    // }

    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)}${symbol}${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)//eval - выполняет мат.операции
    return task
}

// функция изменения состояний
const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
//console.log(gameElements)

const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]
//создаем объект, хранящий состояние нашей игры
const gameState = {
    taskInProcess: false,//решает пользователь сейчас задачу или нет
    rightAnswer: null,
}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        //генерировать задачу и ответ
        //показываю задачу пользователю
        userTask.innerText = getTask()
        userAnswer.hidden = false
        //меняю кнопку и меняю состояние
        btnGame.innerText = "Проверить!"
        toggleGameState()

    } else {
        //сравнить ответ пользователя  с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        //вывести результат и отдельно правильное значение
        userTask.innerText = userTask.innerText + "=" + gameState.rightAnswer
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        //поменять кнопку и состояние
        btnGame.innerText = "Начать заново!"
        toggleGameState()

    }
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startGameFunc()
    }
    else if (e.key === "Escape") {
        userAnswer.blur()
    }
})


//console.log(document)
//console.dir(document)
//const chooseEl=document.querySelector(".my_game")
//console.log(chooseEl)
const chooseEl = document.querySelectorAll(".choosed_block-container>div")

console.log(chooseEl)
console.log(chooseEl.length)

const counterEl = document.querySelector(".choosed_block span")
const chooseState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterEl.innerText = this.countElements
    }
}

const eventFunc = (e) => {
    //console.log("click")
    //выбрать элемент, т.е.выделить его с помощью класса
    //chooseEl[i].className="choosed_element"
    //e.target.className = "choosed_element"
    // запустить счетчик
    //counterEl.innerText = +counterEl.innerText + 1
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        chooseState.setCountValue(1)
    } else {
        e.target.className = ""
        chooseState.setCountValue(-1)
    }
}

for (let i = 0; i < chooseEl.length; i++) {
    //console.log(chooseEl[i])
    chooseEl[i].addEventListener("click", eventFunc)
}
//chooseEl[2].removeEventListener("click",eventFunc)



//Асинхронное выполнение
const timeIsOver = () => {
    alert("Время вышло")
}
//setTimeout(timeIsOver(),2000)


const alarm = setInterval(() => {
    let wantToSleep = confirm("Хотите ли вы спать?")
    if (wantToSleep) {

        console.log("tick")
    } else {
        clearInterval(alarm)
    }
}, 3000)

console.log("1")
setTimeout(()=>{
    console.groupCollapsed("2")
},0)

console.log("3")

