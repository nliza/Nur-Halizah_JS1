// if 
let suhu = 35;
if (suhu < 37) {
    console.log("Anda sehat");
}

// if else 
let wifi = "lemot";
if (wifi === "lancar") {
    console.log ("saya mau nonton spy x family");
} else {
    console.log ("saya mau ganti provider wifi saja");
}

// nested if 
let mata = "ngantuk";
let tugas = "aman";
if (mata === "ngantuk" && tugas === "aman") {
    console.log("mau tidur dengan nyenyak");
} else if (mata === "ngantuk" && tugas === "numpuk") {
    console.log("harus begadang");
} else if (mata === "segar" && tugas === "aman") {
    console.log("lanjut scroll Twitter");
} else if (mata === "segar" && tugas === "numpuk") {
    console.log("mengerjakan tugas dengan semangat");
} else {
    console.log("kondisi tidak terdefinisi");
}

// switch case
// switch case
let pilihan = "lingkaran";
let rumus;
switch (pilihan) {
  case "persegi":
    rumus = "sisi x sisi";
    break;
  case "segitia":
    rumus = "(alas x tinggi)/2";
    break;
  case "persegi panjang":
    rumus = "panjang x lebar";
    break;
  case "lingkaran":
    rumus = "π*r^2";
    break;
  default:
    rumus = "tidak ada";
}
console.log(`Rumus dari bangun datar ${pilihan} adalah ${rumus}`);

// for statement
let total = 0;
for (let i = 760; i <= 777; i++) {
  total += i;
}
console.log("Total: " + total);

//while
let i = 17;
while (i <= 25) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
}

// do while
let angka = 61;
do {
  console.log(angka);
  angka += 4;
} while (angka <= 72);

//function
const readline2 = require('readline'); // Ganti readline menjadi readline2
const rl2 = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});
function hitungJumlahHuruf(kata) {
  let jumlahHuruf = kata.length;
  return jumlahHuruf;
}
rl2.question('Masukkan sebuah kata : ', (kata) => {
  let jumlahHuruf = hitungJumlahHuruf(kata);

  console.log("Jumlah huruf dalam kata tersebut adalah : " + jumlahHuruf);

  rl2.close();
});
