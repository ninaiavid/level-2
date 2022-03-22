const colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];
document.body.style.display='flex'
document.body.style.justifyContent='center';

const buttonClick = () => {
    let i = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[i];
}
document.getElementById('button').addEventListener('click', buttonClick);
