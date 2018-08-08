function Letter(value){
    this.value = value
    this.guess = false;
    this.guessed = function(){
        if(this.guess){
            console.log(this.value)
        }
        else{
            console.log("_")
        }
    }
    this.check = function(newGuess){
        if(this.value === newGuess){
            this.guess = true;
        }
    }
}

module.exports = Letter;