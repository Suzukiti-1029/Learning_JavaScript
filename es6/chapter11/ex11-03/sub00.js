function billPay(amount, payee, account) {
  if (amount > account.balance) {
    throw new Error('残高不足');
  }
  account.transfer(payee, amount);
}

const amount = 1000;
const payee = 0;
const account = {
  balance: 100,
  transfer: (pay, a) => {
    pay += a;
  },
};

billPay(amount, payee, account);
