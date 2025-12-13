let img;
let canvas;
let objects = [];
let modelStatus = false;
let objectDetector;



function preload() {
    img = loadImage('dog-cat.jpg');
}

function setup() {
    canvas = createCanvas(img.width, img.height);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detectando objetos";

}

function draw() {
    image(img, 0, 0, 640, 420)
    fill(255, 0, 0);
    text("Dog", 45, 75)
    noFill()
    stroke(255, 0, 0)
    rect(30, 60, 450, 350)
}

function modelLoaded() {
    console.log("Modelo Carregado");
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}

function gotResult() {
    
}