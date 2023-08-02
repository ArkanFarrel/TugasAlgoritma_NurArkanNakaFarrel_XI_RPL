// let namaPerusahaan = ["HONDA", "SAMSUNG", "APPLE", "TOYOTA", "BMW", "OPPO", "VIVO"];
// console.log(namaPerusahaan[0]);

// namaPerusahaan.pop();
// console.log(namaPerusahaan); 

// for (let i = 0; i < namaPerusahaan.length; i++) {
//     console.log(namaPerusahaan[i]);
//   }
  
//   if (namaPerusahaan.length > 5) {
//     console.log("Banyak perusahaan!");
//   } else {
//     console.log("Tidak terlalu banyak perusahaan.");
//   }
  

let waktuBermain = [2, 2, 3, 3, 1, 4, 5];
let totalWaktu = 0;
let jumlahMelebihi = 0;

for (let i = 0; i < waktuBermain.length; i++) {
  totalWaktu += waktuBermain[i];
  
  if (waktuBermain[i] > 2) {
    jumlahMelebihi++;
  }
}

console.log(`Total waktu bermain game: ${totalWaktu}`, "jam");
console.log("Jumlah melebihi batas waktu bermain:", jumlahMelebihi, "hari");

// let waktu = [
//   {Hari : 'Senin', Waktu : 2},
//   {Hari : 'Selasa', Waktu : 2},
//   {Hari : 'Rabu', Waktu : 3},
//   {Hari : 'Kamis', Waktu : 3},
//   {Hari : 'Jumat', Waktu : 1},
//   {Hari : 'Sabtu', Waktu : 4},
//   {Hari : 'Minggu', Waktu : 5},
// ]
