// Latihan
let sekolah = "SMA Negeri 1";
let tahunLahir = 2005;
let sudahLulus = true;
let alamat;

console.log(`sekolah ${sekolah} ${typeof sekolah}`);
console.log(`alamat: ${alamat} ${typeof alamat}`);

// Simulasi aplikasi kasir:
// 1. hitung total harga belanja.
let hargaBuku = 50000;
let hargaPensil = 3000;
let jumlahBuku = 2;
let jumlahPensil = 5;
// cetak di console.log total harga RP:xxxxxxx
let total = hargaBuku * jumlahBuku + hargaPensil * jumlahPensil;
console.log("Total Harga RP: " + total);

// 2. Kamu belanja Rp 80.000, diskon 20%. Hitung berapa yang harus dibayar.
// buat variable hargaBaju untuk input harga
// nanti outputnya harga yang sudah didiskon
let hargaBaju = 50000;
let hargasetelahdiskon = hargaBaju - (hargaBaju * 20) / 100;
console.log(hargasetelahdiskon);

// 3. Hitung jumlah like di postingan.
// let like = 0;
// like++;
// like++;
// 4. Cek Genap/Ganjil (Modulus + Ternary)
let nomor = 6;
let jenis = nomor % 2 == 0 ? "genap" : "ganjil";
console.log(jenis);

// 5. Seseorang lulus kalau nilai >= 70 dan tidak bolos.
let nilai = 75;
let bolos = false;
let status2;

status2 = nilai >= 70 && !bolos ? "lulus" : "tidak lulus";
console.log(status2);

// 6. Operator penugasan - Simulasi top up saldo.
// saldo awal 5000, kemudian topup 100.000 dan ambil 20.000, tampilkan saldo akhir
// let saldo = 5000;
// console.log("Sisa saldo = " + saldo);
// 7. Bikin simulasi parkir:

// Biaya 2 jam pertama = Rp 2000 (flat).

// Setiap jam berikutnya = Rp 1000 per jam.
// let jam = 5; // lama parkir (misalnya 5 jam)
// tampilkan lama parkir
// tampilkan total bayar
