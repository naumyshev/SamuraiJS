

const words = [
    {
        original: 'Wassup',
        translation: "здарова"
    },
    {
        original: 'bye',
        translation: 'пока'
    },
    {
        original: 'programmer',
        translation: 'программист'
    }
]

// const vocabulary = {
//     words: {
//         word0:
//         word1:
//         word2:
//     },
//     wordCount: 3
// }

const notificationMessages = {
    start: {
        hello: 'Hello! Good luck!!!'
    },
    result: {
        finishSuccess: 'МОЛОДЕЦ!',
        finishUnsuccess: "Давай получше!"
    }
}

const settings = {
    correctAnswersMinPercent: 50
}

const result = {
    correctAnswersCount: 0
}

//=======================

alert(notificationMessages.start.hello)

const userAnswer0 = prompt(words[0].original)
alert(userAnswer0 === words[0].translation)
if (userAnswer0 === words[0].translation) {
    result.correctAnswersCount++
}

const userAnswer1 = prompt(words[1].original)
alert(userAnswer1 === words[1].translation)
if (userAnswer1 === words[1].translation) {
    result.correctAnswersCount++
}

const userAnswer2 = prompt(words[2].original)
alert(userAnswer2 === words[2].translation)
if (userAnswer2 === words[2].translation) {
    result.correctAnswersCount++
}

let userCorrectAnswersPercent = result.correctAnswersCount / words.length * 100

if ( userCorrectAnswersPercent > settings.correctAnswersMinPercent) {
    alert(notificationMessages.result.finishSuccess)
} else {
    alert(notificationMessages.result.finishUnsuccess)
}
