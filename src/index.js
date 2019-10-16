const jsonYML = require("json-loader!yaml-loader!../path.yml");
const levels = jsonYML.Stages
const levelKeys = Object.keys(levels)
const maxLevel = levelKeys.length

var buttonElement
var titleElement
var itemElement

var index = 0

function getRandomItemFromLevel(list) {
  return list[Math.floor((Math.random() * list.length))]
}

function displayItem (index) {
  titleElement.innerHTML = levelKeys[index]
  itemElement.innerHTML = getRandomItemFromLevel(levels[levelKeys[index]])
}

function setElements() {
  buttonElement = document.querySelector('#randomButton')
  titleElement = document.querySelector('#title')
  itemElement = document.querySelector('#level-item')
  grailButtonElement = document.querySelector('#grail-button')
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
    }
    if(index == maxLevel) {
      grailButtonElement.classList.remove('d-none')
      buttonElement.innerHTML = 'Reset'
      buttonElement.classList.add('d-none')
    }
  })
  grailButtonElement.addEventListener('click', () => {
    buttonElement.innerHTML = 'Reset'
    grailButtonElement.classList.add('d-none')
    buttonElement.classList.remove('d-none')
    titleElement.innerHTML = 'Grail found!'
    itemElement.innerHTML = getRandomItemFromLevel(jsonYML.Grails)
  })
};
