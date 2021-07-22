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
	console.log("righe ", bggl.length, " colonne ", bggl[0].length)
	console.log("--------------------------")
	for (let riga of bggl) {
		for (let el of riga) {
			process.stdout.write(el + ",");
		}
		process.stdout.write("\n");
	}
}


function search(cosa: string, bggl: string[][]): boolean {
	console.log(cosa)
	logg(bggl)
	var ritorno = false
	for (var i = 0; i < bggl.length; i++) {
		for (var j = 0; j < bggl[i].length; j++) {

			var nuova = cosa.substr(1)
			if (cosa.charAt(0) == bggl[i][j]) {
				// console.log("trovato ", cosa.charAt(0))
				var myClonedArray = cloneDeep(bggl);
				if (nuova.length == 0) {
					ritorno = true;
				} else {
					var marker = cosa.length
					var smarker = String(marker)
					var spreviousmrkr = String(marker+1)
					
					// console.log("i ", i, " j ", j, " partenza marker ", marker, " invoco con ", nuova, " imposto la cella a ", marker)
					myClonedArray[i][j] = smarker
					// console.log("ul ", 		i>0 && j>0 ? bggl[i-1][j-1]:"-")
					// console.log("u ", 		i>0 ? bggl[i-1][j]:"-")
					// console.log("ur ", 		bggl[i+1][j+1])
					// console.log("r ", 		bggl[i][j+1])
					// console.log("dr ", 		bggl[i+1][j+1])
					// console.log("d ", 		bggl[i+1][j])
					// console.log("dl ", 		j>0 ? bggl[i+1][j-1]:"-")
					// console.log("l ", 		j>0 ? bggl[i][j-1]:"-")

					var enroute = 	i>0 && j>0 && bggl[i-1][j-1] == spreviousmrkr ||
									i>0 && bggl[i-1][j] == spreviousmrkr ||
									bggl[i+1][j+1] == spreviousmrkr ||
									bggl[i][j+1] == spreviousmrkr ||
									bggl[i+1][j+1] == spreviousmrkr ||
									bggl[i+1][j] == spreviousmrkr ||
									j>0 && bggl[i+1][j-1] == spreviousmrkr ||
									j>0 && bggl[i][j-1] == spreviousmrkr

					ritorno = (enroute || marker == 5) && search(nuova, myClonedArray)	
				}
			}
		}

	}
	return ritorno
}



// logg(b)
// logg(b2)
console.log(search("BINGO", b))
console.log(search("BINGOHJKKLJ", b))
console.log(search("BINGOKJKUYO", b))