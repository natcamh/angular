export interface Passenger {
    name: string;
    children?: string [];
}

const passenger1: Passenger = {
    name: 'Camila',
}

const passenger2: Passenger = {
    name: 'María',
    children: ['Camila', 'Emanuel'],
}


const printChildren = ( passenger: Passenger)=>{
    const howManyChildren = passenger.children?.length || 0; //optional chaining
    console.log(howManyChildren);
}

printChildren(passenger2); //2
printChildren(passenger1); //0