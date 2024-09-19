
class Calculator {
  constructor(resultWriter) {
    if (!resultWriter) throw new Error("ResultWriter is mandatory!");
    this.resultWriter = resultWriter;
  }

  add(x, y) {
    const result = x + y;
    this.resultWriter.write(`add(${x} and ${y}) = ${result}`);
  }

  subtract(x, y) {
    const result = x - y;
    this.resultWriter.write(`subtract(${y} from ${x}) = ${result}`);
  }
}

module.exports = Calculator;