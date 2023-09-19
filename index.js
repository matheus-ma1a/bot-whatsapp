const venom = require('venom-bot');

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  // client.onMessage((message) => {
  //   if (message.body == 'Boa') {
  //     client
  //       .sendText(message.from, 'Welcome Venom 🕷')
  //       .then((result) => {
  //         console.log('Result: ', result); //return object success
  //       })
  //       .catch((erro) => {
  //         console.error('Error when sending: ', erro); //return object error
  //       });
  //   }
  // });

  const canal = '120363168815329941@g.us'

  let tempoFinalGlobal = ''
  let tempoInicialGlobal = ''

  function obterHoraAtualEAcrescentarMinutos(minutosParaAcrescentar) {
    const dataAtual = new Date();
    dataAtual.setMinutes(dataAtual.getMinutes() + minutosParaAcrescentar);
    const horaFormatada = String(dataAtual.getHours()).padStart(2, '0');
    const minutosFormatados = String(dataAtual.getMinutes()).padStart(2, '0');
    return horaFormatada + ':' + minutosFormatados
  }

  function gerarNumeroAleatorio(max, min) {

    const numeroAleatorio = Math.random();
    const numeroNoIntervalo = numeroAleatorio * (max - min) + min;
    const numeroFinal = Math.floor(numeroNoIntervalo);

    return numeroFinal;
  }

  function adicionarMinutos(horaOriginal, minutosParaAdicionar) {
    const partesDaHora = horaOriginal.split(":");

    if (partesDaHora.length !== 2) {
      // Certifique-se de que a string de entrada está no formato correto
      return "Formato de hora inválido. Use o formato 'hh:mm'.";
    }

    const horas = parseInt(partesDaHora[0], 10);
    const minutos = parseInt(partesDaHora[1], 10);

    if (isNaN(horas) || isNaN(minutos)) {
      // Certifique-se de que as horas e minutos sejam números válidos
      return "Formato de hora inválido. Use o formato 'hh:mm'.";
    }

    // Adicione os minutos fornecidos à hora original
    const novaHora = new Date(0, 0, 0, horas, minutos + minutosParaAdicionar);

    // Formate a nova hora manualmente no formato 'hh:mm'
    const horasFormatadas = String(novaHora.getHours()).padStart(2, '0');
    const minutosFormatados = String(novaHora.getMinutes()).padStart(2, '0');

    return `${horasFormatadas}:${minutosFormatados}`;
  }


  function horaMinutos2() {
    const expiryTime = 3; // tempo de expiração em minutos
    const now = new Date();
    const expiry = new Date(now.getTime() + 0 * 60 * 1000);
    const hours = String(expiry.getHours()).padStart(2, '0');
    const minutes = String(expiry.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`
  }

  presinal()

  function presinal() {


    setTimeout(() => {

      const numero = gerarNumeroAleatorio(8, 15)
      const tempoInicial = obterHoraAtualEAcrescentarMinutos(numero)
      const tempoFinal = obterHoraAtualEAcrescentarMinutos(gerarNumeroAleatorio(28, 31))

      tempoFinalGlobal = tempoFinal
      tempoInicialGlobal = tempoInicial

      client.sendText(canal, `
  🚨 Falta ${numero} minutos para ativar o nosso *HACK DENTRO DA CASA!*  🚨

  Como você está? Preparado para ganhar uma grana daqui 8 minutos? Já estou ansioso para jogarmos todos juntos 🔥

  ⏰ Horário da Sessão: *${tempoInicial} ÀS ${tempoFinal}*

  Enquanto aguardamos o sinal, aproveitem para realizar o cadastro na plataforma onde descobrimos esse *HACK DENTRO DA CASA* .

  📲 CLIQUE AQUI PARA SE REGISTRAR: bit.ly/registroflybet
    `)
      primeiraMsg(tempoInicial, tempoFinal, numero)
    }, gerarNumeroAleatorio(8, 15) * 60000)
  }

  function primeiraMsg(tempoInicial, tempoFinal, tempo) {


    setTimeout(() => {

      client.sendText(canal, `

  ✅ ENTRADA CONFIRMADA ✅

  🐯 FORTUNE TIGER ☘

  ⚠ Válido das ${tempoInicial} ÁS ${tempoFinal}

  ESTRATÉGIA 👇🏻

  📊Estratégia que vamos usar:
  ${gerarNumeroAleatorio(5, 19)}x R$0,40 [NORMAL]
  ${gerarNumeroAleatorio(5, 18)}x R$0,40 [TURBO]
  ${gerarNumeroAleatorio(4, 19)}x R$0,40 [AUTÓMATICO]


  🎁 CADASTRE-SE E GANHE ATÉ 200% DE BÔNUS NESSA PLATAFORMA.
  https://bit.ly/registroflybet

  📱 Jogar Fortune Tiger 🐯
  https://bit.ly/registroflybet

  ⚠ SINAL SÓ FUNCIONA NA PLATAFORMA ACIMA!

    `,)
    }, tempo * 60000)
  }

  setInterval(() => {
    const opcoes_texto1 = ["MEGA GANHO", "GRANDE GANHO", "SUPER GANHO", "SUPER MEGA GANHO", "GREEN"]
    const indiceAleatorio = Math.floor(Math.random() * opcoes_texto1.length);

    if (horaMinutos2() == tempoFinalGlobal) {

      client.sendText(
        canal, `

  🐯✅ GREEN NO FORTUNE TIGER ✅🐯

  RESULTADOS	


  ⏰ ${adicionarMinutos(tempoInicialGlobal, 5)}	✅💸 ${opcoes_texto1[indiceAleatorio]}
  ⏰ ${adicionarMinutos(tempoInicialGlobal, 8)}	✅💸 ${opcoes_texto1[indiceAleatorio]}
  ⏰ ${adicionarMinutos(tempoInicialGlobal, 10)}	✅💸 ${opcoes_texto1[indiceAleatorio]}
  ⏰ ${adicionarMinutos(tempoInicialGlobal, 7)}	✅💸 ${opcoes_texto1[indiceAleatorio]}

  🚨⚠ SESSÃO FINALIZADA ⚠🚨		 

  AGUARDE A PRÓXIMA SESSÃO E ME ENVIEM OS SEUS GANHOS NO PRIVADO 💥🥇		 

  📲 CLIQUE AQUI PARA CADASTRAR : https://bit.ly/registroflybet

          `)
      presinal()
    }

  }, 60000)


}






