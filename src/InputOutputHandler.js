const readline = require("readline");
const MarketOperationProcessor = require("./MarketOperationProcessor");
const MarketOperationProcessorV2 = require("./MarketOperationProcessor");

class InputOutputHandler {
  static readInput(callback) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let inputLines = [];
    rl.on("line", (line) => {
      if (line === "") {
        rl.close();
        callback(inputLines);
      } else {
        let formattedInput = JSON.parse(line);
        inputLines.push(formattedInput);
      }
    });
  }

  static processInput(input) {
    const processor = new MarketOperationProcessorV2();

    const results = input.map((operations) => {
      let taxResults = operations.map((operation) =>
        processor.processOperation(operation)
      );

      console.log(JSON.stringify(taxResults));
      return taxResults;
    });

    return results;
  }
}

module.exports = InputOutputHandler;
