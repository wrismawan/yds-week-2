const prompt = require('prompt-sync')();

// let nSiswa = prompt('Banyak siswa: ');
let nilaiSiswa = [];
nilaiSiswa.length = 3;

nilaiSiswa = prompt('Nama dan nilai siswa: ');
let niaiRata;

if (nilaiSiswa.length == 3){
    niaiRata = prompt('Nilai rata-rata siswa: ');
}

nilaiSiswa = nilaiSiswa.split(' ');
nilaiSiswa = nilaiSiswa.map(function (x) { 
        return parseInt(x);
      });

let out = 0;

console.log(nilaiSiswa);

function rata(nilaiSiswa) {
    for (let i=1; i<nilaiSiswa.length; i++) {
        out += nilaiSiswa[i];
        // console.log(nilaiSiswa[i]);
    }
    return out/nilaiSiswa.length;
}

console.log(rata(nilaiSiswa));