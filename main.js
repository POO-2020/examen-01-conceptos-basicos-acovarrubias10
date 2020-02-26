import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
class Main {
    testCantidad() {
        let cantidad = new Cantidad(100, "gramos")
        console.log(cantidad.getDescripcion())
    }

    testIngrediente() {
        let ingrediente = new Ingrediente(new Cantidad(100, "gramos"), "azúcar", 150)
        console.log(ingrediente.getDescripcion())
    }
}

let app = new Main
app.testCantidad()
app.testIngrediente()