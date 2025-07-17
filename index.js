let buttons = document.querySelectorAll(".btn");
let resetButton = document.getElementById("reset");
let messageEl = document.getElementById("message-el");

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let playerO = true;

const disableButtons = () => {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

const message = (winner) => {
    messageEl.textContent = `Winner is: ${winner}`;
    disableButtons()
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Button clicked");
        if(playerO === true)
        {
            button.textContent = "O";
            button.style.color = "#f70b0bff";
            button.disabled = true;
            playerO = false;
        }
        else
        {
            button.textContent = "X";
            button.style.color = "#0b0bf7ff";
            button.disabled = true;
            playerO = true;
        }
        winner();
    });
});

function winner() {
    for(let pattern of winningPatterns) {
        let pos1 = buttons[pattern[0]].textContent;
        let pos2 = buttons[pattern[1]].textContent;
        let pos3 = buttons[pattern[2]].textContent;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1===pos2 && pos2===pos3) {
                console.log("Winner is: " + pos1);
                message(pos1);
            }
            else {
                console.log("No winner yet");
            }
        }
    }
}

function reset() {
    buttons.forEach((buttons) => {
        buttons.textContent ="";
        buttons.disabled = false;

    })
    messageEl.textContent = "";
}
