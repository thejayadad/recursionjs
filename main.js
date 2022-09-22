

function recursion(word){
    if(word.length > 1){
        console.log(word)
        let down = recursion(word.slice(1))

        console.log(down)
        console.log(word)
        return word
    } else {
        console.log(word)
        return word;
    }
}

recursion("Bye")