const grid = document.querySelector("#grid");
function createBoxes() {

    for (let i = 0; i < 16; i ++) {
        const row = document.createElement("div");
        row.setAttribute("style", "display: flex;");
        grid.appendChild(row);
        for (let l = 0; l < 16; l ++) {
            const box = document.createElement("div");
            box.setAttribute("style", "outline: solid 1px gray; width: 30px; height: 30px;");
            box.classList.add("gridBox");
            row.appendChild(box);
            box.addEventListener("mouseover", () => {
                box.style["background-color"] = "black";
            })
        }
        
    }
    

}

function clearAll() {
    const boxes = document.querySelectorAll(".gridBox");
    boxes.forEach((box) => {
        box.style["background-color"] = "white";
    })
}

createBoxes();