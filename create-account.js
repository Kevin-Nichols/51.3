function createAccount(pin, amount = 0) {
  return {
    checkBalance(userPin) {
      if(userPin === pin) {
        return `$${amount}`
      } else {
        return "Invalid PIN."
      }
    },
    deposit(userPin, amountToDeposit) {
      if(userPin === pin) {
        amount += amountToDeposit;
        return `Successfully deposited $${amountToDeposit}. Current balance: $${amount}.`
      } else {
        return "Invalid PIN."
      }
    },
    withdraw(userPin, amountToWithdraw) {
      if(userPin === pin && amountToWithdraw <= amount) {
        amount -= amountToWithdraw;
        return `Successfully withdrew $${amountToWithdraw}. Current balance: $${amount}.`
      } else if(userPin === pin && amountToWithdraw > amount) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled."
      } else {
        return "Invalid PIN."
      }
    },
    changePin(oldPin, newPin) {
      if(oldPin === pin) {
        pin = newPin;
        return "PIN successfully changed!"
      } else {
        return "Invalid PIN."
      }
    }
  };
}

module.exports = { createAccount };
