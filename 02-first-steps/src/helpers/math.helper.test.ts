import { describe, expect, test } from 'vitest';
import { add, divide, multiply, substract } from './math.helper';
describe('Tests Add', () => {
    test('should add positive', () => {
        const result = add(1, 3);
        expect(result).toBe(4);
    })
})

describe('Tests substract', () => {
    test('Should return positive value', () => {
        const result = substract(1, -3);
        expect(result).toBe(4);
    })

    test('Should return substract value', () => {
        const result = substract(5, 4);
        expect(result).toBe(1);
    })
})

describe('Tests Multiply', () => {
    test('Should return zero', () => {
        const result = multiply(10, 0);
        expect(result).toBe(0);
    })

    test('Should return positive', () => {
        const result = multiply(-1, -3);
        expect(result).toBe(3)
    })
})

describe('Tests divide', () => {
    test('Should return operation not allowed', () => {
        const result = divide(10, 0);
        expect(result).toBe('Operacion no permitida');
    })

    test('Should return divise', () => {
        const a: number = 10;
        const b: number = 2;
        const result = divide(a, b);
        expect(result).toBe(a / b)
    })
})


