class Calculator {
  add(numbersString) {
    const numbers = numbersString.split(",");

    return numbers.reduce((acc, number) => {
      return acc + number;
    });
  }
}
export default Calculator;
