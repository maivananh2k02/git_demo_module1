function getClick() {
    let inp=document.getElementById('inp').value;
    let from=document.getElementById('from').value;
    let to=document.getElementById('to').value;
    T=inp*to/from;
    document.getElementById('out').innerText=T;
}