class Person{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    say=(who:God)=>{
        //God:上帝  /god:神
        //who.edit=''
        //who.gender='L'
        const firstChar=who.charAt(0).toLocaleUpperCase();
        console.log(`${firstChar}${who.slice(1)} bless you`);
        
    };
}


// let DPZ=new Person("DPZ");
// let 主='god';
// DPZ.say(主);

type God='God' | 'god' | '主' | 'Trisolaran'
let DPZ=new Person("DPZ");
//DPZ.say('God')

// const res:DayBefore
// res.result.latest

interface IBili{
    name?:string
    asd:any
}

const a = {

} as IBili

//a.aaaa