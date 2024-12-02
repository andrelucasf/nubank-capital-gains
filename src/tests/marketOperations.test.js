// const MarketOperationProcessorV2 = require("../calculators/MarketOperationProcessorV2");
const MarketOperationProcessorV2 = require("../MarketOperationProcessor");

describe("Market Operation Processor", () => {
  it("case 1: should calculate tax correctly for given operations", () => {
    const operations = [
      { operation: "buy", "unit-cost": 10.0, quantity: 100 },
      { operation: "sell", "unit-cost": 15.0, quantity: 50 },
      { operation: "sell", "unit-cost": 15.0, quantity: 50 },
    ];
    const processor = new MarketOperationProcessorV2();
    const result = operations.map((operation) =>
      processor.processOperation(operation)
    );
    const expectedResult = [{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }];
    expect(result).toEqual(expectedResult);
  });

  it("case 2: should calculate tax correctly for given operations", () => {
    const operations = [
      { operation: "buy", "unit-cost": 10.0, quantity: 10000 },
      { operation: "sell", "unit-cost": 20.0, quantity: 5000 },
      { operation: "sell", "unit-cost": 5.0, quantity: 5000 },
    ];
    const processor = new MarketOperationProcessorV2();
    const result = operations.map((operation) =>
      processor.processOperation(operation)
    );
    const expectedResult = [{ tax: 0.0 }, { tax: 10000.0 }, { tax: 0.0 }];
    expect(result).toEqual(expectedResult);
  });

  it("case 3: should calculate tax correctly for given operations", () => {
    const operations = [
      { operation: "buy", "unit-cost": 10.0, quantity: 10000 },
      { operation: "sell", "unit-cost": 5.0, quantity: 5000 },
      { operation: "sell", "unit-cost": 20.0, quantity: 3000 },
    ];
    const processor = new MarketOperationProcessorV2();
    const result = operations.map((operation) =>
      processor.processOperation(operation)
    );
    const expectedResult = [{ tax: 0.0 }, { tax: 0.0 }, { tax: 1000.0 }];
    expect(result).toEqual(expectedResult);
  });

  it("case 4: should calculate tax correctly for given operations", () => {
    const operations = [
      { operation: "buy", "unit-cost": 10.0, quantity: 10000 },
      { operation: "buy", "unit-cost": 25.0, quantity: 5000 },
      { operation: "sell", "unit-cost": 15.0, quantity: 10000 },
    ];
    const processor = new MarketOperationProcessorV2();
    const result = operations.map((operation) =>
      processor.processOperation(operation)
    );
    const expectedResult = [{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }];
    expect(result).toEqual(expectedResult);
  });

  it("case 5: should calculate tax correctly for given operations", () => {
    const operations = [
      { operation: "buy", "unit-cost": 10.0, quantity: 10000 },
      { operation: "buy", "unit-cost": 25.0, quantity: 5000 },
      { operation: "sell", "unit-cost": 15.0, quantity: 10000 },
      { operation: "sell", "unit-cost": 25.0, quantity: 5000 },
    ];
    const processor = new MarketOperationProcessorV2();
    const result = operations.map((operation) =>
      processor.processOperation(operation)
    );
    const expectedResult = [
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 10000.0 },
    ];
    expect(result).toEqual(expectedResult);
  });

  it("case 6: should calculate tax correctly for given operations", () => {
    const operations = [
      { operation: "buy", "unit-cost": 10.0, quantity: 10000 },
      { operation: "sell", "unit-cost": 2.0, quantity: 5000 },
      { operation: "sell", "unit-cost": 20.0, quantity: 2000 },
      { operation: "sell", "unit-cost": 20.0, quantity: 2000 },
      { operation: "sell", "unit-cost": 25.0, quantity: 1000 },
    ];
    const processor = new MarketOperationProcessorV2();
    const result = operations.map((operation) =>
      processor.processOperation(operation)
    );
    const expectedResult = [
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 3000.0 },
    ];
    expect(result).toEqual(expectedResult);
  });

  it("case 7: should calculate tax correctly for given operations", () => {
    const operations = [
      { operation: "buy", "unit-cost": 10.0, quantity: 10000 },
      { operation: "sell", "unit-cost": 2.0, quantity: 5000 },
      { operation: "sell", "unit-cost": 20.0, quantity: 2000 },
      { operation: "sell", "unit-cost": 20.0, quantity: 2000 },
      { operation: "sell", "unit-cost": 25.0, quantity: 1000 },
      { operation: "buy", "unit-cost": 20.0, quantity: 10000 },
      { operation: "sell", "unit-cost": 15.0, quantity: 5000 },
      { operation: "sell", "unit-cost": 30.0, quantity: 4350 },
      { operation: "sell", "unit-cost": 30.0, quantity: 650 },
    ];
    const processor = new MarketOperationProcessorV2();
    const result = operations.map((operation) =>
      processor.processOperation(operation)
    );
    const expectedResult = [
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 3000.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 3700.0 },
      { tax: 0.0 },
    ];
    expect(result).toEqual(expectedResult);
  });

  it("case 8: should calculate tax correctly for given operations", () => {
    const operations = [
      { operation: "buy", "unit-cost": 10.0, quantity: 10000 },
      { operation: "sell", "unit-cost": 50.0, quantity: 10000 },
      { operation: "buy", "unit-cost": 20.0, quantity: 10000 },
      { operation: "sell", "unit-cost": 50.0, quantity: 10000 },
    ];
    const processor = new MarketOperationProcessorV2();
    const result = operations.map((operation) =>
      processor.processOperation(operation)
    );
    console.log(result);
    const expectedResult = [
      { tax: 0.0 },
      { tax: 80000.0 },
      { tax: 0.0 },
      { tax: 60000.0 },
    ];
    expect(result).toEqual(expectedResult);
  });
});
