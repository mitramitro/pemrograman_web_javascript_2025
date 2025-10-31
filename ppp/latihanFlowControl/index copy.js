// Penilaian Ujian
let nilai = 100;
if (nilai >= 85) {
  console.log("A");
} else if (nilai > 70) {
  console.log("B");
}
// Cek Usia untuk Registrasi
let umur = 16;

if (umur >= 18) {
  console.log("Boleh daftar akun");
} else {
  console.log("Belum cukup umur");
}
// Cek Ongkir Gratis
let belanja = 75000;

if (belanja >= 50000) {
  console.log("Gratis ongkir!");
} else {
  console.log("Tambahkan belanja Rp" + (50000 - belanja) + " lagi untuk gratis ongkir");
}
// Login Sederhana *
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login berhasil");
} else {
  console.log("Login gagal, cek username/password");
}

// Cek Ongkir Gratis *
let belanjaan = 75000;

if (belanjaan >= 50000) {
  console.log("Gratis ongkir!");
} else {
  console.log("Tambahkan belanja Rp" + (50000 - belanjaan) + " lagi untuk gratis ongkir");
}

// contoh switch
let hari = 3;
let namaHari;

switch (hari) {
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  case 7:
    namaHari = "Minggu";
    break;
  default:
    namaHari = "Hari tidak valid";
}
console.log("Hari ini:", namaHari);

let a = 8;
let b = 2;
let operator = "/";

let hasil;

switch (operator) {
  case "+":
    hasil = a + b;
    break;
  case "-":
    hasil = a - b;
    break;
  case "*":
    hasil = a * b;
    break;
  case "/":
    if (b !== 0) {
      hasil = a / b;
    } else {
      hasil = "Error: pembagian dengan nol!";
    }
    break;
  default:
    hasil = "Operator tidak dikenal";
}

console.log("Hasil:", hasil);

// contoh iterasi
// cetak bilangan 1 -10
for (let x = 1; x <= 10; x++) {
  console.log("loop " + x);
}
// Cetak bilangan genap 1–20
for (let y = 1; y <= 10; y = y + 2) {
  console.log(y);
}

// contoh while
let x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}

// contoh dengan array

for (let a = 0; a < buah.length; a++) {
  console.log("array pakai for " + buah[a]);
  console.log(buah.length);
}

let buah1 = ["mangga", "rambutan", "pisang"];
buah.forEach((item) => console.log(item));

let buah = ["apel", "mangga", "pisang"];

buah.forEach(function (namaBuah) {
  console.log(namaBuah);
});

let profile = {
  nama: "mitro",
  nohp: "099092093423",
  email: "mitramitro@gmail.com",
};

Object.keys(profile).forEach((key) => {
  console.log(profile[key]);
});

// latihan power point
//  Latihan 1

// Sebuah toko memberikan diskon 20% khusus untuk pembeli yang memiliki kartu member.
// Jika pembeli adalah member, tampilkan pesan:
//  "Anda adalah member. Harga setelah diskon 20% adalah Rp...."
// Jika pembeli bukan member, tampilkan pesan:
//  "Anda bukan member. Harga normal adalah Rp...."
// Input : Harga barang = Rp100.000 (gunakan variabel harga), dan status member ditentukan oleh variabel boolean isMember (true/ false)
const harga = 50000;
const isMember = false;

if (isMember) {
  let diskon = harga - (harga * 20) / 100;
  console.log("Anda adalah member. Harga setelah diskon 20% adalah Rp" + diskon);
} else {
  console.log("Anda bukan member. Harga normal adalah Rp" + harga);
}

// 2. Simulasi Parkir
// Sebuah tempat parkir menerapkan aturan:
// 2 jam pertama biaya parkir Rp2.000 (flat).
// Setiap jam berikutnya dikenakan biaya Rp1.000 per jam.
// Buatlah program dengan ketentuan:
// Buat variabel jam untuk menyimpan lama parkir (misalnya 5).
// Tampilkan di console.
// lama parkir .....jam
// total biaya parkir Rp.
let jam = 7;
let biaya;
if (jam > 2) {
  biaya = 2000 + (jam - 2) * 1000;
} else {
  biaya = 2000;
}

// if (biaya > 15000) {
//   biaya = 15000;
// }
console.log(biaya);
