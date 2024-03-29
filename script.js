const container = document.getElementById('container');

function createDivs() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const newDiv = document.createElement("div");
            newDiv.innerText= j+1;
            newDiv.classList.add("square");
            container.appendChild(newDiv);
        }
    }
}

createDivs();

const squares = document.getElementsByClassName('square');

console.log(squares);

for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('mouseover', ()=>{
        squares[i].classList.add('square-hover');
    });
}
