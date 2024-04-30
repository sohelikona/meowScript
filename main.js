// const { tokenize, TokenType } = require('./lexer');
// const { parseProgram } = require('./parser');
// const { interpret } = require('./interpreter')

// const inputCode = 'meow("hello world")';
// const tokens = tokenize(inputCode);
// console.log(tokens);
// interpret(tokens)
// const ast = parseProgram(tokens);
// console.log(ast);




const { tokenize, TokenType } = require('./lexer');
const { parseProgram } = require('./parser');
const { interpret } = require('./interpreter')

const inputCode = 'meow("hello world")';
const tokens = tokenize(inputCode);
console.log(tokens);
const ast = parseProgram(tokens);
const result = interpret(tokens);
if (result !== '') {
    console.log(result);
} // Interpret the tokens and generate the result
console.log(result);
console.log(ast);
interpret(tokens);
// meow("My name is kona");
