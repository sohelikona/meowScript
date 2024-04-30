
const TokenType = {
    MEOW: 'MEOW',
    STRING: 'STRING',
    PARENTHESIS: 'PARENTHESIS',
    EOF: 'EOF' // End of file
};

function tokenize(input) {
    let currentPos = 0;
    const tokens = [];

    while (currentPos < input.length) {
        let char = input[currentPos];

        if (/\s/.test(char)) {
            currentPos++;
            continue;
        }

        if (char === 'm' && input.slice(currentPos, currentPos + 4) === 'meow') {
            tokens.push({ type: TokenType.MEOW, value: "MEOW"});
            currentPos += 4;
            continue;
        }

        if (char === '"') {
            let string = '';
            currentPos++;
            while (currentPos < input.length && input[currentPos] !== '"') {
                string += input[currentPos];
                currentPos++;
            }
            if (input[currentPos] !== '"') {
                throw new Error(`Meow!!!😡 why the hell you didn't close your quotes. Invalid character: ${input[currentPos]}`);
            }
            tokens.push({ type: TokenType.STRING, value: string });
            currentPos++;
            continue;
        }

        if (char === '(' || char === ')') {
            tokens.push({ type: TokenType.PARENTHESIS, value: char });
            currentPos++;
            continue;
        }

        throw new Error(`Meow😡 your token is invalid MEOW MEOW MEOW!!! Invalid character: ${char}`);
    }

    // Check for unclosed parentheses
    const openParentheses = tokens.filter(token => token.type === TokenType.PARENTHESIS && token.value === '(').length;
    const closeParentheses = tokens.filter(token => token.type === TokenType.PARENTHESIS && token.value === ')').length;
    if (openParentheses !== closeParentheses) {
        throw new Error('Meow!!!😡 Who will close the parenthesis???');
    }

    tokens.push({ type: TokenType.EOF, value: ''});
    return tokens;
}


const inputCode = 'meow("hello world")';
const tokens = tokenize(inputCode);
console.log(tokens);


module.exports = {
    tokenize, TokenType
};

