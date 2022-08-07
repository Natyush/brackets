module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = ['(', '[', '{', '|', '1', '3','5', '7', '8'];
  const BRACKETS_PAIR = {
    [')'] : '(',
    [']'] : '[',
    ['}'] : '{',
    ['|'] : '|',
    ['1'] : '2',
    ['3'] : '4',
    ['5'] : '6',
    ['7'] : '7',
    ['8'] : '8',
};
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];
      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0; 
};
