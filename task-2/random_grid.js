function main() {
    // event handlers and other code here
    let container = document.querySelector('.container');

    for (let i = 0; i < 10; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 1; j <= 10; j++) {
            let cell = document.createElement('div');
            cell.className = "cell";
            cell.textContent = (i * 10) + j;
            row.appendChild(cell);
        }
        container.appendChild(row);
    }

    let cells = document.getElementsByClassName("cell");

    setInterval(function () {
        let random = Math.floor(Math.random() * (cells.length));
        cells[random].classList.add("active");
        setTimeout(function () {
            cells[random].classList.remove("active");
        },500)
        // cells[random].className -= " active";
        // delete cells[random].className;
    }, 500);
}


main();
