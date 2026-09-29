/*
=========================================================
MASCARAS.JS - Patas em Casa
=========================================================

Este arquivo coloca máscaras nos campos do formulário.

Exemplos:
CPF       -> 123.456.789-00
Telefone  -> (11) 99999-9999
CEP       -> 00000-000

A máscara serve apenas para ajudar o usuário a preencher
os campos no formato esperado.
=========================================================
*/


/*
  Aplica uma máscara em um campo.

  campo  = input que será alterado
  modelo = formato desejado

  O símbolo # representa um número.

  Exemplo:
  "###.###.###-##"
  vira:
  123.456.789-00
*/
function aplicarMascara(campo, modelo) {

  // Remove tudo que não for número.
  var numeros = campo.value.replace(/\D/g, "");

  // Guarda o resultado que será mostrado no campo.
  var resultado = "";

  // Indica qual número da sequência já foi utilizado.
  var posicao = 0;

  // Percorre o modelo até preencher todos os números digitados.
  for (var i = 0; i < modelo.length && posicao < numeros.length; i++) {

    // Quando encontra #, coloca um número.
    if (modelo[i] === "#") {
      resultado = resultado + numeros[posicao];
      posicao = posicao + 1;
    } else {

      // Quando encontra outro símbolo, como ponto ou traço,
      // coloca esse símbolo no resultado.
      resultado = resultado + modelo[i];
    }
  }

  // Mostra o resultado formatado dentro do input.
  campo.value = resultado;
}


/*
  Localiza os campos do formulário pelo ID.
  Esses IDs estão definidos no arquivo cadastro.html.
*/
var cpf = document.getElementById("cpf");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");


/*
  CPF

  Sempre que o usuário digitar ou apagar alguma coisa,
  a máscara é aplicada novamente.
*/
cpf.addEventListener("input", function () {
  aplicarMascara(cpf, "###.###.###-##");
});


/*
  TELEFONE

  O telefone pode ter 10 números (fixo) ou 11 números (celular).
  Por isso verificamos a quantidade de números digitados.
*/
telefone.addEventListener("input", function () {

  var quantidade = telefone.value.replace(/\D/g, "").length;

  if (quantidade > 10) {
    aplicarMascara(telefone, "(##) #####-####");
  } else {
    aplicarMascara(telefone, "(##) ####-####");
  }
});


/*
  CEP

  Formato final:
  00000-000
*/
cep.addEventListener("input", function () {
  aplicarMascara(cep, "#####-###");
});
