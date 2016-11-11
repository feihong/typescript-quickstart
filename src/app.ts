interface Movie {
  title: string,
  director: string,
  year: number,
}

const greetings = [
  'Hello World',
  'Hola Mundo',
  'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ',
  'こんにちは世界',
  '你好世界',
  'Përshendetje Botë',
  'مرحبا بالعالم',
  'Բարեւ, աշխարհ',
  'হ্যালো দুনিয়া',
  'Saluton mondo',
  'გამარჯობა მსოფლიო',
]


$('#message').text('Hello World!')

$('button.greeting').on('click', (evt) => {
  let index = Math.floor(Math.random() * greetings.length)
  let text = greetings[index]
  $('#message').text(text)
})

$('button.speak').on('click', (evt) => {
  if (window.speechSynthesis == undefined) {
    $('#result').text('Web Speech API was not detected')
  } else {
    $('#result').text('Speaking...')
    let utterance = new SpeechSynthesisUtterance('Hello TypeScript!')
    speechSynthesis.speak(utterance)
    utterance.onend = (evt) => $('#result').text('Done speaking')
  }
})

$('button.debug').on('click', (evt) => {
  $('#result').text('before debug')
  debugger
  $('#result').text('after debug')
})
