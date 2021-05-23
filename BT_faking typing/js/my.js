
function typeTextarea() {
    let arr = ['N', 'H', 'Ì', 'N', ' ', 'M', 'Ì', 'N', 'H', ' ', 'C', 'Ó', ' ', 'Đ', 'Á', 'N', 'G', ' ', 'Y', 'Ê', 'U', ' ', 'K', 'H', 'Ô', 'N', 'G', ' ', '?','<','3',' '];
    let n = '';
    t = document.getElementById('text').value;
    j = t.length;
    for (var i = 0; i < j; i++) {
        n = n + arr[i];
        }
    if (i === 33) {
        document.getElementById('text').value = '';
        n = '';
    }
    document.getElementById('text').value = n;
    n = '';
}


