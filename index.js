// document.getElementById("count-el").innerText = 5;
// var nome = "Alberico Fagundes";
// var idade = 44;
// var idade2 = 10;
// var soma = idade + idade2;

// var frase = "japao melhor time do mundo";
// // alert(nome +" tem "+ idade + " anos ");

// console.log(idade);
// console.log(idade2);
// console.log(idade / idade2);
// console.log(" a soma das idade é "+ soma );
// console.log(frase.toLocaleUpperCase());
// console.log(frase);
// console.log(" texto modificado por replace é :" + frase.toLocaleUpperCase().replace("japao","brasil"))

// let count = 0;
// console.log(count);

// let myAge = 44;

// console.log(myAge);


// var lista = ["maçã","pêra","laranja"];
// console.log(lista);
// lista.push("uva");
// console.log(lista);
// // lista.pop();
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());


// let count = 5*7;
// console.log(count);



// var myAge = 44;
// var humanDogRatio = 7;

// var myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints -75 ;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);


// function increment(){
//     console.log("button was cliqued");
// // }

// function countdown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// // setting up the race

// countdown();

// //go
// //race
// //end race
// // setting new race

// countdown();

// function logAnumber(){

//     let number = 42;

//     console.log(number);
// }

// logAnumber();


// function lapsTime(){
//     let lap1 = 34;
//     let lap2 = 33;
//     let lap3 = 36;

//     console.log(lap1+lap2+lap3);
// }

// lapsTime();

// let lapsCompleted = 0;

// function incrementLaps(){

//    lapsCompleted = lapsCompleted + 1;

// }

// incrementLaps();
// incrementLaps();
// incrementLaps();


// console.log(lapsCompleted);

// let count = 0;

// function increment (){
//     count = count + 1;   
//     console.log(count);
//     document.getElementById("counter").innerText = count;
// }


// let counter = document.getElementById("count-el")

// console.log(counter);

// let count = 0;

// function increment (){
//     count = count + 1;   
//     console.log(count);
//     counter.innerText = count;
// }



// countEl = document.getElementById("count-el");

// let count = 0;

// console.log(countEl);

// function increment(){
// count = count + 1;

// countEl.innerText = count;

// }


// function save(){
  
//     console.log(count);
// }


// function msg(){
//     let userName = "Alberico";
    
// let message = "you have three new notifications";
// messageToUser =  userName + " , " + message + "!"
// console.log(messageToUser);
// }

// msg();

// let nome = "Alberico";
// let greeting = "Hi, my name is";
// let myGreetings = greeting + " " + nome ;

// console.log(myGreetings);


// let welcomeEl = document.getElementById("welcome-el");

// let name = "Alberico ";
// let greeting = "Hello World! "

// welcomeEl.innerText = name + greeting ;

// let saveEl = document.getElementById("save-el");
// let countEl = document.getElementById("count-el");
// let count = 0;

// console.log(saveEl);

// function increment(){
//     count += 1;
//     console.log(count);
//     countEl.textContent = count;

// }



// function save(){
//     let countStr = " " + count + " - ";
//     saveEl.textContent += countStr;

//     count = 0 ;

//     let zeroCount = document.getElementById("count-el");
//     zeroCount.textContent = count;

//     console.log(zeroCount);  

// }

// let test = document.getElementById("ang-name").innerText;




// console.log(test);



let resultado = fizzBuzz(22);
console.log(resultado);


function fizzBuzz(entrada){

    if (typeof entrada !== 'number')
    return 'Não é um número';

    if ((entrada % 3 ===0)&&(entrada % 5 === 0))
    return 'FizzBuzz';

    if(entrada % 3 === 0)
    return 'Fizz';

    if(entrada % 5 ===0)
    return 'Buzz';

   return entrada;
}





