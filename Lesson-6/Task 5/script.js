// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


let str = 'Ревуть воли як ясла повні';

let stringToarray = (str) => {
    if (str){
        const splitter =   str.split(' ');
        return splitter;
    }

}

console.log(stringToarray(str))
