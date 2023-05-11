export const add = (a: number, b: number) => {
  return a + b
}

export const subtract = (a: number, b: number) => {
  return a - b
}

export const bankAccount = {
  income: 1000,
  expense: 500,
  getBalance() {
    return { balance: this.income - this.expense }
  }
}

