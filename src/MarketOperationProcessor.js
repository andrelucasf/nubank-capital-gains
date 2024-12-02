const BuyOperation = require("./calculators/BuyOperation");
const SellOperation = require("./calculators/SellOperation");

class MarketOperationProcessor {
  constructor() {
    this.totalShares = 0;
    this.avgPrice = 0;
    this.totalLoss = 0;

    this.operationStrategies = {
      buy: new BuyOperation(),
      sell: new SellOperation(),
    };
  }

  processOperation(operation) {
    const strategy = this.operationStrategies[operation.operation];

    if (!strategy) {
      throw new Error(`Operation "${operation.operation}" is not supported.`);
    }

    return strategy.process(operation, this);
  }
}

module.exports = MarketOperationProcessor;
