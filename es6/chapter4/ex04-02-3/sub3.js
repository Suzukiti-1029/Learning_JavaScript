switch (totalBet) {
  case 7:
    totalBet = funds;
    break;
  case 13:
    funds = funds - 1;
  case 11:
    totalBet = 0;
    break;
  case 21:
    totalBet = 21;
    break;
}
