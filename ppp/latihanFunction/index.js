function halo() {
  console.log("Halo, selamat belajar JavaScript!");
}

halo(); // Output: Halo, selamat belajar JavaScript!

// dengan prameter

function sapa(nama) {
  console.log("Halo, " + nama + "!");
}

sapa("Budi"); // Halo, Budi!
sapa("Ani"); // Halo, Ani!

// dengan return

function kali(a, b) {
  return a * b;
}

let hasil = kali(4, 5);
console.log(hasil); // 20

// function expresion
let luasPersegi = function (sisi) {
  return sisi * sisi;
};

console.log(luasPersegi(6)); // 36

// Arrow Function
let luasPersegiPanjang = (panjang, lebar) => panjang * lebar;

console.log(luasPersegiPanjang(5, 3)); // 15

// hitung diskon
let hitungDiskon = (harga, persen) => harga - (harga * persen) / 100;

console.log(hitungDiskon(100000, 10)); // 90000

// function dan if else

function cekUmur(umur) {
  if (umur >= 18) {
    return "Dewasa";
  } else {
    return "Anak-anak";
  }
}

console.log(cekUmur(20)); // Dewasa
console.log(cekUmur(12)); // Anak-anak

function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

console.log(cekGanjilGenap(10)); // Genap
console.log(cekGanjilGenap(7)); // Ganjil

function hitungDiskon(harga, persen) {
  let potongan = (harga * persen) / 100;
  let totalBayar = harga - potongan;
  return totalBayar;
}

console.log(hitungDiskon(100000, 10)); // 90000
console.log(hitungDiskon(250000, 20)); // 200000

// contoh login sederhana
function login(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login Berhasil";
  } else {
    return "Username dan Password Salah";
  }
}

// Contoh penggunaan
console.log(login("admin", "1234")); // Login Berhasil
console.log(login("user", "0000")); // Username dan Password Salah

function kalkulator(a, b, operator) {
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

  return hasil;
}

// Contoh penggunaan
console.log("Hasil:", kalkulator(8, 2, "+")); // 10
console.log("Hasil:", kalkulator(8, 2, "-")); // 6
console.log("Hasil:", kalkulator(8, 2, "*")); // 16
console.log("Hasil:", kalkulator(8, 2, "/")); // 4
console.log("Hasil:", kalkulator(8, 0, "/")); // Error: pembagian dengan nol!
