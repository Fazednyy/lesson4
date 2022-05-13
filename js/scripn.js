let names = document.getElementById('name').value;
let color = document.getElementById('color').value;
let code = document.getElementById('code').value;
let button = document.getElementById('save');
let RGB = document.getElementById('RGB').value;
let RGBA = document.getElementById('RGBA').value
let HEX = document.getElementById("HEX")
// let option = document.getElementsByTagName('option').value;
button.onclick = function(){
    let div = document.createElement('div');
 div.className = 'box';
 div.innerHTML = `<h2>${names}</h2> <div>${color}</div><div>${code}</div>`
//  localStorage.setItem('RGB', style);
if(RGB == color){
    div.style.background = `rgb(${code})`   
}
if(HEX == color){
    div.style.background = `hex(${code})`
}
if(RGBA == color){
    div.style.background =`RGBA(${code})`
}

 document.body.append(div)
//  console.log(localStorage.getItem('RGB'));
}