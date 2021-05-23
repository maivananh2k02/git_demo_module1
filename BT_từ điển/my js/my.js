let arrEl=['play','hello','buffalo','plow'];
let arrVn=[['(n)vở kịch','(v)chơi,đi chơi'],['(n)xin chào,chào'],['(n)con trâu'],['(v)cày,xới']];

function btn() {
    let a=document.getElementById('int').value;
    for (let i=0;i<arrEl.length;i++){
        if (a===arrEl[i]){
            document.getElementById('out').value=arrVn[i];
            break;
        }else {
            document.getElementById('out').value='không hiểu'
        }
    }
}
