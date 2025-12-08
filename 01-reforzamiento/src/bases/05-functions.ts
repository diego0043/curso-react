interface User {
    uid: string;
    username: string;
}

function greet(name: string): string {
    return `Hola ${name}`
}

const greet2 = (name: string): string => {
    return `Hola ${name}`
}

const message = greet('Goku')
console.log(message)


function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'El_papi23'
    }
}

const getUser2 = (): object => {
    return {
        uid2: 'ABC-123',
        username2: 'El_papi123_2'
    }
}

const user = getUser();
const user2 = getUser2()

console.log({user, user2})

const myNumbers: number[] = [1,2,3,4,5,6];

myNumbers.forEach(function (value) {
    console.log(value)
})

myNumbers.forEach( (value) => {
    console.log(value)
})