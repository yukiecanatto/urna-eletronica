// Estrutura: switch-case

// variável (opcao)

// Analisar uma variável(opcao)

//     caso seja 1:
//        escreva ("Opação é 1");
//        pare;
//     caso seja 2:
//        escreva ("Opação é 2");
//        pare;
//     caso contrário:
//        escreva ("Nenhuma das opções");
//        pare;




// A estrutura acima, mas em linguagem de programação:

// const opcao = 1;

// switch(opcao) {
//     case 1:
//         console.log ("Opação é 1");
//         break;
//     case 2:
//         console.log ("Opação é 2");
//         break;
//     default:
//         console.log ("Nenhuma das opções");
//         break;

// }


// // Equivalente "switch-case" em "if", "else if" e "else" 

// if (opcao === 1) {
//     console.log ("Opção 1");
// } else if (opcao === 2) {
//     console.log ("Opção 2");
// } else {
//     console.log ("Nenhuma das opções");
// }


// Estrutura de repetição; do-while (faça-enquanto)

// const opcao = 0;

// do {
//     console.log("Instrução 1");
//     console.log("Instrução 2");
//     console.log("Instrução 3");
//     console.log("Instrução 4");
//     console.log("Instrução 5");
//     console.log("Instrução 6");
// } while (opcao !== 0);


// Estrutura de repetição: while (enquanto)

// const opcao = 0;

// do while (opcao !== 0) {
//     console.log("Instrução 1");
//     console.log("Instrução 2");
//     console.log("Instrução 3");
//     console.log("Instrução 4");
//     console.log("Instrução 5");
//     console.log("Instrução 6");
// }


// Contador com do-while 

let contador = 0;

do {
    console.log("Instrução com contador em" , contador);
    contador += 1;
} while (contador >= 10);