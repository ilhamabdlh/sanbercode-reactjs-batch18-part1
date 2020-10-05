//Soal 1
///luas lingkaran
const luasLingkaran = (r) => {
    return phi * r * r
}
let r = 7
let phi = 22/7
console.log (luasLingkaran(r))
///luas lingkaran

///keliling lingkaran
const kLingkaran = (r) => {
    return phi * r * 2
}
let r = 21
let phi = 22/7
console.log (kLingkaran(r))
///keliling lingkaran
//Soal 1

//Soal 2
let kalimat = ""
const tambahKata = (kata) => {
  tampilan = kalimat += kata;
  return tampilan
}
tambahKata("saya ");
tambahKata("adalah ");
tambahKata("seorang ");
tambahKata("frontend ");
tambahKata("developer");
console.log(tampilan)
//Soal 2

//Soal 3
const newFunction = function literal(firstName, lastName){
    return {
      fullName: function(){
        console.log(firstName + " " + lastName)
      }
    }
  }
  newFunction("William", "Imoh").fullName()
  //Soal 3


  //Soal 4
  const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  };
  const {firstName, lastName, destination, occupation, spell} = newObject
  console.log(newObject)
  //Soal 4

  //Soal 5
  let west = ["Will", "Chris", "Sam", "Holly"]
  let east = ["Gill", "Brian", "Noel", "Maggie"]
  let combined = [...west, ...east]
  console.log(combined)
  //Soal 5