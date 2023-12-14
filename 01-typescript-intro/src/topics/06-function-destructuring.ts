export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'ipad',
    price: 250.0
}


export interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

/*
function taxCalculator({tax, products}: TaxCalculationOptions): [number, number]{
    let total =0;
    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax];
}
*/

export function taxCalculator(options: TaxCalculationOptions): [number, number]{
    const {tax, products} = options;    
    let total =0;
    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculator({
    products: shoppingCart,
    tax: tax,
})

console.log('Total', total);
console.log('Total taxes: ', totalTax)




