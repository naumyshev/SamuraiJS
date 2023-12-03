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
    },
    {
        original: 'Laptop',
        translation: 'ноутбук'
    },
    {
        original: 'Screen',
        translation: 'экран'
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

//alert(notificationMessages.start.hello)
document.write('<h3>', notificationMessages.start.hello, '</h3>', '<br>')
document.write('-------------------', '<br>')

for (let i = 0; i < words.length; i++) {
    let userAnswer = prompt(words[i].original)
    //alert(userAnswer === words[i].translation)
    document.write('English:      ',words[i].original, '<br>')
    document.write('Translation:  ',words[i].translation, '<br>')
    document.write('-------------------', '<br>')
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
