
class Guerrero {

    constructor(name, puntos){
        this.name = name
        this.puntos = puntos
    }

    entrenar(puntos){
        this.puntos+=puntos
    }

    transformar(name, puntos){
        this.name = name
        this.puntos = puntos
    }

    

}







module.exports = Guerrero