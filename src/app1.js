import  './app1.css'
import  $ from 'jquery'
console.log($)
const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#device2')
const $number  = $('#number')
const x = localStorage.getItem('x')
$number.text( x || 100)

$button1.on('click' , ()=>{
    let n = parseInt($number.text());
    n += 1;
    localStorage.setItem('x' , n)
    $number.text(n)
})

$button2.on('click' , ()=>{
    let n = parseInt($number.text());
    n -= 1;
    localStorage.setItem('x' , n)
    $number.text(n)
})

$button3.on('click' , ()=>{
    let n = parseInt($number.text());
    n *= 1;
    localStorage.setItem('x' , n)
    $number.text(n)
})

$button4.on('click' , ()=>{
    let n = parseInt($number.text());
    n /= 1;
    localStorage.setItem('x' , n)
    $number.text(n)
})