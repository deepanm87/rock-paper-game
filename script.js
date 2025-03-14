import {choices} from '/data.js'

const playerScoreEl = document.getElementById('player-score')
const playerChoiceEl = document.getElementById('player-choice')
const computerScoreEl = document.getElementById('computer-score')
const computerChoiceEl = document.getElementById('computer-choice')
const resultText = document.getElementById('result-text')

const playerRock = document.getElementById('player-rock')
const playerPaper = document.getElementById('player-paper')
const playerScissors = document.getElementById('player-scissors')
const playerLizard = document.getElementById('player-lizard')
const playerSpock = document.getElementById('player-spock')

const computerRock = document.getElementById('computer-rock')
const computerPaper = document.getElementById('computer-paper')
const computerScissors = document.getElementById('computer-scissors')
const computerLizard = document.getElementById('computer-lizard')
const computerSpock = document.getElementById('computer-spock')

const allGameIcons = document.querySelector('.far')

function resetSelected() {
    allGameIcons.forEach( icon => {
        icon.classList.remove('selected')
    })
}

function checkResult() {
    resetSelected()

}

function select(playerChoice) {
    checkResult()
    switch(playerChoice) {
        case 'rock':
            playerRock.classList.add('selected')
            playerChoiceEl.textContent = '--- Rock'
            break
        case 'paper':
            playerPaper.classList.add('selected')
            playerChoiceEl.textContent = '--- Paper'
            break
        case 'scissors':
            playerScissors.classList.add('selected')
            playerChoiceEl.textContent = '--- Scissors'
            break
        case 'lizard':
            playerLizard.classList.add('selected')
            playerChoiceEl.textContent = '--- Lizard'
            break
        case 'spock':
            playerSpock.classList.add('selected')
            playerChoiceEl.textContent = '--- Spock'
            break
        default:
            break
    }
}

