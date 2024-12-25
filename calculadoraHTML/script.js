function adddisplay(value){
    let display = document.getElementById('display')
    display.value += value;
    display.innerHTML += value
}

function clean_display(){
    let display = document.getElementById('display')
    display.value = ''
    display.innerHTML = '0'

}

function calcular(){
    let display = document.getElementById('display')
    let resultado = eval(display.value)
    display.innerHTML = resultado
}