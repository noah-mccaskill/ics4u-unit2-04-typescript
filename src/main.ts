/**
 * The program uses the NoahStack
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-10-23
 */

import NoahStack from './noahStack'
import promptSync from 'prompt-sync'

// this function uses the NoahStack
const prompt = promptSync()
const stackNumber = new NoahStack()

try {
  // input
  while (true) {
    const userInput = Number(prompt('Enter a number: '))

    if (isNaN(userInput)) {
      throw new Error('\nThat is an invalid number.')
    } else if (userInput === -1) {
      console.log(stackNumber.StackArray())
      console.log(stackNumber.popClass())
      console.log(stackNumber.StackArray())
      break
    } else if (userInput === -2) {
      console.log(stackNumber.StackArray())
      console.log(stackNumber.peekClass())
      console.log(stackNumber.StackArray())
      break
    } else if (userInput === -3) {
      console.log(stackNumber.StackArray())
      console.log(stackNumber.clearClass())
      console.log(stackNumber.StackArray())
    } else {
      stackNumber.pushClass(userInput)
    }
  }
} catch (e) {
  console.log('\nThat is an invalid input.')
}

console.log('\nDone.')
