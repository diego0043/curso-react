const caracterNames = ['Goku', 'Vegeta', 'Trunks']

const [, , trunks] = caracterNames;

console.log(trunks)

const retunsArrayFn = () => {
    //con as const le decimos que el primer valor siempre seran string y el segundo de tipo number
    return ['ABC', 224] as const;
}

const [letters, numbers] = retunsArrayFn();

console.log(numbers, letters);


const useState = (value: string) => {

    return [value, (newValue: string) => { console.log(newValue) }] as const;

}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');

