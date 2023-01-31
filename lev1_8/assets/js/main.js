/* Aufgabenstellung


Die Methode shift() entfernt das erste Element eines Arrays.

Verwende das deutscheGerichte-Array aus der vorherigen Übung.
Entferne aus dem Array 3 Werte mit Hilfe der Methode shift();
Speichere diese als Array nichtGut.
Gib diese Variable in der Konsole aus.
 */

const deutscheGerichte = [
	"Speckkuchen",
	"Thüringer Rostbratwurst",
	"Quarkkeulchen",
	"Sauerbraten",
];

// const nichtGut = deutscheGerichte.shift(
// 	deutscheGerichte[0],
// 	deutscheGerichte[1],
// 	deutscheGerichte[3]
// );
deutscheGerichte.shift("Speckkuchen", "Sauerbraten", "Thüringer Rostbratwurst");

// entfernte Gerichte
const nichtGut = deutscheGerichte;

const gut = deutscheGerichte.shift(
	"Speckkuchen",
	"Sauerbraten",
	"Thüringer Rostbratwurst"
);

console.log(" nichtGut: ", nichtGut, typeof nichtGut);
console.log("gut: ", gut, typeof gut);
