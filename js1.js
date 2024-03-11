let box = document.querySelectorAll(".boxes");
let re = document.querySelector("#reset");
let msg = document.querySelector(".msg-cont");
let msge = document.querySelector("#msg");

let turn = true;

const idx = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

box.forEach((boxes) => {
    boxes.addEventListener("click", () => {

        if (turn) {
            boxes.innerText = "X";
            turn = false;
        }
        else {
            boxes.innerText = "O";
            turn = true;
        }
        boxes.disabled = true;

        chkwin();

    })
});

const dis = () => {
    for (let boxes of box) {
        boxes.disabled = true;
    }
}

const show_drw = () => {
    msge.innerText = "Oops, Game Drawn !!";
    msg.classList.remove("hide");
    dis();
}

const Show = (Winner) => {
    msge.innerText = `Congratulations, Winner is ${Winner}`;
    msg.classList.remove("hide");
    dis();
}

const chkwin = () => {
    for (const ptrn of idx) {
        let pos1 = box[ptrn[0]].innerText;
        let pos2 = box[ptrn[1]].innerText;
        let pos3 = box[ptrn[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                Show(pos1);

            }
        }
    }
}

re.addEventListener("click", () => {
    turn = true;
    msg.classList.add("hide");
    for (let boxes of box) {
        boxes.disabled = false;
        boxes.innerText = "";

    }
});