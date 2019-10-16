const jsonYML = require("json-loader!yaml-loader!../path.yml");
const levels = jsonYML.Stages
const levelKeys = Object.keys(levels)
const maxLevel = levelKeys.length

var buttonElement
var titleElement
var itemElement

var index = 0

function getRandomItemFromLevel(levelIndex) {
  let list = levels[levelKeys[levelIndex]]
  return list[Math.floor((Math.random() * list.length))]
}

function displayItem (index) {
  titleElement.innerHTML = levelKeys[index]
  itemElement.innerHTML = getRandomItemFromLevel(index)
}

function setElements() {
  buttonElement = document.querySelector('#randomButton')
  titleElement = document.querySelector('#title')
  itemElement = document.querySelector('#level-item')
}

window.onload = () => {
  setElements()
  buttonElement.addEventListener('click', () => { 
    if(index < maxLevel) {
      displayItem(index)
      index++
    }
    else {
      if(buttonElement.innerHTML == 'Reset') {
        buttonElement.innerHTML = 'Journey onwards'
        index = 0
        displayItem(index)
      }
      else {
        titleElement.innerHTML = 'Stage'
        itemElement.innerHTML = ''
        buttonElement.innerHTML = 'Reset'
      }
    }
  })
};
