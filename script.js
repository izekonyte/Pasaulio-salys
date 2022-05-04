"use strict"

// Turkija 
// plotas: 783 356 km² 
//  zmoniu kiekis :83 614 362  
// Vokietija
// plotas: 357 022 km² 
//  zmoniu kiekis : 83 190 556
//  Prancuzija
// plotas: 551 695 km² 
//  zmoniu kiekis : 67 413 000
//   Lenkija
// plotas: 312 696 km² 
//  zmoniu kiekis : 38 179 800 
//  Lietuva
// plotas: 65 300  km² 
//  zmoniu kiekis : 2 795 680


var  Salys = [
    {
salis: "Turkija", 
plotasKm2: 783356, 
gyventojuSkaicius: 83614362 
    }, 

     {
salis: "Vokietija", 
plotasKm2: 357022, 
gyventojuSkaicius: 83190556 
    },

     {
salis: "Prancuzija", 
plotasKm2: 551695, 
gyventojuSkaicius: 6741300 
    }, 

     {
salis: "Lenkija", 
plotasKm2: 312696, 
gyventojuSkaicius: 38179800  
    },
    
     {
salis: "Lietuva", 
plotasKm2: 65300 , 
gyventojuSkaicius: 2795680
    }, 
]
console.log(this.Salys)




var averageLikes = (salis, plotasKm2, gyventojuSkaicius) => {

var average2 = ((x.plotasKm2 * 1000000) / x.gyventojuSkaicius).toFixed(2)


console.log(`Šalis: ${salis}, joje gyvena ${gyventojuSkaicius} mln. gyventojų.Valstybės plotas:${plotasKm2}, plotas tenkantis vienam gyventojui: ${average2}.`)
    console.log("++++++++")}


 for(var x of Salys) {
        averageLikes(x.salis, x.plotasKm2, x.gyventojuSkaicius)
        }