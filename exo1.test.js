const assert = require("assert");
const Calculator = require("./exo1");

const calc = new Calculator();

assert.equal(calc.add("1,2"), 3);
assert.equal(calc.add("3"), 3);
assert.equal(calc.add(""), 0);
