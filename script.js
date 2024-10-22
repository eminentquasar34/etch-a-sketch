const grid = document.querySelector("#grid");
function createBoxes() {

    for (let i = 0; i < 6; i ++) {
        const row = document.createElement("div");
        row.setAttribute("style", "display: flex;");
        grid.appendChild(row);
        for (let l = 0; l < 6; l ++) {
            const box = document.createElement("div");
            box.setAttribute("style", "outline: solid 1px gray; width: 50px; height: 50px;");
            row.appendChild(box);
        }
        
    }
    

}

createBoxes();