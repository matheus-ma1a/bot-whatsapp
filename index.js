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
  client.onMessage((message) => {
    if (message.body == 'Oi') {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });

  setInterval(() => {


    const arrayChute = ["💣", "💣", "💣", "💣", "⭐️", "💣", "💣", "💣", "💣", "⭐️", "💣", "💣", "💣", "💣", "⭐️", "💣", "💣", "💣", "💣", "⭐️", "💣", "💣", "💣", "💣", "⭐️",];

    let currentArray = arrayChute.slice().sort(() => Math.random() - 0.5);
    let previousArray = [];
    do {
      currentArray = currentArray.sort(() => Math.random() - 0.5);
    } while (currentArray.toString() === previousArray.toString());

    previousArray = currentArray.slice();
    const expiryTime = 2; // tempo de expiração em minutos
    const now = new Date();
    const expiry = new Date(now.getTime() + expiryTime * 60 * 1000);
    const hours = String(expiry.getHours()).padStart(2, '0');
    const minutes = String(expiry.getMinutes()).padStart(2, '0');

    client
      .sendText('120363152231861042@g.us',
        `
      🎲 Entrada confirmada 🎲 🥇: Entrada 
  
      ${currentArray[0]}${currentArray[1]}${currentArray[2]}${currentArray[3]}${currentArray[4]}
      ${currentArray[5]}${currentArray[6]}${currentArray[7]}${currentArray[8]}${currentArray[9]}
      ${currentArray[10]}${currentArray[11]}${currentArray[12]}${currentArray[13]}${currentArray[14]}
      ${currentArray[15]}${currentArray[16]}${currentArray[17]}${currentArray[18]}${currentArray[19]}
      ${currentArray[20]}${currentArray[21]}${currentArray[22]}${currentArray[23]}${currentArray[24]}
  
      🎮: Tentativas: 2
      📲: Plataforma correta: https://track.luck.bet/visit/?bta=35057&brand=luckbet
      💥: 5 minas
      👉🏻: Link do jogo:https://luck.bet/casino/game/1686857
      ⏱️ Válido até : ${hours}:${minutes}
      `)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
  }, 300000)
}






