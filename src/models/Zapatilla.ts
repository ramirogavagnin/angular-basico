/* 
Código muy redundante
export default class Zapatilla {
    public nombre: string
    public marca: string
    public color: string
    public precio: string
    public stock: string

    constructor(nombre, marca, color, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.color = color
        this.precio = precio
        this.stock = stock
    }
} */

// Typescript defina la propiedad en mi clase (this.nombre = nombre por ej)
// y cuando le pase un un valor por parametro al objeto ya voy a tener el valor en mi/s propiedad/es
export class Zapatilla {
    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean
    ) {}
}
