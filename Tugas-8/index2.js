var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Kalkulus', timeSpent: 1000}
]

time = 10000;
function execute (time){
    readBooksPromise(time, books[0]).then(
        function(item){
            readBooksPromise(item, books[1]).then(
                function(itemBaru){
                    readBooksPromise(itemBaru, books[2]).then(
                        function(itemBanget){
                            readBooksPromise(itemBanget, books[3]).then(
                                function(itemAnget){
                                    if(itemAnget > 0){
                                        books++;
                                        execute(itemAnget)
                                    }
                                }
                            )
                            
                        }
                    )
                }
            )
            
            
        }
    )
}
execute(time)