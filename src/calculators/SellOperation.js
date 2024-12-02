const TaxCalculator = require("./TaxCalculator");

class SellOperation {
  constructor(taxCalculator = new TaxCalculator()) {
    this.taxCalculator = taxCalculator;
  }

  process(operation, processor) {
    const { quantity, "unit-cost": unitCost } = operation;

    const totalValue = quantity * unitCost;
    const profitOrLoss = (unitCost - processor.avgPrice) * quantity;

    processor.totalShares -= quantity;

    const taxResult = this.taxCalculator.calculateProfitOrLoss(
      profitOrLoss,
      processor.totalLoss,
      totalValue
    );

    if (profitOrLoss < 0) {
      processor.totalLoss += Math.abs(profitOrLoss);
    } else {
      processor.totalLoss = Math.max(0, processor.totalLoss - profitOrLoss);
    }

    return taxResult;
  }
}

module.exports = SellOperation;
