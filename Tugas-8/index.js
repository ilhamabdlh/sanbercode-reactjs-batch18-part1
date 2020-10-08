
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 readBooks(10000, books[0], buku1 =>{
        readBooks(buku1, books[1], buku2 => {
            readBooks(buku2, books[2], buku3 => {
                readBooks(buku3, books[3], buku4 =>{
                    console.log(buku4);
                })
            })
        })
 })