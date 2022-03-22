document.getElementById('button').style.marginLeft = '50%';

const buttonClick = () => {
    let i = Math.floor(Math.random()*qoutes.length);
    display.innerHTML += `<div>"${qoutes[i].qoute}" Author: ${qoutes[i].author}</div>`;
}
document.getElementById('button').addEventListener('click', buttonClick);
