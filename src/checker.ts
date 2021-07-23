import {cloneDeep} from 'lodash';

console.log('Start!')

var b = [
	["I", "L", "A", "W"],
	["B", "N", "G", "E"],
	["I", "U", "A", "O"],
	["A", "S", "R", "L"]
];
var b2 = [
	["I", "L", "A"],
	["A", "S", "R"]
];

function logg(bggl: string[][]) {
	// console.log("righe ", bggl.length, " colonne ", bggl[0].length)
	console.log("--------------------------")
	for (let riga of bggl) {
		for (let el of riga) {
			process.stdout.write(el + ",");
		}
		process.stdout.write("\n");
	}
}


function search(cosa: string, totalLength: number, bggl: string[][]): boolean {
	var ritorno = false
	for (var i = 0; i < bggl.length; i++) {
		for (var j = 0; j < bggl[i].length; j++) {
			var nuova = cosa.substr(1)
			if (cosa.charAt(0) == bggl[i][j]) {
				console.log("-----> ", cosa.charAt(0))

				var marker = cosa.length
				var smarker = String(marker)
				var spreviousmrkr = String(marker+1)
				var myClonedArray = cloneDeep(bggl);

				myClonedArray[i][j] = smarker

				var enroute = 	bggl?.[i-1]?.[j-1] == spreviousmrkr ||
								bggl?.[i-1]?.[j] == spreviousmrkr ||
								bggl?.[i+1]?.[j+1] == spreviousmrkr ||
								bggl?.[i]?.[j+1] == spreviousmrkr ||
								bggl?.[i+1]?.[j+1] == spreviousmrkr ||
								bggl?.[i+1]?.[j] == spreviousmrkr ||
								bggl?.[i+1]?.[j-1] == spreviousmrkr ||
								bggl?.[i]?.[j-1] == spreviousmrkr
								
				enroute = (enroute || marker == totalLength)

				console.log("enroute ", enroute, " partenza marker ", marker, " invoco con ", nuova)
				logg(myClonedArray)
				ritorno = ritorno || (enroute && search(nuova, totalLength, myClonedArray))	
				if (marker == 1 && enroute) {
					console.log("ritorno = true perche nuova e' vuota ")
					return true;
				} 
			}
		}

	}
	return ritorno
}

// logg(b)
// logg(b2)
// console.log(search("BINGO", "BINGO".length, b))
// console.log(search("BITFGNGO", "BITFGNGO".length, b))
// console.log(search("RGHTFJK", "RGHTFJK".length, b))
// var third = "BINGOEAU"
// console.log(search(third, third.length, b))

// var third = "EAL" // true
// var third = "EAKBINGO" // false
var third = "BINGO" // true
// var third = "BINGOEWAL" // true
// var third = "GEOLARUNL" // true
// var third = "GIEOLARUNL" // false

console.log(search(third, third.length, b))
