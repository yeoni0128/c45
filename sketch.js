var titleImg, rockImg, scissorImg, paperImg
var rock, scissor, paper, name, bg, resetButton
var dataBase
var gameState = 0
var playerCount = 0

function preload() {
  titleImg = loadImage("assets/RPS.png")
  rockImg = loadImage("assets/Rock.png")
  scissorImg = loadImage("assets/Scissors.png")
  paperImg = loadImage("assets/Paper.png")
  bg = loadImage("assets/bg.png")
  resetImg = loadImage("assets/reset.png")
}

function setup() {
  dataBase = firebase.database()
  getState()
  console.log(gameState)
  getPlayerCount()
  createCanvas(800, 600);
  if (gameState === 0) {
    showElements()
  }


}

function draw() {
  background("#13abb3")
  

}

function getState() {
  dataBase.ref("gameState").on("value", function (data) {
    gameState = data.val()
  })
}

function getPlayerCount() {
  dataBase.ref("playerCount").on("value", function (data) {
    playerCount = data.val()
  })
}
function showElements() {
  title = createImg("assets/RPS.png")
  title.position(width / 2 - 150, height / 2 - 200)
  input = createInput("").attribute("placeholder", "Enter your name")
  input.position(width / 2 - 100, height / 2 + 100)
  input.class("customInput")
  button = createButton("Play")
  button.position(width / 2 - 90, height / 2 + 200)
  button.class("customButton")

}
