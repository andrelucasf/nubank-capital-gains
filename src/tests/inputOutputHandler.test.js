jest.mock("readline");

const readline = require("readline");
const InputOutputHandler = require("../InputOutputHandler");

describe("Input Output Handler - processInput", () => {
  it("deve processar corretamente as operações e calcular impostos", () => {
    const input = [
      [
        { operation: "buy", "unit-cost": 10.0, quantity: 100 },
        { operation: "sell", "unit-cost": 15.0, quantity: 50 },
        { operation: "sell", "unit-cost": 15.0, quantity: 50 },
      ],
    ];

    const expectedOutput = [[{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }]];

    const result = InputOutputHandler.processInput(input);
    expect(result).toEqual(expectedOutput);
  });

  it("deve processar corretamente as operações e calcular impostos", () => {
    const input = [
      [
        { operation: "buy", "unit-cost": 10.0, quantity: 100 },
        { operation: "sell", "unit-cost": 15.0, quantity: 50 },
        { operation: "sell", "unit-cost": 15.0, quantity: 50 },
      ],
      [
        { operation: "buy", "unit-cost": 10.0, quantity: 10000 },
        { operation: "sell", "unit-cost": 20.0, quantity: 5000 },
        { operation: "sell", "unit-cost": 5.0, quantity: 5000 },
      ],
    ];

    const expectedOutput = [
      [{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }],
      [{ tax: 0.0 }, { tax: 10000.0 }, { tax: 0.0 }],
    ];

    const result = InputOutputHandler.processInput(input);
    expect(result).toEqual(expectedOutput);
  });
});

describe("InputOutputHandler - readInput", () => {
  it("deve ler corretamente os dados e retornar no callback", (done) => {
    const mockInput = [
      '[{"operation":"buy","unit-cost":10.0,"quantity":100}]',
      '[{"operation":"sell","unit-cost":15.0,"quantity":50}]',
      "",
    ];

    readline.createInterface = jest.fn().mockReturnValue({
      on: (event, callback) => {
        mockInput.forEach((line) => {
          if (event === "line") callback(line);
        });
      },
      close: jest.fn(),
    });

    InputOutputHandler.readInput((result) => {
      const expected = [
        [{ operation: "buy", "unit-cost": 10.0, quantity: 100 }],
        [{ operation: "sell", "unit-cost": 15.0, quantity: 50 }],
      ];
      expect(result).toEqual(expected);
      done();
    });
  });
});

describe("InputOutputHandler - readInput com mock duplo", () => {
  it("deve ler duas entradas separadas e retornar os dados corretamente", (done) => {
    const mockInput = [
      `[{"operation":"buy","unit-cost":10.0,"quantity":100},
        {"operation":"sell","unit-cost":15.0,"quantity":50},
        {"operation":"sell","unit-cost":15.0,"quantity":50}]`,
      `[{"operation":"buy","unit-cost":10.0,"quantity":10000},
        {"operation":"sell","unit-cost":20.0,"quantity":5000},
        {"operation":"sell","unit-cost":5.0,"quantity":5000}]`,
      "",
    ];

    // Mock do readline para simular entrada de dados
    readline.createInterface = jest.fn().mockReturnValue({
      on: (event, callback) => {
        mockInput.forEach((line) => {
          if (event === "line") callback(line);
        });
      },
      close: jest.fn(),
    });

    InputOutputHandler.readInput((result) => {
      const expectedResult = [
        [
          { operation: "buy", "unit-cost": 10.0, quantity: 100 },
          { operation: "sell", "unit-cost": 15.0, quantity: 50 },
          { operation: "sell", "unit-cost": 15.0, quantity: 50 },
        ],
        [
          { operation: "buy", "unit-cost": 10.0, quantity: 10000 },
          { operation: "sell", "unit-cost": 20.0, quantity: 5000 },
          { operation: "sell", "unit-cost": 5.0, quantity: 5000 },
        ],
      ];

      expect(result).toEqual(expectedResult);
      done(); // Finaliza o teste
    });
  });
});
