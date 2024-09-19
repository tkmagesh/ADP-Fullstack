
const ResultWriter = require('./result-writer');
const Calculator = require('./calculator');

const rw = new ResultWriter();
const calc = new Calculator(rw);
calc.add(100, 200)
calc.subtract(100,200)