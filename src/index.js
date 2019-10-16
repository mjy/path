const jsonYML = require("json-loader!yaml-loader!../path_stub.yml");
const levels = jsonYML.Stages
const levelKeys = Object.keys(levels)
const maxLevel = levelKeys.length

var index = 0

function getRandomItemFromLevel(levelIndex) {
  let list = levels[levelKeys[levelIndex]]
  return list[Math.floor((Math.random() * list.length))]
}

function displayItem (index) {
  document.querySelector('#title').innerHTML = levelKeys[index]
  document.querySelector('#level-item').innerHTML = getRandomItemFromLevel(index)
}

window.onload = () => {
  document.querySelector('#randomButton').addEventListener('click', () => { 
    if(index < maxLevel) {
      displayItem(index)
      index++
    }
  })
};