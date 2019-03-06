class Game {
    constructor (word, times){
        this.word = word.toLowerCase().split('')
        this.times = times
        this.guessedLetters = []
        this.status = 'playing'
    }
    
    calculateStatus(){
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
    
        if (this.times === 0){
            this.status = 'failed'
        } else if (finished){
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get statusMsg(){
        if (this.status === 'playing'){
            return `You have ${this.times} guesses left`
        } else if (this.status === 'failed'){
            return `Nice try! The word is "${this.word.join('')}".`
        } else {
            return `Great work! You guessed the word!`
        }
    }

    get puzzle(){
        let str = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' '){
                str += letter
            }else{
                str += '*'
            }
        })
        return str
    }


    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing'){
            return
        }

        if (isUnique){
            this.guessedLetters.push(guess)
        }
        if (isUnique && isBadGuess ){
            this.times--
        }
        this.calculateStatus()
    }

}

