
const word0 = "whatsup"
const word1 = 'bye'
const word2 = 'programmer'

const word0Translation = "здарова"
const word1Translation = 'пока'
const word2Translation = 'программист'

const finishSuccessMessage = 'МОЛОДЕЦ!'
const finishUnsuccessMessage = "Давай получше"

let correctAnswersCount = 0
const wordCount = 3
const correctAnswersMinPercent = 50

const userAnswer0 = prompt(word0)
alert(userAnswer0 === word0Translation)
if (userAnswer0 === word0Translation) {
    correctAnswersCount++
}

const userAnswer1 = prompt(word1)
alert(userAnswer1 === word1Translation)
if (userAnswer1 === word1Translation) {
    correctAnswersCount++
}

const userAnswer2 = prompt(word2)
alert(userAnswer2 === word2Translation)
if (userAnswer2 === word2Translation) {
    correctAnswersCount++
}

let userCorrectAnswersPercent = correctAnswersCount / wordCount * 100

if ( userCorrectAnswersPercent > correctAnswersMinPercent) {
    alert(finishSuccessMessage)
} else {
    alert(finishUnsuccessMessage)
}