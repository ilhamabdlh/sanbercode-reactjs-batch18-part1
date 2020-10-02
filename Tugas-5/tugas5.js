//Soal 1
function halo(ucapkan = 'Halo Sanbers!'){
    return ucapkan
}
console.log(halo()) // "Halo Sanbers!" 
//Soal 1

//Soal 2
function kalikan(num1, num2) {
    return num1*num2
}
var num1 = 12
var num2 = 4
var hasilkali = kalikan(num1, num2);
console.log(hasilkali) 
//Soal 2

//Soal 3
function introduce (name, age, address, hobby){
    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun,' + ' alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!'
  }
   
  var name = "John"
  var age = 30
  var address = "Jalan belum jadi"
  var hobby = "Gaming"
   
  var perkenalan = introduce(name, age, address, hobby)
  console.log(perkenalan)
  //Soal 3

  //Soal 4
  var arrayDaftarPeserta = {
    hobi: "baca buku",
    "jenis kelamin": 'laki-laki',
    nama : 'Asep',
    "tahun lahir": '1992'
  }
  console.log (arrayDaftarPeserta)
  //Soal 4

  //Soal 5
  var buah = [{nama:'strawberry', warna: 'merah', adaBijinya: 'tidak', harga: 9000}, {nama: 'jeruk', warna: 'oranye', adaBijinya: 'ada', harga: 8000}, {nama: 'semangka', warna: 'hijau dan merah', adaBijinya: 'ada', harga: 10000}, {nama: 'pisang', warna: 'kuning', adaBijinya: 'tidak', harga: 5000}]
  console.log(buah[0]);
  //Soal 5

  //Soal 6
  var dataFilm = []
  function perFileman(nama, durasi, genre, tahun){
      dataFilm.push({
          nama : 'the shawshank redemption',
          durasi : '2 jam 20 menit',
          genre : 'mystery',
          tahun : 1994
        });
  return dataFilm;
} perFileman('nama', 'durasi', 'genre', 'tahun');
  console.log (dataFilm)
  //Soal 6