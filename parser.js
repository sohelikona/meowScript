// const TokenType = {
//     MEOW: 'MEOW',
//     STRING: 'STRING',
//     PARENTHESIS: 'PARENTHESIS',
//     EOF: 'EOF'
// };

// function parseProgram(tokens) {
//     if (tokens.length < 2 || tokens[0].type !== TokenType.MEOW || tokens[1].type !== TokenType.STRING) {
//         throw new Error('Meow😡 Invalid program structure.');
//     }

//     const stringToken = tokens[2];
//     const stringValue = stringToken.value;

//     if (stringValue.length === 0) {
//         throw new Error('Meow😡 String inside meow function cannot be empty.');
//     }

//     return {
//         type: 'Program',
//         value: stringValue
//     };
// }



// module.exports = {
//     parseProgram
// };



const TokenType = {
    MEOW: 'MEOW',
    STRING: 'STRING',
    PARENTHESIS: 'PARENTHESIS',
    EOF: 'EOF'
};

// function parseProgram(tokens) {
//     // Ensure that there are at least two tokens
//     if (tokens.length < 2) {
//         throw new Error('Meow😡 Invalid program structure.');
//     }

//     // Check if the first token is 'MEOW' and the second token is 'STRING'
//     if (tokens[0].type === TokenType.MEOW && tokens[1].type === TokenType.STRING) {
//         // If the structure is correct, return an AST node representing the program
//         return {
//             type: 'Program',
//             value: tokens[1].value
//         };
//     } else {
//         // If the structure is incorrect, throw an error
//         throw new Error('Meow😡 Invalid program structure.');
//     }
// }


function parseProgram(tokens) {
    // Ensure that there are at least three tokens: 'MEOW', '(', and 'STRING'
    if (tokens.length < 3 || 
        tokens[0].type !== TokenType.MEOW || 
        tokens[1].type !== TokenType.PARENTHESIS ||
        tokens[2].type !== TokenType.STRING) {
        throw new Error('Meow😡 Invalid program structure.');
    }

    // Extract the string value from the third token
    const stringValue = tokens[2].value;

    // If the string inside the meow function is empty, throw an error
    if (stringValue.length === 0) {
        throw new Error('Meow😡 String inside meow function cannot be empty.');
    }

    // If the structure is correct, return an AST node representing the program
    return {
        type: 'Program',
        value: stringValue,
        children: []
    };
}



module.exports = {
    parseProgram
};
