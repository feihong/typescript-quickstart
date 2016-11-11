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
