
var imgJardim,jardim;
var imgGato,imgGato2,imgGato3,gato;
var imgRato,imgRato2,imgRato3,rato

function preload() {
    imgJardim = loadImage("images/garden.png");
    imgGato = loadImage("images/cat1.png");
    imgRato = loadImage("images/mouse1.png");

    imgGato2 = loadAnimation("images/cat2.png","images/cat3.png");
    imgRato2 = loadAnimation("images/mouse2.png","images/mouse3.png");

    imgGato3 = loadImage("images/cat4.png");
    imgRato3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000, 800);

    jardim = createSprite(500,400);
    jardim.addImage(imgJardim);

    gato = createSprite(850, 600);
    gato.addImage(imgGato);
    gato.scale = 0.2;

    rato = createSprite(150, 600);
    rato.addImage(imgRato);
    rato.scale = 0.2;
}

function draw() {
    background(0);

    if(gato.x-rato.x < (gato.width-rato.width)/2){

        gato.velocityX = 0;
        gato.addAnimation("ultimaImagemGato", imgGato3);
        gato.changeAnimation("ultimaImagemGato");
        gato.x = 300;
        gato.scale = 0.2;

        rato.addAnimation("ultimaImagemRato", imgRato3);
        rato.changeAnimation("ultimaImagemRato");
      }

    drawSprites();
}

function keyPressed() {
    if(keyCode === LEFT_ARROW){
        rato.addAnimation("rato", imgRato2);
        rato.changeAnimation("rato");

        gato.velocityX = -5;
        gato.addAnimation("gato", imgGato2);
        gato.changeAnimation("gato");
        
    }

}
