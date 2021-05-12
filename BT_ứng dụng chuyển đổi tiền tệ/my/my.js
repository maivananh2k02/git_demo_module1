
function myClick() {
    let money=document.getElementById('tien').value;
    let from=document.getElementById('from').value;
    let to=document.getElementById('to').value;
     T=money*to/from;
    document.getElementById('kq').innerText=T;
    document.getElementById('from').style.background="red"
    document.getElementById('to').style.background="red"
    document.getElementById('tien').style.background="white"
}
function over() {
    document.getElementById('sk').style.background="pink"
    document.getElementById('sk').style.color="red"

}
function out() {
    document.getElementById('sk').style.background="white"
    document.getElementById('sk').style.color="black"
}
function outSk() {
    document.getElementById('form').style.background="white"
}
function inputNumber() {
    document.getElementById('from').style.background="white"
    document.getElementById('to').style.background="white"

}
function dongBo() {
    document.getElementById('tien').style.background='red';
}