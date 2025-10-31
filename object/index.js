let siswa = {
  nama: "Budi",
  kelas: "X IPA",
  alamat: "sindang Indramayu",
};

// destructuring
let { nama, kelas } = siswa;

console.log(`Nama: ${nama}`);
document.getElementById("nama").innerText = nama;
console.log(`Kelas: ${siswa.kelas}`);
document.getElementById("kelas").innerText = kelas;
siswa.usia = 17;
console.log(`Umur: ${siswa.usia}`);
document.getElementById("umur").innerText = siswa.usia;

console.log(`alamat: ${siswa.alamat}`);
document.getElementById("alamat").innerText = siswa.alamat;

let buku = {
  judul: "Laskar Pelangi",
  penulis: "Andrea Hirata",
  tahun: 2005,
};

// judul buku: Laskar Pelangi
// penulis: "Andrea Hirata"
// tahun: 2005
q;
