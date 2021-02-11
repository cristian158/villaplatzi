var vp = document.getElementById("canva");
var paper = vp.getContext("2d");

var bg = {
  url: "tile.png",
  loadOk: false
};

var cow = {
  url: "cow.png",
  loadOk: false
};

var chicken = {
  url: "chicken.png",
  loadOk: false
};

var pig = {
  url: "pig.png",
  loadOk: false
};

bg.imagen = new Image();
bg.imagen.src = bg.url;
bg.imagen.addEventListener("load", loadBackground);

cow.imagen = new Image();
cow.imagen.src = cow.url;
cow.imagen.addEventListener("load", loadCow);

chicken.imagen = new Image();
chicken.imagen.src = chicken.url;
chicken.imagen.addEventListener("load", loadChicken);

pig.imagen = new Image();
pig.imagen.src = pig.url;
pig.imagen.addEventListener("load", loadPig);

function loadBackground()
{
  bg.loadOk = true;
  draw();
}

function loadCow()
{
  cow.loadOk = true;
  draw();
}

function loadChicken()
{
  chicken.loadOk = true;
  draw();
}

function loadPig()
{
  pig.loadOk = true;
  draw();
}

function draw()
{
  if(bg.loadOk)
  {
    paper.drawImage(bg.imagen, 0, 0)
  }
  if(cow.loadOk)
  {
    var quantity = random(0, 3);
    for(var v=0; v < quantity; v++)
    {
      var x = random(0, 420);
      var y = random(0, 420);
      paper.drawImage(cow.imagen, x, y);
    }
  }
  if(chicken.loadOk)
  {
    var quantity = random(0, 3);
    for(var v=0; v < quantity; v++)
    {
      var x = random(0, 420);
      var y = random(0, 420);
      paper.drawImage(chicken.imagen, x, y);
    }

  }
  if(pig.loadOk)
  {
    var quantity = random(0, 3);
    for(var v=0; v < quantity; v++)
    {
      var x = random(0, 420);
      var y = random(0, 420);
      paper.drawImage(pig.imagen, x, y);
    }

  }
}

function random(min, max)
{
  outcome = Math.floor(Math.random() * (max - min + 1)) + min;
  return outcome;
}
