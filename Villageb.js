var vp = document.getElementById("canva");
var paper = vp.getContext("2d");

function Player(address, state){
  this.url = address;
  this.loadOk = state;
}

var bg = new Player("bg.png", false)
var cow = new Player("cow.png", false)
var chicken = new Player("chicken.png", false)
var pig = new Player("pig.png", false)

var players = [];
players.push(bg, cow, chicken, pig);

players.forEach(myFunction);

function myFunction(valoare){
  valoare.imagen = new Image();
  valoare.imagen.src = valoare.url;
  valoare.imagen.addEventListener("load", draw)
}

//player.forEach(draw);

function draw()
{
  players.toString();
  for(i of players){
    if(i.loadOk = true)
    {
      var quantity = random(0, 3);
      for(var v=0; v < quantity; v++)
      {
        var x = random(0, 420);
        var y = random(0, 420);
        paper.drawImage(i.imagen, x, y);
      }
      console.log("ayyy");
    }
  }
  if(bg.loadOk)
  {
    paper.drawImage(bg.imagen, 0, 0)
  }
}

function random(min, max)
{
  outcome = Math.floor(Math.random() * (max - min + 1)) + min;
  return outcome;
}
