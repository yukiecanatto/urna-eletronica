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
    
    // VARIÁVEIS

    let 
    senhaMesario,
    voto,
    totalVotosCandidato1 = 0,
    totalVotosCandidato2 = 0,
    totalVotosCandidato3 = 0,
    totalVotosBranco = 0,
    totalVotosNulo = 0,
    totalVotos,
    resposta,
    ganhador,
    votosGanhador,
    nomeGanhador;

        
        
    // CONFIGURAÇÃO DA SENHA DE MESÁRIO
    do {
        senhaMesario = parseInt (prompt("Por favor, insira a senha do numérica de seis digitos de mesário"));
    }while(confirm("Está certo de que esta será a sua senha?") != true);


    // CONFIGURAÇÃO DOS NOMES DOS CANDIDATOS
    do {
        nomeCandidato1 = prompt("Digite o nome do candidato 1");
        nomeCandidato2 = prompt("Digite o nome do candidato 2");
        nomeCandidato3 = prompt("Digite o nome do candidato 3");
    
    }while(confirm("Os nomes dos candidatos estão corretos?" + " " + nomeCandidato1 + ", " + nomeCandidato2 + ", " + nomeCandidato3) != true);
     
    
    do {
            
        console.log("Iniciando o programa");
        
        console.log("|1| " + nomeCandidato1);
        console.log("|2| " + nomeCandidato2);
        console.log("|3| " + nomeCandidato3);
        console.log("|5| Branco");
        // console.log("|8| Nulo");
        // console.log("|123456| Encerrar votação");
        
        voto = parseInt(prompt("Digite a opção de voto"));   
        
        console.clear();
            
        if (voto === 1){
            if(confirm("Seu voto foi " + nomeCandidato1 + " confirme seu voto") !=false){
            totalVotosCandidato1++;
            console.log ("Candidato " + nomeCandidato1 + ", recebeu um voto");
            }

        } else if (voto === 2){
            if(confirm("Seu voto foi " + nomeCandidato2 + " confirme seu voto") !=false){
                totalVotosCandidato2++;
                console.log ("Candidato " + nomeCandidato2 + ", recebeu um voto");
                }

        }else if (voto === 3){
            if(confirm("Seu voto foi " + nomeCandidato3 + " confirme seu voto") !=false){
                totalVotosCandidato3++;
                console.log ("Candidato " + nomeCandidato3 + ", recebeu um voto");
                }

        }else if (voto === 5){
            if(confirm("Seu voto foi branco, confirme o voto") !=false){
            totalVotosBranco++;
            console.log ("O voto foi branco");
            }

        }else if(voto === senhaMesario){
            resposta = String(prompt("Tem certeza que deseja encerrar a votação [s/n]?"));
        }else{
            if(confirm("Voto Nulo, tem certeza?") != false){
            totalVotosNulo++;
            console.log ("O voto foi nulo");
            }
        }
        // }     
                
    }while(resposta != "s");
        
    
    // DETERMINAÇÃO DO GANHADOR    
    if (totalVotosCandidato1 > totalVotosCandidato2 && totalVotosCandidato1 > totalVotosCandidato3) {
        nomeGanhador = nomeCandidato1;
        votosGanhador = totalVotosCandidato1 + totalVotosBranco;
    } else if (totalVotosCandidato2 > totalVotosCandidato1 && totalVotosCandidato2 > totalVotosCandidato3) {
        nomeGanhador = nomeCandidato2;
        votosGanhador = totalVotosCandidato2 + totalVotosBranco;
    } else if (totalVotosCandidato3 > totalVotosCandidato1 && totalVotosCandidato3 > totalVotosCandidato2) {
        nomeGanhador = nomeCandidato3;
        votosGanhador = totalVotosCandidato3 + totalVotosBranco;
    } else {
        ganhador = false;
    }   
                   
    
    // APRESENTANDO OS RESULTADOS E EO VENCEDOR
    totalVotos = totalVotosCandidato1+totalVotosCandidato2+totalVotosCandidato3+totalVotosBranco+totalVotosNulo;
    console.log("Votação encerrada");
    console.log("Total e % de votos:");
    console.log("Candidato " + nomeCandidato1 + ": " + totalVotosCandidato1 + " voto(s) " + (totalVotosCandidato1/totalVotos*100).toFixed(2) + "%");
    console.log("Candidato " + nomeCandidato2 + ": " + totalVotosCandidato2 + " voto(s) " + (totalVotosCandidato2/totalVotos*100).toFixed(2) + "%");
    console.log("Candidato " + nomeCandidato3 + ": " + totalVotosCandidato3 + " voto(s) " + (totalVotosCandidato3/totalVotos*100).toFixed(2) + "%");
    console.log("Brancos: " + totalVotosBranco + " voto(s) " + (totalVotosBranco/totalVotos*100).toFixed(2) + "%");
    console.log("Nulos: " + totalVotosNulo + " voto(s) " + (totalVotosNulo/totalVotos*100).toFixed(2) + "%");

    console.log("#-----------#")

    if (ganhador = true) {
        console.log("O ganhador nesta urna foi o candidato " + nomeGanhador + " com " + votosGanhador + " voto(s)(votos do candidato + votos brancos) " + (votosGanhador / totalVotos * 100).toFixed(2) + "%)");
    } else {
        console.log("Não houve ganhador nesta urna (empate entre dois ou mais candidatos).");
    }
        
                    

            
    }