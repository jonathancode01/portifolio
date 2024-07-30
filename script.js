// #region calculadora
// let n1 = prompt("Adição: ");
// n1 = Number(n1);
// let n2 = prompt("Subtração: ");
// n2 = Number(n2);
// alert("A soma e: " + (n1 + n2));
// alert("A subtração e: " + (n1 - n2));
// alert("A multiplicação e: " + (n1 * n2));
// alert("A divisão e: " + (n1 / n2));

// #region media
// let numero = parseFloat(prompt("digite um numero: "));
// let numero2 = parseFloat(prompt("digite outro numero: "))
// let media = (numero + numero2) / 2;
// alert("A media " + media);

// #region resto da divisao
// let n = 10;
// n += 5;
// n*= 5;
// n++;
// alert("O resultado da divisão  de " + n + " por 6 e: " + (n % 6));
// alert("O resto da divisãode " + n + " por 6 e: " + (n % 6) ** 2);
// alert(n)
// n /= 4;
// alert(n)

// #region minuscula
// let jonathan = "Ow";
// jonathan += parseInt(jonathan); // atribuição +=
// alert(jonathan.toLowerCase()); // Colocar as letras minusculas "toLowCase"

// #region maior
// let numero1 = parseFloat(prompt("digite um numero de 0 a 10: "));
// let numero2 = parseFloat(prompt("digite outro numero de 0 a 10: "));
// // pra ser executado antes a operação logica, tem que colocar entre parenteses
// alert("numeoro 1 e maior retorne: true, senão for retorne false: " + (numero1 >= numero2))


// let num = parseInt(prompt("digite um numero de 0 a 10: "));
// let num2 = parseInt(prompt("digite outro numero de 0 a 10: "));
// let media = (num + num2) / 2;
// alert("A media e menor ou igual a 4? " + (media < 4 || num === 0 || num2 === 0)); 
// // caso um unico numero for 0 ele vai retornar false



// let n1 = parseInt(prompt("digite um numero de 0 a 10: "));
// let n2 = parseInt(prompt("digite outro numero de 0 a 10: "));
// let media = (n1 + n2) / 2;
// if (media > 4 && n1 > 0 && n2 > 0) {
//     alert("True")
// } else {
//     alert("False")
// }


// let n1 = parseInt(prompt("digite um numero de 0 a 10: "));
// let n2 = parseInt(prompt("digite outro numero de 0 a 10: "));
// //mostrar aprovado ou reprovado de acordo com a media 
// if (n1 <= 10 && n2 <= 10){
//     let media = (n1 + n2) / 2;
//      if (media > 4 && n1 > 0 && n2 > 0) {
//         alert("aprovado")
//     }else {
//         alert("reprovado")
//     }
// } else {
//     alert("digite o numero certo")
// }

// let n1 = parseFloat(prompt("digite um numero de 0 a 10: "))
// let n2 = parseFloat(prompt("digite outro numero de 0 a 10: "))

// if (n1 <= 10 && n2 <= 10 && n1 >= 0 && n2 >= 0) {
//     let media = (n1 + n2) / 2
//     if (media > 4 && n1 > 0 && n2 > 0) {
//         alert("Aprovado")
//     } else {
//         alert("Reprovado")
//     }
// } else {
//     alert("digite o numero certo")
// }

// #region letra n numero
// let n1 = parseInt(prompt("digite um numero de 0 a 10: "));
// let n2 = parseInt(prompt("digite outro numero de 0 a 10: "));
// if (n1 <= 10 && n2 <= 10 && n1 >= 0 && n2 >= 0 && !isNaN(n1) && !isNaN(n2) && n1 != "" && n2 != "") {
//     let media = (n1 + n2) / 2
//     if (media > 4 && n1 > 0 && n2 > 0) {
//         alert("Aprovado")
//     } else {
//         alert("Reprovado")
//     }
// } else {
//     alert("digite o numero certo")
// }

// switch case PARA DIAS DA SEMANA
// #region switch case
// let dia = prompt("digite um numero da semana: ");
// switch (dia) {
//     case "1":
//     alert("segunda");
//          break;
//      case "2":
//          alert("terca");
//          break;
//      case "3":
//          alert("quarta");
//          break;
//      case "4":
//          alert("quinta");
//          break;
//      case "5":
//          alert("sexta");
//          break;
//      case "6":
//          alert("sabado");
//         case "7":
//         alert("domingo");
//          break;
//      default:
//          alert("digite o dia certo");
// }

// #region Saber o tipo
// let data = 10;

// switch (typeof data) {
//     case "string":
//         alert("e uma string");
//         break;
//     case 'number':
//         alert("Numero");
//         break;
//     case 'nulo':
//         alert("nulo");
//         break
//     default:
// }

// let getag = parseFloat(prompt("Digite seu numero:"))

// if (!isNaN(getag)) {
    
//     let contador = 0
    
//     while(contador <= 20)   {  
//         document.write(getag + "x" + contador + ": " + getag * contador + "<br>")
//         contador++
//     }
//     document.write("break");
// } else {
//     document.write("BREAK");
// }


// let caca = parseFloat(prompt("Digite um numero:"));

// if (!isNaN(caca)) {
//     let contador = 0

//     while(contador <= 20) {
//         document.write(caca + "x" + contador + ": " + caca * contador + "<br>");

//         contador++
//     }
// }
// #region numero randomico 
// let n1 = parseInt(Math.random() * 6 + 1);
// let n2 = parseInt(Math.random() * 6 + 1);

// let contador = 0
// do{
//     console.log(n1, n2)
//     contador++
//     n1 = parseInt(Math.random() * 6 + 1 );
//     n2 = parseInt(Math.random() * 6 + 1 );

// }
// while (n1 !== n2) {
//     console.log(n1, n2)
//     contador++
//     n1 = parseInt(Math.random() * 6 + 1 );
//     n2 = parseInt(Math.random() * 6 + 1 );
// }
// console.log(contador);
// colocar uma linha apos uma dezena

// #region tabuada

// let n = parseFloat(prompt("Digite seu numero: "));

// for (let contador = 1; contador <= 1000; contador++) {
//     document.write(n + "x" + contador + ": " + n * contador + "<br>")
//      if (contador % 10 === 0 && contador > 0) {
//     document.write("<hr>");
// }
// }
// #region ano bissexto
// let n = parseFloat(prompt("Digite seu numero: "));
// let contador = 0; 

// for (let numero = 1004; numero <= 2024; numero += 4){
//     contador++
//     if (numero % 4 === 0 ) {
//         document.write("Ano " + numero + "<br>")
//     }
// }