
// const pupils =["banan" , "shokolad" , "non" , "mashina" , "nok" , "nina" , "ananas" , "daraxt"]

// for (const odamlar of pupils) {

//  if (odamlar.includes("n")){
//    console.log("N harfi bor so'zlar:", odamlar);
//  }

// }



let sozlar = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];

let bor= [];
let yoq = [];

for (let word of sozlar) {
  if (word.includes('n')) {
    bor.push(word);
  } else {
    yoq.push(word);
  }
}

console.log(bor, "'n' harfi ishtirok etgan so'zlar");
console.log(yoq, "'n' harfi ishtirok etmagan so'zlar");
