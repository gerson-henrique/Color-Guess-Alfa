let balls = document.getElementsByClassName('ball')
let ballNumber = 6;

function createBall (){

  for (let i = 0; i < ballNumber; i += 1) {

    let ballSelected = i;
    ballSelected = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(ballSelected)

    ballSelected.className = "ball";


       let cor = [];
       cor[i] = generateColors()
      ballSelected.style.backgroundColor = cor[i]
      ballSelected.id = cor[i] ;
  }


}

function generateColors() {

  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);



  if (randomColor.length < 7) {

    randomColor += 0
  }
  // Minha contribuição para a formula que vez por outra retornava numeros quebrados

return randomColor;

  // - randomColor receve "#" concatenado com o arredondamento para baixo (Math.floor()) 
  //de um numero aleatorio entre zero e um  (math.random())
  //Multiplicado pelo numero possivel de cores (*16777215)
  //Tudo isso convertido a uma string de base Hexadecimal (toString(16))


  // Referencias para generateColors
  //https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
  //https://css-tricks.com/snippets/javascript/random-hex-color/
  //https://stackoverflow.com/questions/1484506/random-color-generator
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
}

createBall()