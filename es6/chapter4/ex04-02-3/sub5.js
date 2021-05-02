function adjustBet(totalBet, funds) {
  switch (totalBet) {
    case 7:
      return funds;
    case 13:
      return 0;
    default:
      return totalBet;
  }
}