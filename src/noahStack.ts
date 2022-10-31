/**
 * This class creates an integer stack
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-10-23
 */

class NoahStack {
  private readonly stackAsList: number[] = []

  public pushClass(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  public popClass(): number | undefined {
    return this.stackAsList.pop()
  }

  public peekClass(): number | undefined {
    return this.stackAsList[this.stackAsList.length - 1]
  }

  public clearClass(): void {
    this.stackAsList.length = 0
  }

  StackArray(): void {
    console.log(this.stackAsList)
  }
}

export = NoahStack
