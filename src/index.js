const InputOutputHandler = require("./InputOutputHandler");

InputOutputHandler.readInput(async (input) => {
  if (input) {
    await InputOutputHandler.processInput(input);
  }
});
