import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js"

class Main {
    testCantidad() {
        let cantidad = new Cantidad(100, "gramos")
        console.log(cantidad.getDescripccion())
    }

    testIngrediente() {
        let ingrediente = new Ingrediente(new Cantidad(100, "gramos"), "harina", 150)
        console.log(ingrediente.getDescripccion())
        
    }
    
    testReceta(){
        this.receta = new Receta("Pastel de chocolate", "Vanessa Covarrubias")
        this.receta.agregarIngrediente(this.ingrediente)
        this.receta.agregarIngrediente(this.ingrediente2)
        this.receta.imprimirEnConsola()
    }

}
   

let app = new Main
app.testCantidad()
app.testIngrediente()
app.testReceta()