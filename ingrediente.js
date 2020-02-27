import Cantidad from "./cantidad.js"
export default class Ingrediente {
    /**
     * 
     * @param {Cantidad} cantidad 
     * @param {string} nombre 
     * @param {number} precio 
     */
    constructor(cantidad, nombre, precio) {
        this.cantidad = cantidad
        this.nombre = nombre
        this.precio = precio
    }
    getDescripccion() {
        return `${this.cantidad.getDescripccion()} de ${this.nombre} $${this.precio}`
    }
}