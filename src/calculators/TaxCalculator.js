class TaxCalculator {
  calculateProfitOrLoss(profitOrLoss, totalLoss, totalValue) {
    if (profitOrLoss < 0) {
      return { tax: 0.0 };
    }

    if (totalValue <= 20000) {
      return { tax: 0.0 };
    }

    const taxableProfit = Math.max(0, profitOrLoss - totalLoss);
    return { tax: taxableProfit * 0.2 };
  }
}

module.exports = TaxCalculator;
