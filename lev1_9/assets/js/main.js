/* Hinweise

Wenn Du Dinge am Anfang und Ende eines JavaScript-Arrays hinzufügst und entfernst, kann es schwierig sein, sich daran zu erinnern, welche Methode was tut. Hier sind einige Tipps:

Unshift und Shift verschieben das gesamte Array seitwärts (durch Hinzufügen und Entfernen von Elementen am Anfang).
Push und Pop verschieben das Array NICHT seitlich (weil sie am Ende Elemente hinzufügen und entfernen).
In jedem dieser Paare (Push/Pop und Unshift/Shift) macht das längere Wort das Array länger.


Aufgabenstellung

Erstelle ein Array und ordne es einer Variablen zu.
Array mit Werte: 23, 54, 75;

*



 */

const arr = [23, 54, 75];

// Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.

arr.push(11, 32, 42, 5, 71); // (8) [23, 54, 75, 11, 32, 42, 5, 71]
console.log("arr.push: ", arr);

// Verwende die Unshift-Methode, um 5 Werte an der Vorderseite deines Arrays hinzuzufügen.

arr.unshift(1, 3, 7, 8, 14);
console.log("arr.unshift: ", arr); //(13) [1, 3, 7, 8, 14, 23, 54, 75, 11, 32, 42, 5, 71]

// Verwende die Pop-Methode, um 2 Werte von der Rückseite deines Arrays zu entfernen.

arr.pop();
arr.pop();
console.log("arr.pop: ", arr); //  (11) (1, 3, 7, 8, 14, 23, 54, 75, 11, 32, 42]
// Verwende die Shift-Methode, um 2 Werte von der Vorderseite deines Arrays zu entfernen.

arr.shift();
arr.shift();
console.log("arr.shift: ", arr); //(9) [7, 8, 14, 23, 54, 75, 11, 32, 42]
