// Operator

let a = 12;
let b = 5;

// aritmatika
// penjumlahan
console.log(a + b); //17
console.log("1" + 1 + 3); // 113
console.log(1 + 3 + "1"); //41

// pengurangan
console.log("5" - 3); // 2

// perkalian
console.log(3 * 5); // 15

// pembagian
console.log(10 / 5); //2

// sisa bagi
console.log(20 % 10); // 0
console.log(21 % 10); // 1
console.log(14 % 3); // 2

// pangkat
console.log(5 ** 2); //25

//increament & Decrement
let bil = 5;
console.log(++bil);
console.log(++bil);
console.log(++bil);
console.log(--bil);

//Perbandingan (> , < , >= ,!=, ==, ===)

console.log(5 > 10); //false
console.log(5 == 5); //true
console.log("5" === 5); //false
console.log(4 != 5); //false

//Logika ( &&  ||  dan !)
console.log("operator logika");
console.log(true && false && true);
console.log(true || false || true);
console.log(!true);

// Penugasan (= +=)
let x = 10;
x += 5; //x = 10 + 5
x -= 2;
console.log(x); // 15-2

// type
let nama = "anton";
console.log(typeof nama);

// ternary
let umur = 20;
let keterangan = umur >= 17 ? "SUDAH BISA BIKIN KTP" : "BELUM BISA BIKIN KTP";
console.log(keterangan);
