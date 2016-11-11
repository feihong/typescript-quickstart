export function triggerDebug() {
  console.log('before  debug')
  let date = new Date()
  debugger
  console.log(`after debug: ${date}`)
}
