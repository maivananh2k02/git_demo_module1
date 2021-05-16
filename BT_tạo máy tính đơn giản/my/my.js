
function total() {
    let a=document.getElementById('sod').value;
    let b=document.getElementById('soHai').value;
    document.getElementById('kq').innerText=parseInt(a)+parseInt(b);
}
function minus() {
    let a=document.getElementById('sod').value;
    let b=document.getElementById('soHai').value;
    document.getElementById('kq').innerText=parseInt(a)-parseInt(b);
}
function tich() {
    let a=document.getElementById('sod').value;
    let b=document.getElementById('soHai').value;
    document.getElementById('kq').innerText=parseInt(a)*parseInt(b);
}
function thuong() {
    let a=document.getElementById('sod').value;
    let b=document.getElementById('soHai').value;
    document.getElementById('kq').innerText=parseInt(a)/parseInt(b);
}

// total()