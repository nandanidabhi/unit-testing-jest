const subtract = require('./subtract')

test('properly subtracting two numbers', () => {
    expect(
        subtract(4, 5)
    ).toBe(-1)
})