const grid = document.querySelector("#grid");

function createBoxes() {

    for (let i = 0; i < 4; i ++) {
        const row = document.createElement("div");
        row.setAttribute("style", "display: flex;");
        grid.appendChild(row);
        for (let l = 0; l < 4; l ++) {
            const box = document.createElement("div");
            box.setAttribute("style", "outline: solid 2px black; width: 50px; height: 50px;");
            row.appendChild(box);
        }
        
    }
    

}

createBoxes();