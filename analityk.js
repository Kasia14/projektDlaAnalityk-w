const btnTransform = document.querySelector('.transponse');
class Matrix {
    macierz = [];
    x = 0;
    y = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
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

    transponse() {
        let newMatrix = [];
        for (let x = 0; x < this.macierz[0].length; x++) {
            let row = [];
            for (let y = 0; y < this.macierz.length; y++) {
                row.push(this.macierz[y][x]);
            }
            newMatrix.push(row);
        }
        this.macierz = newMatrix;
        this.x = this.macierz.length;
        this.y = this.macierz[0].length;
    }

    createMatrix() {
        const createMatrixInput = document.querySelector('.createMatrixInput');
        createMatrixInput.innerHTML = '';
        if (this.x !== 0 && this.y !== 0) {
            for (let i = 0; i < this.x; i++) {
                const row = document.createElement('div');
                row.className = 'row';
                for (let j = 0; j < this.y; j++) {
                    const input = document.createElement('input');
                    input.className = 'cell';
                    input.value = this.macierz[i][j];
                    var parent = this;
                    input.addEventListener('keyup', function() {
                        parent.setValue(i, j, input.value);
                    });
                    row.appendChild(input);
                }
                createMatrixInput.appendChild(row);
            }
        }
        else {
            alert('Liczba musi być większa od 0')
        }


    }
}





function hideOrShow() {
    const BtnCreate = document.querySelector('.createMatrix');
    const BtnTrans = document.querySelector('.transponse');
    BtnCreate.addEventListener('click', () => {
        const row = document.querySelector('.numberRow');
        const column = document.querySelector('.numberColumn')
        const matrix = new Matrix(row.value, column.value);
        matrix.createMatrix();
        BtnTrans.addEventListener('click', function () {
            matrix.transponse();
            matrix.createMatrix();
        })

        //zmienna globalna
        window.matrix = matrix;

        const rowColumn = document.querySelectorAll('.rowColumn');
        rowColumn.forEach(function (x) {
            if (x.style.display != 'none') {
                x.style.display = 'none';
            } else {
                x.style.display = 'block';
            }
        })
    })

}





hideOrShow();