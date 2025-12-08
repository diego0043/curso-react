//manera de delimitar el tipo en propertis para un object

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address

}

interface Address {
    postalCode: string;
    city: string;
}


const ironMan: Person = {
    firstName: 'Tony',
    lastName: 'Start',
    age: 54,
    address: {
        postalCode: '2343244',
        city: 'NY'
    }
};

// const spiderMan: Person = {
//     firstName: "",
//     lastName: "",
//     age: 0
// }

// Esto solo rompe en primer nivel pero si hay mas cosas anidadas se comparte el espacio en memoria
//const spiderman = {...ironMan}; 

/*
const spiderman = structuredClone(ironMan);

ironMan.lastName = 'Peter';
ironMan.lastName = 'Valencia';
spiderman.age = 22;

console.log(spiderman, ironMan);
*/

console.log(ironMan)