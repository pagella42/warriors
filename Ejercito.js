const Guerrero = require('./Guerrero')
//===================================


class Ejercito {

    constructor(numero) {
        this.guerreros = {
            arqueros: [],
            arqueros: [],
            caballero: [],
        }
        this.batallas = []
        this.monedas = 0
        this.puntos = 0
    }

    init(name){
        if(name == "chinos"){
            this.agregarPiquero(2)
            this.agregarArquero(25)
            this.agregarCaballero(2)
        }
        if(name == "ingleses"){
            this.agregarPiquero(10)
            this.agregarArquero(10)
            this.agregarCaballero(10)
        }
        if(name == "bizantinos"){
            this.agregarPiquero(5)
            this.agregarArquero(8)
            this.agregarCaballero(15)
        }
        
    }
    agregarPiquero(number) {
        for(let i =0; i < number; i++){
            this.piquero.push(new Guerrero("piquero", 5))
            this.updatePuntos()
        }
    }
    agregarArquero(number) {
        for(let i =0; i < number; i++){
            this.arquero.push(new Guerrero("arquero", 10))
            this.updatePuntos()
        }
    }
    agregarCaballero(number) {
        for(let i =0; i < number; i++){
            this.caballero.push(new Guerrero("caballero", 20))
            this.updatePuntos()
        }
    }

    updatePuntos() {
        let puntos = 0
        this.guerreros.arqueros.forEach(a => puntos += a.puntos)
        this.guerreros.piqueros.forEach(p => puntos += p.puntos)
        this.guerreros.caballeros.forEach(c => puntos += c.puntos)
    }

    entrenarPiquero(index) {
        this.guerreros.piqueros[index].puntos += 3
        this.monedas -= 10
        this.updatePuntos()
    }
    entrenarArquero(index) {
        this.guerreros.arqueros[index].puntos += 7
        this.monedas -= 20
        this.updatePuntos()
    }
    entrenarCaballero(index) {
        this.guerreros.arqueros[index].puntos += 10
        this.monedas -= 30
        this.updatePuntos()
    }

    transformar(soldado, index) {
        if (soldado == 'piquero') {
            this.guerreros.piqueros[index].transformar("arquero", 10)
            this.monedas -= 30
            this.updatePuntos()
        }
        if (soldado == 'piquero') {
            this.guerreros.piqueros[index].transformar("caballero", 20)
            this.monedas -= 40
            this.updatePuntos()
        }
    }

    ganar() {
        this.monedas += 100
    }
    perder() {
        this.guerreros.caballeros.splice(0, 2)
    }
    empatar() {
        this.guerreros.piqueros.splice(0)
    }

    
}








module.exports = Ejercito