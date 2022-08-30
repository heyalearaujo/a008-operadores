let num1 = prompt("Digite um número")
let num2 = prompt("Digite outro número")

let maior = num1 > num2
console.log(`O primeiro numero é maior que segundo?`, maior)

let igual = num1 === num2
console.log(`O primeiro numero é igual ao segundo?`, igual)

let divisivelnum1 = num1 % num2 == 0
console.log(`O primeiro numero é divisível pelo segundo?`, divisivelnum1)

let divisivelnum2 = num2 % num1 == 0
console.log(`O segundo numero é divisível pelo primeiro?`, divisivelnum2)