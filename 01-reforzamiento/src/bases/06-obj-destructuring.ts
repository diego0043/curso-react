const person = {
    name: 'Tony',
    age: 55,
    key: 'IronMan',
}

//const name1 = person.name;

const { name: ironManName, age: ironManAge, key } = person;

console.log(ironManName, ironManAge, key);

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ key, name, age, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank
    }
}

const {rank, keyName, user} = useContext(person);
const {name, age} = user;

console.log(rank, keyName, name, age)