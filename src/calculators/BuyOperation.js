class BuyOperation {
  process(operation, processor) {
    const { quantity, "unit-cost": unitCost } = operation;

    processor.avgPrice = this.calculateNewAvgPrice(
      quantity,
      unitCost,
      processor
    );
    processor.totalShares += quantity;

    return { tax: 0.0 };
  }

  calculateNewAvgPrice(quantity, unitCost, processor) {
    return (
      (processor.totalShares * processor.avgPrice + quantity * unitCost) /
      (processor.totalShares + quantity)
    );
  }
}

module.exports = BuyOperation;
