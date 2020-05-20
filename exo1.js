class Calculator {
  add(numbersString) {
    const numbers = numbersString.split(",");

    return numbers.reduce((acc, number) => {
      return parseInt(acc) + parseInt(number);
    });
  }
}
module.exports = Calculator;
