let number = Math.floor(Math.random() * 10)
let chance = 3
let win = document.getElementById('win')
let lose = document.getElementById('lose')
let main = document.getElementById('guess')
let wrong = document.getElementById('wrong')
console.log(number);


function guess() {
    let userNum = document.getElementById('user-num').value
    if (userNum == number) {
        main.style.display = 'none'
        win.style.display = 'block'
        wrong.style.display = 'none'
    }
    else {
        wrong.style.display = 'block'
        chance--
        console.log(chance);
        
        if (chance == 0) {
            main.style.display = 'none'
            lose.style.display = 'block'
            wrong.style.display = 'none'
        }
    }
    
}