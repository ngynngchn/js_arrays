/*  Aufgabenstellung


Die push()-Methode fügt neue Elemente am Ende eines Arrays hinzu.
Definiere ein Array songs, das folgendes enthält:
 
Bohemian Rhapsody, Stairway to Heaven, Hotel California

Füge diesem Array deine 3 Lieblingslieder mit dem Befehl songs.push("Sweet Child O'Mine"); hinzu.
Speichere das Array als Variable totalSongs.
Gebe totalSongs in der Konsole aus.
 */

/* Definiere ein Array besteFussballerAllerZeiten, das folgendes enthält:
die 5 besten Fußballspieler.
Füge 3 Torhüter hinzu.
Gebe es in der Konsole aus.
 */

/* 
Du kannst mehrere Elemente zu Deinem Array hinzufügen.
Verwende das Komma zwischen den Werten.
const artists = ["michael", "elvis"];
artists.push("justin", "charlie");

Füge Songs zum Array hinzu, die dir nicht gefallen.
Füge die besten 3 Trainer aller Zeiten zu Array hinzu.
 */

const songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];

songs.push("Hạ Phỏm", "Copines", "Dress");

const totalSongs = songs;
console.log(" totalSongs: ", totalSongs);

const besteFussballerAllerZeiten = [
	"Lionel Messi",
	"Pelé",
	"Diego Armando Maradona",
	"Cristiano Ronaldo",
	"Zinedine Zidane",
];

besteFussballerAllerZeiten.push(
	"Gianluigi Buffon",
	"Oliver Kahn",
	"Iker Casillas"
);

console.log(" besteFussballerAllerZeiten: ", besteFussballerAllerZeiten);

totalSongs.push("LEYLA", "BRODIES", "FLEX SO HARD");
console.log("totalSongs: ", totalSongs);

besteFussballerAllerZeiten.push(
	" Rinus Michels",
	"Alex Ferguson",
	"Arrigo Sacchi"
);

console.log("besteFussballerAllerZeiten: ", besteFussballerAllerZeiten);

/*
Arrays können auch Arrays enthalten.
 Definiere eine Variable heroUndEnemy, die 3 Arrays beinhaltet:
Batman, The Joker
Professor X, Magneto
Thor, Loki
Füge zum Array andere 3 Arrays mit Hero und ihr Gegner hinzu.
Gebe heroUndEnemy in der Konsole aus.

 */

const heroUndEnemy = [
	["Batman", "The Joker"],
	["Professor X", "Magneto"],
	["Thor", "Loki"],
];

heroUndEnemy.push(
	["Avengers", "Thanos"],
	["Spiderman", "Dr. Otto Octavius"],
	["Wonder Woman", "Ares"]
);

console.log("heroUndEnemy: ", heroUndEnemy);
