// Operator

let a = 12;
let b = 5;

// aritmatika
// penjumlahan
console.log(a + b);
console.log("1" + 1 + 2);

// pengurangan
// perkalian
// pembagian
// sisa bagi
console.log(a % b);

// pangkat
console.log(5 ** 2);

//increament & Decrement
console.log("increament & Decrement");

console.log(++a);
console.log(++a);

console.log(--b);

//Perbandingan

console.log(b > a);

//Logika
console.log(a === a && a > b);
// console.log("");

// Penugasan

// type

// ternary
// Kalau umur >= 17 → “Boleh bikin KTP”, kalau tidak → “Belum boleh”.
// let umur = 17;
// let keterangan = umur >= 17 ? "boleh bikin KTP" : "belum boleh";
// console.log(keterangan);

// Latihan
// Simulasi aplikasi kasir:
// 1. hitung total harga belanja.
// let hargaBuku = 50000;
// let hargaPensil = 3000;
// let jumlahBuku = 2;
// let jumlahPensil = 5;
// cetak di console.log total harga RP:xxxxxxx

// 2. Kamu belanja Rp 80.000, diskon 20%. Hitung berapa yang harus dibayar.
// 3. Hitung jumlah like di postingan.
let like = 0;
like++;
like++;
like++;
like++;
like++;
like--;
// tampilkan jumlah like diconsole.log
// 4. Cek Genap/Ganjil (Modulus + Ternary)
let nomor = 21;
let jenis = nomor % 2 == 0 ? "genap" : "ganjil";
console.log(jenis);

// 5. Seseorang lulus kalau nilai >= 70 dan tidak bolos.
let nilai = 75;
let bolos = false;
// let lulus =

// 6. Operator penugasan - Simulasi top up saldo.
// saldo awal 5000, kemudian topup 100.000 dan ambil 20.000, tampilkan saldo akhir
let saldo = 5000;
console.log("Sisa saldo = " + saldo);

// 7. Kita bikin simulasi parkir:

// Biaya 2 jam pertama = Rp 2000 (flat).

// Setiap jam berikutnya = Rp 1000 per jam.
let jam = 5; // lama parkir (misalnya 5 jam)

// jika <= 2 jam, bayar 2000
// jika lebih, bayar 2000 + sisa jam * 1000
let biaya = jam <= 2 ? 2000 : 2000 + (jam - 2) * 1000;

console.log("Lama parkir: " + jam + " jam");
console.log("Total bayar: Rp " + biaya);
