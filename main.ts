import { Avatar } from "./Avatar.ts";
import prompt from "prompt-sync";

const teclado = prompt();

function limparTela() {
  console.clear();
}

function continuar() {
  teclado("\nPressione Enter para continuar...");
}

limparTela();
console.log("=============================================================");
console.log("                SEJA BEM-VINDO AO LABIRINTO                 ");
console.log("=============================================================\n");

let avatarNome = teclado("Qual será o nome do seu avatar? ");

var avatar = new Avatar();
avatar.nome = avatarNome;

let sair = false;

function status() {
  console.log("\n--- STATUS DO AVATAR ---");
  let mensagem = avatar.vida === 100 ? "Parabéns, você está saudável! :)" : "Cuidado, você está ferido!";
  console.table({
    Nome: avatar.nome,
    Vida: avatar.vida,
    Situação: mensagem
  });
}

limparTela();
console.log(`Muito bem, ${avatar.nome}! Sua jornada começa agora.\n`);

while (!sair && avatar.estaVivo()) {
  console.log("-------------------------------------------------------------");
  console.log("Sua escolha: por onde irá seguir sua jornada?");
  console.log("1 - Floresta Verdejante");
  console.log("2 - Deserto Desolado");
  console.log("3 - Descansar no acampamento");
  console.log("4 - Exibir status");
  console.log("5 - Mudar o nome");
  console.log("6 - Sair");
  
  let decisao = Number(teclado("Por onde seguir: "));

  switch (decisao) {
    case 1: {
      limparTela();
      console.log("Você adentrou a Floresta Verdejante...");
      console.log("Espinhos atingiram você! Perdeu 30 de vida.");
      avatar.receberDano(30);
      continuar();
      limparTela();
      break;
    }
    case 2: {
      limparTela();
      console.log("Você adentrou o Deserto Desolado...");
      console.log("O calor escaldante te esgotou! Perdeu 50 de vida.");
      avatar.receberDano(50);
      continuar();
      limparTela();
      break;
    }
    case 3: {
      limparTela();
      console.log("Você parou para descansar e recuperar suas energias...");
      avatar.curar = 30;
      console.log(`Vida atual de ${avatar.nome}: ${avatar.vida}`);
      continuar();
      limparTela();
      break;
    }
    case 4: {
      limparTela();
      status();
      continuar();
      limparTela();
      break;
    }
    case 5: {
      limparTela();
      let novoNome = teclado("Qual será o seu novo nome? ");
      avatar.nome = novoNome;
      console.log("Nome alterado com sucesso!");
      continuar();
      limparTela();
      break;
    }
    case 6: {
      sair = true;
      limparTela();
      console.log("Saindo da jornada...");
      break;
    }
    default: {
      limparTela();
      console.log("Opção inválida! Escolha um número de 1 a 6.");
      continuar();
      limparTela();
      break;
    }
  }
}

if (!avatar.estaVivo()) {
  console.log("\n=============================================================");
  console.log(`Game Over! ${avatar.nome} não resistiu aos perigos.`);
  console.log("=============================================================");
}