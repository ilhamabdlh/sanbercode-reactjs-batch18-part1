//Soal 1
var pertama = 1;
while(pertama <= 20) {
  if (pertama <= 1) {
  console.log ('LOOPING PERTAMA')
  pertama++;
  } else {
  console.log(pertama + ' - I love coding');
  pertama+=2;
  }
} 
var dua = 21;
while(dua >= 1) {
  if (dua >= 21) {
  console.log ('LOOPING KEDUA')
  dua--;
  } else {
  console.log(dua + ' - I will become a frontend developer');
  dua-=2;
  }
} 
//Soal 1

//Soal 2
for (var ganjil = 1; ganjil <= 20; ganjil++) {
    if (ganjil%2 === 0){
      console.log (ganjil + ' - berkualitas')
      }
    else if ( ganjil % 3 === 0){
      console.log (ganjil + ' - I Love Coding')
    }
    else {
      console.log (ganjil + ' - Santai')
    }
  }
//Soal 2

//Soal 3
var kutip = '';
for (loop = 1; loop <= 7; loop++){
  if (kutip += '#')
  console.log (kutip)
}
//Soal 3

//Soal 4
var kalimat="saya sangat senang belajar javascript";
var hasil = kalimat.split(' ')
console.log (hasil)
//Soal 4

//Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for (var a = 0; a < daftarBuah.length; a++){
  console.log(daftarBuah[a])
}
//Soal 5