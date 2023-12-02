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


for (let i = 0; i < words.length; i++) {
    let userAnswer = prompt(words[i].original)
    alert(userAnswer === words[i].translation)
    if (userAnswer === words[i].translation) {
        result.correctAnswersCount++
    }
}

let userCorrectAnswersPercent = result.correctAnswersCount / words.length * 100

if (userCorrectAnswersPercent > settings.correctAnswersMinPercent) {
    alert(notificationMessages.result.finishSuccess)
} else {
    alert(notificationMessages.result.finishUnsuccess)
}
