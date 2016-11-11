// Declare an interface that for a simple callback function.
interface speechCallback { (): void }

export function speak(text: string, callback: speechCallback) {
  if (speechSynthesis == undefined) {
    return false
  } else {
    let utterance = new SpeechSynthesisUtterance('Hello TypeScript!')
    speechSynthesis.speak(utterance)
    utterance.onend = (evt) => callback()
    return true
  }
}
