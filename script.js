// While Js
// var jlmAngkot = 30;
// var angkotBeroperasi = 20;
// var nilaiAwal = 1;
// while (nilaiAwal <= angkotBeroperasi) {
//   console.log("Angkot No." + nilaiAwal + " Beroperasi dengan baik!");
//   nilaiAwal++;
// }

// For Loop js
// for (var nilaiAwal = angkotBeroperasi + 1;  nilaiAwal <= jlmAngkot; nilaiAwal++) {
//     console.log('Angkot No. ' + nilaiAwal + ' Sedang diperbaiki!')
// }

// Pengkondisian
// var jlmAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;
// if (noAngkot <= angkotBeroperasi) {
//   for (noAngkot = angkotBeroperasi + 1; noAngkot <= jlmAngkot; noAngkot++) {
//     console.log('Angkot No')
//   }
// } else {
//   for (noAngkot = angkotBeroperasi + 1; noAngkot <= jlmAngkot; noAngkot++) {
//     console.log("Angkot No. " + noAngkot + " sedang diperbaiki!");
//   }
// }

// Object JavaScript
var identitas = {
    nama: "Jeffry",
    umur: '21',
    alamat: ['JL. Ampera Raya', 'GG. Sejahtera', 'A4']
}

// cara 1 function declaration
// function getIden() {
//     console.log('Dimas')
// }

// getIden();

// cara 2 
// var obj = {};
// obj.halo = function() {
//     console.log('Halo');
// }

// obj.halo();

// cara 3
function Halo(){
    console.log('Halo');
}
new Halo();