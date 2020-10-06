//Soal 1
///Release 0
class Animal {
    constructor(name){
      this._animalia = name;
      this._legs = 4;
      this.cold_blooded = false;
    }
    get animalia (){
        return this._animalia;
    }
    set animalia (name){
        this._animalia = name;
  }
}
var sheep = new Animal("shaun");
 
console.log(sheep._animalia)
console.log(sheep._legs)
console.log(sheep.cold_blooded)

///Release 1
class Frog extends Animal {
    constructor(name) {
      super(name);
    }
    jump() {
        return 'hop-hop'
    }
  }
  var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
console.log (kodok)

class Ape extends Animal{
    constructor (name){
        super(name)
            this._legs= 2;
    }
        yell(){
            return 'Auoo'
        }
}
    var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log (sungokong)
//Soal 1

//Soal 2
class Clock {
    constructor ({template}){
        this._template = template
        this.timer
    }
    
      render() {
        var date = new Date();
  
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        var output = this._template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs)
        console.log(output)
      }
    
      stop(){
        clearInterval(this.timer)
      }
    
      start(){
        this.render()
        this.timer =setInterval(()=>this.render(),1000)
      }
    
    }
    
    var clock = new Clock({template: 'h:m:s'});
    clock.start(); 
    //Soal 2  