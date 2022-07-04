var bola;
var jao

function setup(){
    createCanvas(600,600);
    bola = createSprite(200,200,30,30);
    jao = createSprite(200,200,30,30)

}




function draw(){
background("blue");


drawSprites();
 

if (keyDown("left")) {
    bola.x = bola.x  - 5;
}

if (keyDown("right")) {
    bola.x = bola.x  + 5;
}

if (keyDown("up")) {
    bola.y = bola.y   -5;
}


if (keyDown("down")) {
    bola.y = bola.y  + 5;
}



}
