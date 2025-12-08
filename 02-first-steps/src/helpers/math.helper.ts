export const add = (a: number, b: number) => {
    return a + b;
}

export const substract = (a: number, b: number) => {
    return a - b;
}

export const multiply = (a: number, b: number) => {
    return a * b;
}

export const divide = (a: number, b: number) => {
    if (b == 0) {
        return 'Operacion no permitida'
    }
    else {
        return a / b;
    }
}