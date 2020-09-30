//soal 1
var kataPertama = 'saya ';
var kataKedua ='senang ';
var kataKetiga = 'belajar ';
var kataKeempat = 'javascript';
var kapitall = kataKedua.charAt(0).toUpperCase(1) + kataKedua.slice(1);
var kapital = kataKeempat.toUpperCase();
console.log (kataPertama + kapitall + kataKetiga + kapital);
//soal 1

//soal 2
var kataPertama = '1';
var kataKedua = '2';
var kataKetiga = '4';
var kataKeempat = '5';
console.log (parseInt(kataPertama)+parseInt(kataKedua)+parseInt(kataKetiga)+parseInt(kataKeempat));
//soal 2

//soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = 'javascript'; // do your own! 
var kataKetiga = 'itu'; // do your own! 
var kataKeempat = 'keren'; // do your own! 
var kataKelima = 'sekali'; // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
//soal 3

//soal 4
var nilai = 90;
if (nilai >= 90){
    console.log (nilai + ' indeksnya A')
} else if (nilai >= 80 && nilai < 90) {
    console.log (nilai + ' indeksnya B')
} else if (nilai >= 70 && nilai < 80) {
    console.log (nilai + ' indeksnya C')
} else if (nilai >= 60 && nilai < 70) {
    console.log (nilai + ' indeksnya D')
} else {
    console.log (nilai + ' indeksnya E')
}
//soal 4

//soal 5
var tanggal = 24;
var bulan = 7;
var tahun = 1998;;
switch(bulan) {
  case 1:   { console.log( tanggal +' januari ' + tahun); break; }
  case 2:   { console.log( tanggal +' februari ' + tahun); break; }
  case 3:   { console.log( tanggal +' maret ' + tahun); break; }
  case 4:   { console.log( tanggal +' april ' + tahun); break; }
  case 5:   { console.log( tanggal +' mei ' + tahun); break; }
  case 6:   { console.log( tanggal +' juni ' + tahun); break; }
  case 7:   { console.log( tanggal +' juli ' + tahun); break; }
  case 8:   { console.log( tanggal +' agustus ' + tahun); break; }
  case 9:   { console.log( tanggal +' september ' + tahun); break; }
  case 10:  { console.log( tanggal +' oktober ' + tahun); break; }
  case 11:   { console.log( tanggal +' november ' + tahun); break; }
  case 12:   { console.log( tanggal +' desember ' + tahun); break; }
  default:  { console.log('bulan yang anda masukan salah!'); }}