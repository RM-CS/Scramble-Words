const rslt = document.querySelector('.result');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false
let words = ['twitter', 'whatsapp','facebook' , 'instagram', 'linkedin', 'snapchat', 'gmail', 'netflix', 'spotify', 'paytm']
let newWords = "";
let randomWords = ""


const newWordsFunc = () => {
    let randomNum = Math.floor(Math.random() * words.length)
    let newTempWords = words[randomNum]
    // console.log(newTempWords)
    return newTempWords
}

const jumbleLetter = (arr) => {
    for(let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        // console.log(temp)
        let j = Math.floor(Math.random()*(i+1));
        // console.log(i)
        // console.log(j)
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}

btn.addEventListener('click', function() {
    if (!play) {
        play = true;
        btn.innerHTML = "check";
        guess.classList.toggle('hidden');
        newWords = newWordsFunc()
        randomWords = jumbleLetter(newWords.split("")).join("")
        rslt.innerHTML = `Guess this -> ${randomWords}`
    }
    else {
        let newTempWords = guess.value;
        if(newTempWords == newWords){
            // console.log("correct")
            play = false
            rslt.innerHTML = `Hurray! :) You win <br><br>`
            btn.innerHTML = "Next Word"
            guess.classList.toggle('hidden');
            guess.value = ""
        }
        else{
            // console.log("incorrect")
            rslt.innerHTML = `Sad! :'( Try again <br> ${randomWords}`
            guess.value = ""
        }
    }
})