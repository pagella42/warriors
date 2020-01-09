const Ejercito = require('./Ejercito')
//===================================



class Civilizacion {

    constructor(name){
        this.name = name
        this.ejercitos = []

    }

    crearEjercito(){
        this.ejercitos.push((new Ejercito()).init(this.name))
    }

}








module.exports = Civilizacion