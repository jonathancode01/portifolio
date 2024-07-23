// modelos de calculadora
// let n1 = prompt("Adição: ");
// n1 = Number(n1);
// let n2 = prompt("Subtração: ");
// n2 = Number(n2);
// alert("A soma e: " + (n1 + n2));
// alert("A subtração e: " + (n1 - n2));
// alert("A multiplicação e: " + (n1 * n2));
// alert("A divisão e: " + (n1 / n2));

// media
// let numero = parseFloat(prompt("digite um numero: "));
// let numero2 = parseFloat(prompt("digite outro numero: "))
// let media = (numero + numero2) / 2;
// alert("A media " + media);

// let n = 10;
// n += 5;
// n*= 5;
// n++;
// alert("O resultado da divisão  de " + n + " por 6 e: " + (n % 6));
// alert("O resto da divisãode " + n + " por 6 e: " + (n % 6) ** 2);
// alert(n)
// n /= 4;
// alert(n)

// let jonathan = "Ow";
// jonathan += parseInt(jonathan); // atribuição +=
// alert(jonathan.toLowerCase()); // Colocar as letras minusculas "toLowCase"

// let numero1 = parseFloat(prompt("digite um numero de 0 a 10: "));
// let numero2 = parseFloat(prompt("digite outro numero de 0 a 10: "));
// // pra ser executado antes a operação logica, tem que colocar entre parenteses
// alert("numeoro 1 e maior retorne: true, senão for retorne false: " + (numero1 >= numero2))

// let num = parseInt(prompt("digite um numero de 0 a 10: "));
// let num2 = parseInt(prompt("digite outro numero de 0 a 10: "));

// let media = (num + num2) / 2;

// alert("A media e menor ou igual a 4? " + (media < 4 || num === 0 || num2 === 0)); 
// // caso um unico numero for 0 ele vai retornar false



let n1 = parseInt(prompt("digite um numero de 0 a 10: "));
let n2 = parseInt(prompt("digite outro numero de 0 a 10: "));

let media = (n1 + n2) / 2;

if (media > 4){
    console.log("A media e maior que 4");
} else {
    console.log("Reprovado");
}
