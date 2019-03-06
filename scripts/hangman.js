const puzzleEL = document.querySelector('#your-guess')
const guessEL = document.querySelector('#remaining-time')

let game1


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEL.innerHTML =''
    guessEL.textContent = game1.statusMsg

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEL.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Game(puzzle,5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()



// getCountry('SE').then((country)=> {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })

// getCurrentCountry.then((country) => {
//     console.log (country.name)
// }).catch((err) => {
//     console.log(err)
// })