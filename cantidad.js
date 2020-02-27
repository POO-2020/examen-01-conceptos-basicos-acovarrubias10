export default class Cantidad {
    /**
     * 
     * @param {number} valor 
     * @param {string} unidad 
     */
    constructor(valor, unidad) {
    this.valor = valor
    this.unidad = unidad
    }

    getDescripccion() {
        return `${this.valor} ${this.unidad}`
    }
}