export class Product {

    constructor (
    public productName: string,
    public productPrice: number,
    public productImage: string,
    public isOnSale: boolean,
    public quantityInCart: number
    ){}
}
