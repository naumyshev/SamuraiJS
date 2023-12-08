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

const showHelloMessage = (message) => {
    document.write('<h3>', message, '</h3>', '<br>')
    document.write('-------------------', '<br>')
}

const startTraining = (_words, _result) => {
    for (let i = 0; i < _words.length; i++) {
        let userAnswer = prompt(_words[i].original)
        //alert(userAnswer === words[i].translation)
        document.write('English:      ', _words[i].original, '<br>')
        document.write('Translation:  ', _words[i].translation, '<br>')
        document.write('-------------------', '<br>')
        if (userAnswer === _words[i].translation) {
            _result.correctAnswersCount++
        }
    }
}

const getPercentage = (_result, _words) => _result / _words * 100

const showResults = (_result, _words, _settings, _notificationMessages) => {
    let userCorrectAnswersPercent = getPercentage(_result.correctAnswersCount, _words.length)
    document.write('-------------------', '<br>')
    document.write('<b>', 'Total results: ', userCorrectAnswersPercent, ' %', '</b>')

    if (userCorrectAnswersPercent > _settings.correctAnswersMinPercent) {
        alert(_notificationMessages.result.finishSuccess)
    } else {
        alert(_notificationMessages.result.finishUnsuccess)
    }
}

//=======================


showHelloMessage(notificationMessages.start.hello)
startTraining(words, result)
showResults(result, words, settings, notificationMessages)


