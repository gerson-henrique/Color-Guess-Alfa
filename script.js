const ballNumber = 6;
const resposta = document.getElementById('answer');

function load() {
  let memory = localStorage.getItem('lastScore');
  memory = parseInt(memory, 10);
  if (Number.isNaN(memory)) {
    document.getElementById('score').innerHTML = '0';
  } else {
    document.getElementById('score').innerHTML = memory;
  }
}
load();

function generateColors() {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (randomColor.length < 7) {
    randomColor += 0;
  }
  return randomColor;


function pontuation() {
  let hScore = document.getElementById('score').innerText;
  hScore = parseInt(hScore, 10) + 3;

  document.getElementById('score').innerText = hScore;
  localStorage.setItem('lastScore', hScore);
}
function HexToRGB() {
  const randomId = Math.floor(Math.random() * 6);
  const randomBall = document.getElementById(randomId);
  console.log(randomId);
  let hexdec = '';
  hexdec = randomBall.style.backgroundColor;
  let arrHexdec = '';
  arrHexdec = hexdec.split('');
  arrHexdec.shift();
  arrHexdec.shift();
  arrHexdec.shift();
  const presentationText = arrHexdec.join('');
  document.getElementById('rgb-color').innerText = presentationText;
  return randomBall.style.backgroundColor;
}
let mainColor;
function response(e) {
  const guessBall = document.getElementById(e.target.id);
  const ballBGC = guessBall.style.backgroundColor;

  if (ballBGC === mainColor) {
    resposta.innerText = 'Acertou!';
    pontuation();
  } else {
    resposta.innerText = 'Errou! Tente novamente!!';
  }

  console.log('yes');
}
function createBall() {
  for (let i = 0; i < ballNumber; i += 1) {
    let ballSelected = i;
    ballSelected = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(ballSelected);
    ballSelected.id = i;
    ballSelected.className = 'ball';
    ballSelected.addEventListener('click', response);
    const cor = [];
    cor[i] = generateColors();
    ballSelected.style.backgroundColor = cor[i];
  }
}
createBall();
mainColor = HexToRGB();
}

