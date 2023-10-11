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

// let contador = 0;

// do {
//     console.log("Instrução com contador em" , contador);
//     contador += 1;
// } while (contador >= 10); 


function urnaEletronica() {

    // Aqui vai todo o código do programa.... 

    

    let 
        voto,
        totalVotosCandidato1 = 0,
        totalVotosCandidato2 = 0,
        totalVotosCandidato3 = 0,
        totalVotosBranco = 0,
        totalVotosNulo = 0;
    

    do {

        // instruções
    console.log("Iniciando o programa");
    console.log("|1|Candidato 1")
    console.log("|2|Candidato 2")
    console.log("|3|Candidato 3")
    console.log("|5|Branco")
    console.log("|8|Nulo")
    console.log("|0|Encerrar votação")

    voto = parseInt(prompt("Digite a opção de voto"));

    switch(voto) {
        case 1:
            totalVotosCandidato1++;
            console.log ("Candidato 1 recebeu um voto");
            break;

        case 2:
            totalVotosCandidato2++;
            console.log ("Candidato 2 recebeu um voto");
            break;

        case 3:
            totalVotosCandidato3++;
            console.log ("Candidato 3 recebeu um voto");
            break;

        case 5:
            totalVotosBranco++;
            console.log ("O voto foi branco");
            break;

        case 8:
            totalVotosNulo++;
            console.log ("O voto foi nulo");
            break;

        case 0:
            console.log ("Votação encerrada");
            break;

        default:
            return;
    }     
        


    }while(voto !== 0);

    
}
