// import prompt-sync untuk meminta input
const prompt = require('prompt-sync')();

// let nSiswa = prompt('Banyak siswa: ');
// membuat variabel nilaiSiswa dan membuat panjang nya 3
let nilaiSiswa = [];
nilaiSiswa.length = 3;

// meminta input untuk nilaiSiswa
nilaiSiswa = prompt('Nama dan nilai siswa: ');

// membuat variabel niaiRata
let niaiRata;

// ngecek apakah panjang nilaiSiswa sama dengan 3
if (nilaiSiswa.length == 3){

    // menginput niaiRata
    niaiRata = prompt('Nilai rata-rata siswa: ');
}

// mensplit nilai siswa kemudian 
nilaiSiswa = nilaiSiswa.split(' ');

// mengubah tipe datanya menjadi Integer
nilaiSiswa = nilaiSiswa.map(function (x) { 
        return parseInt(x);
      });

let out = 0;

console.log(nilaiSiswa);

// membuat fungsi untuk membuat rata2 nilai siswa
function rata(nilaiSiswa) {
    for (let i=1; i<nilaiSiswa.length; i++) {
        out += nilaiSiswa[i];
        // console.log(nilaiSiswa[i]);
    }
    return out/nilaiSiswa.length;
}

// mencetak nilai rata2 siswa menggunakan fungsi rata
console.log(rata(nilaiSiswa));