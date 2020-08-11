async function start() {
  return await Promise.resolve("Async is working")
}

start().then(console.log)

// const unused = 55

class Utill {
  static id = Date.now()
}

console.log(Utill.id)

import('lodash').then(_ => console.log('Lodash', _.random(0, 24, true)))