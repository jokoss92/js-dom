//tipe number
var x = 10
var y = 2.25

//tipe string
let number = parseInt(localStorage.getItem('number'));
if (isNaN(number)){
    number = 0
}
var judulDOM = document.getElementById('display-4')
var subjudulDOM = document.getElementById('lead')
//const angkaDOM = document.getElementById('angka')
const plusButtonDOM = document.getElementById('plus-button')
const minusButtonDOM = document.getElementById('minus-button')

subjudulDOM.innerHTML = number

plusButtonDOM.addEventListener('click', function(){
    console.log("Nilai number sekarang "+number)
    console.log('tombol plus diklik')
    number = number+1;
    console.log("Nilai number sekarang "+number)
    subjudulDOM.innerHTML = number
    localStorage.setItem('number', number)
})

minusButtonDOM.addEventListener('click', function(){
    console.log("Nilai number sekarang "+number)
    console.log('tombol minus diklik')
    number = number-1;
    console.log("Nilai number sekarang "+number)
    subjudulDOM.innerHTML = number
    localStorage.setItem('number', number)
})

var nama = prompt("Siapa namamu?")
console.log(nama);


//set data inner HTML ke DOM
judulDOM.innerHTML = "Selamat Datang, "+nama


//tipe boolean
var isLogin = true
console.log(nama)
console.log(x)
console.log(y)
console.log(isLogin)
console.error('AWAS')