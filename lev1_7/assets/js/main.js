/* Aufgabenstellung


Die Methode unshift() fügt neue Elemente zum Anfang eines Arrays hinzu.

Definiere deutscheGerichte (die du kennen solltest) mit einem Array, das enthält: 
Speckkuchen, Thüringer Rostbratwurst, Quarkkeulchen, Sauerbraten.
Füge zum Array 5 deutsche Gerichte mit dem Befehl unshift() hinzu.
Gib es in der Konsole aus.
 */

const deutscheGerichte = [
	"Speckkuchen",
	"Thüringer Rostbratwurst",
	"Quarkkeulchen",
	"Sauerbraten",
];

deutscheGerichte.unshift(
	"Pfälzer Dampfnudeln",
	"Königsberger Klopse",
	"Himmel und Erde",
	"Salzwedeler Baumkuchen",
	"Pinkel mit Grünkohl"
);

console.log("deutscheGerichte: ", deutscheGerichte);
