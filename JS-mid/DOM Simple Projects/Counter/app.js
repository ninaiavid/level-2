const buttonClick1 = () => {
    document.querySelector('#counter').value++;
}

const buttonClick2 = () => {
    if (document.querySelector('#counter').value>1){
    document.querySelector('#counter').value--;
    }
}

document.getElementById('increment').addEventListener('click', buttonClick1);
document.getElementById('decrement').addEventListener('click', buttonClick2);
