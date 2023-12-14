export class Person {
    // public name: string;
    // public address: string;

    // constructor(name: string, addres: string){
    //     this.name = name;
    //     this.address = addres;
    // }
    constructor(
        public name: string, 
        private address: string = 'No address'
        ){}
}


// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, 'NY');
//     }
// }


export class Hero{

//public person: Person;
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
       // this.person = new Person(realName);
    }
}

const person = new Person('Tony Stark', 'NY');
const ironman = new Hero('ironman', 45, 'tony', person);
console.log(ironman);