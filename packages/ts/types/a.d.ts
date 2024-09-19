// declare interface Aobj{
//     name:string
//     age:number
//     gender:'L' | 'G' | 'B' | 'T'
// }

// interface Bobj extends Aobj{
//     edit:b
// }

// type b=number | string

declare class Person{
    name:string;
    constructor(name:string);
    say:(who:God)=>void;
}
type God='God' | 'god' | '主' | 'Trisolaran';
declare let DPZ:Person;