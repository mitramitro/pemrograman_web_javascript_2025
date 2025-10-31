// type data string
// Berisi teks diapit tanda kutip (', ", atau `).
// console.log("Baris pertama.\nBaris kedua.");
// console.log("Baris pertama.\nBaris kedua.");
// console.log(`Baris pertama.
// Baris kedua.`);

// let sapa = `heloo`;
// let sapa2 = "heloo";
// console.log(sapa2);

// console.log(sapa, ", dengan tipe data: " + typeof sapa);

let nama = "Mitro";
let negara = "Indonesia";
// mitro orang indonesia
// let kalimat = nama + " orang " + negara;
// let kalimat = `${nama} orang ${negara} dikabupaten indramayu`;

// console.log(kalimat);
// tipe data number

let tahun = new Date().getFullYear();
console.log(tahun);

let tahun_lahir = 1984;

let usia = tahun - tahun_lahir;

// usia saya tahun ini adalah 41 tahun

console.log(`usia saya tahun ini ${usia} tahun `);

// latihan
// let name = "John";

// console.log(`hello ${1}`);

// console.log(`hello ${"name"}`);

// console.log(`hello ${name}`);

// const tahun_lahir = 1984;
// const usia_saya = `usia saya: ${tahun - tahun_lahir}`;
// console.log(usia_saya);

// type number
// const no = 40;
// const phi = 3.14;
// const id = 5;

// tdk normal
// const result = 200 / 0;
// console.log(result);

// const result2 = "lima puluh" / 8;
// console.log(result2);

// Bolean

const completed = true;
const passed = false;

console.log(completed, passed);

// bolean bisa dihasilkan juga Dari
// const lebihBesar = 400 > 200;
// console.log(lebihBesar);

// Nilai Kosong
let message;

console.log(message);

// let message;

// console.log(message);

// secara explisit
// let message = undefined;

// console.log(message);

// const name1 = { first: "Kelas ngoding", last: null };
// const name2 = { first: "Kelas ngoding", last: undefined };

// dalam format JSON
// console.log(JSON.stringify(name1));
// console.log(JSON.stringify(name2));

// konversi tipe data
// Konversi Manual (Explicit Conversion)
// ubah ke string
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber);
console.log(strBoolean);

// latihan
// ke string
// String(123);
// String(true);
// String(null);
// String(undefined);
// ke number
// Number("123");
// Number("123abc");
// Number(true);
// Number(false);
// Number(null);
// Number(undefined);

// console.log(parseInt("123.45cm"));
// parseInt("123.45 cm");
// parseFloat("123.45");

// (123).toString();
// true.toString();

// ke bolean
// Boolean(0);
// Boolean("");
// Boolean(null);
// Boolean(undefined);
// Boolean(NaN);

// Boolean(123);
// Boolean("hello");
// Boolean([]);
// Boolean({});

// Konversi Otomatis (Implicit Conversion / Type Coercion)
// console.log("5" + 3);
// console.log("5" - 3);
// console.log(true + 1);
console.log(false + 1);
// console.log(null + 1);
// console.log(undefined + 1);

// latihan
// Latihan 1: Penjumlahan 2 Angka
// Mengambil input angka pertama
let angka1 = prompt("Masukkan angka pertama:");
console.log(typeof angka1);
// Mengambil input angka kedua
let angka2 = prompt("Masukkan angka kedua:");

// Mengonversi input menjadi angka dan melakukan penjumlahan
let hasil = parseFloat(angka1) + parseFloat(angka2);

// Menampilkan hasil penjumlahan
alert("Hasil penjumlahan: " + hasil + "ton");

// Latihan: Menghitung Diskon

// Mengambil input harga asli dan diskon
// let hargaAsli = prompt("Masukkan harga asli barang:");
// let diskon = prompt("Masukkan persen diskon:");

// let hargaSetelahDiskon = Number(hargaAsli) - (Number(hargaAsli) * (Number(diskon) / 100));

// Menampilkan hasil
// alert("Harga setelah diskon adalah: " + hargaSetelahDiskon);

// Latihan: Menghitung Usia Pengguna
// let tahunLahir = prompt("Masukkan tahun lahir Anda:");
// let tahunSekarang = new Date().getFullYear();

// let usia = tahunSekarang - Number(tahunLahir);

// alert("Usia Anda adalah: " + usia + " tahun.");
