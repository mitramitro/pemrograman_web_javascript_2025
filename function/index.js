// menghitung diskon

// let hargaBarang = 100000;
// let persen = 10;

// let potongan = hargaBarang * (persen / 100);
// let hardiskon = hargaBarang - potongan;
// console.log(hardiskon);

function hargaDiskon(hargaBarang, persen) {
  let potongan = hargaBarang * (persen / 100);
  let hardiskon = hargaBarang - potongan;
  console.log(hardiskon);
}

hargaDiskon(100000, 20);
hargaDiskon(500000, 20);
hargaDiskon(700000, 20);

// function sapa() {
//   console.log("hello");
// }

// sapa();

// 2. Kamu belanja Rp 80.000, diskon 20%. Hitung berapa yang harus dibayar.
// buat variable hargaBaju untuk input harga
// nanti outputnya harga yang sudah didiskon

// a = 10;
// b = 5;
// hasil = a + b;
// console.log(hasil);

//dengan parameter
// function penjumlahan(a = 0, b = 0) {
//   hasil = a + b;
//   console.log(hasil);
// }

// penjumlahan();

// dengan return
// function penjumlahan(a = 0, b = 0) {
//   let hasil = a + b;
//   return hasil;
// }

// let x = penjumlahan(3, 7);
// console.log(x);

// aplikasi cek umur
// let umur = 8;
// if (umur >= 18) {
//   console.log("dewasa");
// } else {
//   console.log("anak-anak");
// }

// function cekUmur(umur) {
//   if (umur >= 18) {
//     return "Dewasa";
//   } else {
//     return "anak-anak";
//   }
// }

// console.log(cekUmur(20));
// console.log(cekUmur(12));
// console.log(cekUmur(17));
// console.log(cekUmur(30));

// Luas persegi panjang (panjang * lebar)
// function hitungLuasPersegiPanjang(panjang, lebar) {
//   let hasil = panjang * lebar;
//   return hasil;
// }

// console.log(hitungLuasPersegiPanjang(5, 10));
// console.log(hitungLuasPersegiPanjang(10, 40));
// console.log(hitungLuasPersegiPanjang(15, 10));

// fungsi expresion

// let cekUmur = function (umur) {
//   if (umur >= 18) {
//     return "Dewasa";
//   } else {
//     return "anak-anak";
//   }
// };

// console.log(cekUmur(20));

// arrow function

// let cekUmur = (umur) => {
//   if (umur >= 18) {
//     return "Dewasa";
//   } else {
//     return "anak-anak";
//   }
// };

// console.log("status " + cekUmur(18));
