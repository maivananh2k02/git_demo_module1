
let arr=[];
function addArr() {
    let index=document.getElementById('ipt').value;
    arr.push(index)
    console.log(arr)
    document.getElementById('ipt').value=''
}

function disPlayArr() {
 let e='';
    for (let i = 0; i<arr.length; i++){
        e += "Hiển thị số thứ " + (i+1) + " là: " + arr[i] + "<br/>";
    }
    document.getElementById("hienThi").innerHTML = e;
}
