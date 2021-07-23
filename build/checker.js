"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
console.log('Start!');
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
function logg(bggl) {
    // console.log("righe ", bggl.length, " colonne ", bggl[0].length)
    console.log("--------------------------");
    for (var _i = 0, bggl_1 = bggl; _i < bggl_1.length; _i++) {
        var riga = bggl_1[_i];
        for (var _a = 0, riga_1 = riga; _a < riga_1.length; _a++) {
            var el = riga_1[_a];
            process.stdout.write(el + ",");
        }
        process.stdout.write("\n");
    }
}
function search(cosa, totalLength, bggl) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var ritorno = false;
    for (var i = 0; i < bggl.length; i++) {
        for (var j = 0; j < bggl[i].length; j++) {
            var nuova = cosa.substr(1);
            if (cosa.charAt(0) == bggl[i][j]) {
                console.log("-----> ", cosa.charAt(0));
                var marker = cosa.length;
                var smarker = String(marker);
                var spreviousmrkr = String(marker + 1);
                var myClonedArray = lodash_1.cloneDeep(bggl);
                myClonedArray[i][j] = smarker;
                var enroute = ((_a = bggl === null || bggl === void 0 ? void 0 : bggl[i - 1]) === null || _a === void 0 ? void 0 : _a[j - 1]) == spreviousmrkr ||
                    ((_b = bggl === null || bggl === void 0 ? void 0 : bggl[i - 1]) === null || _b === void 0 ? void 0 : _b[j]) == spreviousmrkr ||
                    ((_c = bggl === null || bggl === void 0 ? void 0 : bggl[i + 1]) === null || _c === void 0 ? void 0 : _c[j + 1]) == spreviousmrkr ||
                    ((_d = bggl === null || bggl === void 0 ? void 0 : bggl[i]) === null || _d === void 0 ? void 0 : _d[j + 1]) == spreviousmrkr ||
                    ((_e = bggl === null || bggl === void 0 ? void 0 : bggl[i + 1]) === null || _e === void 0 ? void 0 : _e[j + 1]) == spreviousmrkr ||
                    ((_f = bggl === null || bggl === void 0 ? void 0 : bggl[i + 1]) === null || _f === void 0 ? void 0 : _f[j]) == spreviousmrkr ||
                    ((_g = bggl === null || bggl === void 0 ? void 0 : bggl[i + 1]) === null || _g === void 0 ? void 0 : _g[j - 1]) == spreviousmrkr ||
                    ((_h = bggl === null || bggl === void 0 ? void 0 : bggl[i]) === null || _h === void 0 ? void 0 : _h[j - 1]) == spreviousmrkr;
                enroute = (enroute || marker == totalLength);
                console.log("enroute ", enroute, " partenza marker ", marker, " invoco con ", nuova);
                logg(myClonedArray);
                ritorno = ritorno || (enroute && search(nuova, totalLength, myClonedArray));
                if (marker == 1 && enroute) {
                    console.log("ritorno = true perche nuova e' vuota ");
                    return true;
                }
            }
        }
    }
    return ritorno;
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
var third = "BINGO"; // true
// var third = "BINGOEWAL" // true
// var third = "GEOLARUNL" // true
// var third = "GIEOLARUNL" // false
console.log(search(third, third.length, b));
