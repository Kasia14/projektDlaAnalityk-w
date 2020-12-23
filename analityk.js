const btnTransform = document.querySelector('.transponse');
class Matrix {
    macierz = [];
    constructor(x, y) {
       
        for (let i = 0; i < x; i++) {
            let wiersz = [];
            for (let j = 0; j < y; j++) {
                wiersz.push(0);
            }
            this.macierz.push(wiersz);
        }
    }

    display() {
        var napis = '';
        this.macierz.forEach(element => {
            element.forEach(x => {
                napis += x + ' ';
            });
            napis += '\n';
        });
        console.log(napis);
    }

    setValue(x, y, value) {
       this.macierz[x][y] = value;
    }

    getValue(x, y) {
        return this.macierz[x][y];
    }

    transponse(){
        let newMatrix = [];
        for(let x = 0; x < this.macierz[0].length; x++)
        {
            let row = [];
            for(let y = 0; y < this.macierz.length; y++)
            {
                row.push(this.macierz[y][x]);
            }
            newMatrix.push(row);
        }
        this.macierz = newMatrix;
    }


    
}



function hideOrShow () {
    const BtnCreate = document.querySelector('.createMatrix');
    BtnCreate.addEventListener('click', () =>{
        const rowColumn = document.querySelectorAll('.rowColumn');
        rowColumn.forEach(function(x) {
            if(x.style.display !='none'){
                x.style.display = 'none';
            } else{
                x.style.display = 'block';
            }
        })
    })
  
}


function createMatrix(){
    const createMatrixInput = document.querySelector('.createMatrixInput');
    const row = document.querySelector('.numberRow');
    const column = document.querySelector('.numberColumn')
   
    if(row !== 0 && column !== 0){
        for(let i = 1; i <=column.value; i++){
            const input = document.createElement("input");
            input.type = "number";
            input.innerHTML =`<input type="number">${i}</input>`;
            for(let j = 1; j <=row.value; j++){
                const input = document.createElement("div");
                input.innerHTML =`<div>${j}</div>`
            } 
        }
       

        
    }else {
        alert ('Liczba musi być większa od 0')
    }
    createMatrixInput.appendChild(input);
}


hideOrShow();



const matrix = new Matrix();
matrix.transponse();

btnTransform.addEventListener('click', matrix.transponse)