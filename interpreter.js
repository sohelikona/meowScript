// // Define AST Node types
// const { tokenize } = require('./lexer');
// const { parseProgram } = require('./parser');
// const ASTNodeType = {
//     Program: 'Program',
//     FunctionCall: 'FunctionCall',
//     StringLiteral: 'StringLiteral'
//     // Add more node types as needed
// };

// // Interpreter function
// function interpret(ast) {
//     // Call the interpretNode function with the root of the AST
//     return interpretNode(ast);
// }

// // Interpret AST nodes
// function interpretNode(node) {
//     switch (node.type) {
//         case ASTNodeType.Program:
//             return interpretProgram(node);
//         case ASTNodeType.FunctionCall:
//             return interpretFunctionCall(node);
//         case ASTNodeType.StringLiteral:
//             return interpretStringLiteral(node);
//         // Handle other node types
//         default:
//             throw new Error(`Unknown node type: ${node.type}`);
//     }
// }

// // Interpret a program node
// function interpretProgram(programNode) {
//     // Interpret each statement in the program
//     return programNode.children.map(interpretNode).join('\n');
// }

// // Interpret a function call node
// function interpretFunctionCall(functionCallNode) {
//     // Extract function name and arguments
//     const functionName = functionCallNode.name;
//     const args = functionCallNode.arguments.map(interpretNode);

//     // Implement logic to execute the function
//     if (functionName === 'meow') {
//         return meowFunction(...args);
//     } else {
//         throw new Error(`Undefined function: ${functionName}`);
//     }
// }

// // Interpret a string literal node
// function interpretStringLiteral(stringNode) {
//     return stringNode.value;
// }

// // Example meow function
// function meowFunction(str) {
//     console.log('Meow:', str);
// }

// // Parse and interpret the code
// const ast = parseProgram(tokens); // Assuming parseProgram is implemented and returns the AST
// interpret(ast);

const { TokenType } = require('./lexer');


// Define AST Node types
const { parseProgram } = require('./parser');
const ASTNodeType = {
    Program: 'Program',
    FunctionCall: 'FunctionCall',
    StringLiteral: 'StringLiteral'
    // Add more node types as needed
};

// // Interpreter function
// function interpret(tokens) {
//     // Parse the tokens into AST
//     const ast = parseProgram(tokens);
//     // Call the interpretNode function with the root of the AST
//     return interpretNode(ast);
// }



// function interpret(tokens) {
//     const statements = parseStatements(tokens);
//     return statements.map(interpretNode).join('\n');
// }


function interpret(tokens) {
    try {
        const statements = parseStatements(tokens);
        return statements.map(interpretNode).join('\n');
    } catch (error) {
        console.error('Syntax Error:', error.message);
        return ''; // Return an empty string to indicate failure
    }
}




// Parse multiple statements
function parseStatements(tokens) {
    const statements = [];
    let currentPos = 0;

    while (currentPos < tokens.length) {
        let statementTokens = [];

        // Find tokens for a single statement
        while (currentPos < tokens.length && tokens[currentPos].type !== TokenType.EOF) {
            statementTokens.push(tokens[currentPos]);
            currentPos++;
        }

        // Parse the statement and add it to the list
        if (statementTokens.length > 0) {
            statements.push(parseProgram(statementTokens));
        }

        // Move to the next token after the current statement
        currentPos++;
    }

    return statements;
}



// Interpret AST nodes
function interpretNode(node) {
    switch (node.type) {
        case ASTNodeType.Program:
            return interpretProgram(node);
        case ASTNodeType.FunctionCall:
            return interpretFunctionCall(node);
        case ASTNodeType.StringLiteral:
            return interpretStringLiteral(node);
        // Handle other node types
        default:
            throw new Error(`Unknown node type: ${node.type}`);
    }
}

// Interpret a program node
function interpretProgram(programNode) {
    // Interpret each statement in the program
    return programNode.children.map(interpretNode).join('\n');
}

// Interpret a function call node
function interpretFunctionCall(functionCallNode) {
    // Extract function name and arguments
    const functionName = functionCallNode.name;
    const args = functionCallNode.arguments.map(interpretNode);

    // Implement logic to execute the function
    if (functionName === 'meow') {
        return meowFunction(...args);
    } else {
        throw new Error(`Undefined function: ${functionName}`);
    }
}

// Interpret a string literal node
function interpretStringLiteral(stringNode) {
    return stringNode.value;
}

// Example meow function
function meowFunction(str) {
    console.log('Meow:', str);
}

// Export the interpret function
module.exports = {
    interpret
};
