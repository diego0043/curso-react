
const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        //resolve(100);
        reject(`Mi amigo se perdio`)
    }, 2000)
});


myPromise.then((myMoney) => {   
    console.log(`tengo mi dinero ${myMoney}`);
}).catch((reason) => {
    console.log(reason)
}).finally(() => {
    console.log(`Pues ha seguir con mi vida`)
})