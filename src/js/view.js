export default class View {
    constructor() {
        this.gameContainer = document.querySelector(".game-board");
        this.boardItems = this.gameContainer.querySelectorAll(".board-item");
        this.scoreX = document.querySelector(".score-x > span");
        this.scoreO = document.querySelector(".score-o > span");
        this.newGameBtn = document.querySelector(".new-game");
        this.resetBtn = document.querySelector(".reset-game");
        this.currentPlayer = "X";
        this.winnerPanel = document.querySelector(".winner-block");
        this.winnerCloseBtn = document.querySelector(".close-btn");
        this.winnerInfo = document.querySelector(".winner-info");
        this.winnerCloseBtn.addEventListener("click", () => {
            this.closeWinnerPanel();
        });
    };

    closeWinnerPanel() {
        this.winnerPanel.classList.remove("winner-active");
    };

    listenButtonClick(callback) {
        this.boardItems.forEach((item) => {
            item.addEventListener("click", () => {
                callback(item.dataset.item);
            });
        });
    };

    listenNewGameBtnClick(callback) {
        this.newGameBtn.addEventListener("click", () => {
            callback();
        });
    };

    listenResetBtnClick(callback) {
        this.resetBtn.addEventListener("click", () => {
            callback();
        });
    };

    addToBoard(board) {
        this.boardItems.forEach((item, index) => {
            item.textContent = board[index];
        });
    };

    manageScore(xScore, oScore) {
        this.scoreX.textContent = xScore;
        this.scoreO.textContent = oScore;
    };

    showModal(winner) {
        if (winner === "Draw") {
            this.winnerInfo.textContent = "It's a Draw!";
        } else {
            this.winnerInfo.textContent = `Player "${winner}" Wins!`;
        }
        const winSound = document.getElementById("winSound");
        winSound.play();
        this.winnerPanel.classList.add("winner-active");
    };
};
