const C9vilizacion = require('./Civlizacion')
//===================================

class World {

    constructor(){
        this.documents = []
        this.civilizaciones = []
        this.cleaners = []
    }
  
    atacar(civ1Index, ejer1Index, civ2Index, ejer2Index){
        let ejer1 = this.civilizaciones[civ1Index].ejercitos[ejer1Index]
        let ejer2 = this.civilizaciones[civ2Index].ejercitos[ejer2Index]
        
        if(ejer1.puntos > ejer2.puntos){
            ejer1.ganar()
            ejer2.perder()
        }
        else if(ejer1.puntos < ejer2.puntos){
            ejer2.ganar()
            ejer1.perder()
        }
        else{
            ejer2.empatar()
            ejer1.empatar()
        }
    }
   
}

//crear civilizaciones
let tierra = new World()

let chinos = new Civilizacion("chinos")
let ingleses = new Civilizacion("ingleses")
let bizantinos = new Civilizacion("bizantinos")

tierra.civilizaciones.push(chinos)
tierra.civilizaciones.push(ingleses)
tierra.civilizaciones.push(bizantinos)

module.exports = World