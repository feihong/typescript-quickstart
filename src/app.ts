import {triggerDebug} from './debug'
import {speak} from './speak'


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
  let printResult = (s: string) => $('#result').text(s)
  let success = speak(
    'Hello TypeScript!',
    () => printResult('Done speaking')
  )
  if (success) {
    printResult('Speaking...')
  } else {
    printResult('Speaking failed!')
  }
})

$('button.debug').on('click', triggerDebug)

$('button.json').on('click', (evt) => {
  $.get('movies.json', (data) => {
    let movies: Movie[] = data
    for (let movie of movies) {
      console.log(movie.title, movie.director, movie.year)
    }
    let titles = movies.map((m) => `${m.title} (${m.year})`)
    $('#result').text(`Got ${movies.length} movies: ${titles.join(', ')}`)
  })
})
