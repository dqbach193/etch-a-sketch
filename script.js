const container = document.getElementById('container');


function createDivs(num) {
    for (let i = 0; i < num; i++) {
        const newContainer = document.createElement("div");
        newContainer.classList.add('row-container');
        for (let j = 0; j < num; j++) {
            const newDiv = document.createElement("div");
            newDiv.innerText= j+1;
            newDiv.classList.add("square");
            newContainer.appendChild(newDiv);
        }
        container.appendChild(newContainer);
    }
}

createDivs(16);

const squares = document.getElementsByClassName('square');

function addHoverClass(){
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener('mouseover', ()=>{
            squares[i].classList.add('square-hover');
        });
    }
}
addHoverClass();


const squareInit = document.getElementById("square-init");

squareInit.addEventListener('click',()=>{
    let num = prompt("Enter the number of squares");
    
    if(num == Math.sqrt(squares.length)){
        return;
    }else if(num > 100){
        alert('Please enter a number lower than 100');
    }else{
        container.replaceChildren();
        createDivs(num);
        addHoverClass();
    }
})



