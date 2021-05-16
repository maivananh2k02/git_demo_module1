function clickYes() {
    alert('Tớ cũng thích cậu lắm <3')
}
function prank() {
    let a=Math.random()*window.innerWidth;
    let b=Math.random()*window.innerHeight;
    document.getElementById('btnNo').style.left = a + 'px';
    document.getElementById('btnNo').style.top = b + 'px';
}