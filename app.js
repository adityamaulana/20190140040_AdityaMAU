// CONSOLE LOG // 
console.log('CONSOLE LOG | Aditya Maulana')

// POP-UP MESSAGE //
alert('YOU MUST BE 21+ FOR ENTER THIS SITE!!!')


// POP-UP MESSAGE WITH CONFIRM OPTION //
confirm('DO YOU STILL LIKE...A GIRL?')

// Get Document Object Model (DOM)// 
let nama = "ADITYA MAULANA"
document.getElementById("nama").innerHTML = nama

let nim = "20190140040"
document.getElementById("nim").innerHTML = nim


let tanggal = new Date();
document.getElementById("tanggal").innerHTML = tanggal


// DOM for CSS (Giving a style)

function ChangeColorName (){

   document.getElementById("nama").style.color = 'White'
   document.getElementById("nama").style.backgroundColor = 'Black'
}

function ChangeColorNim (){

   document.getElementById("nim").style.backgroundColor = 'Red'
}

function ChangeColorDate (){

   document.getElementById("tanggal").style.backgroundColor = 'Yellow'
}