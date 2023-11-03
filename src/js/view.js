export default class View {
    constructor() {
        this.gameContainer = document.querySelector(".game-board");
        this.boardItems = this.gameContainer.querySelectorAll("board-item");
        this.scoreX = document.querySelector(".score-x > p");
        this.scoreY = document.querySelector(".score-y > p");
        // this.message = document.querySelector(".message");
        this.newGameBtn = document.querySelector(".new-game");
        this.resetBtn = document.querySelector(".reset-game");
    }
    listenButtonClick(callback) {
        this.boardItems.forEach((item) => {
            item.addEventListener("click", () => {
                callback();
            });
        });
    }

    listenNewGameBtnClick(callback) {
        this.newGameBtn.addEventListener("click", ()=> {
            callback();
        });
    }

    listenResetBtnClick(callback) {
        this.resetBtn.addEventListener("click", ()=> {
            callback();
        });

    }

    addToBoard(board) {
 
    }
    // switchBtnClass(curPlayer, btn) {
    //     btn.classList.remove("btn_x");
    //     btn.classList.remove("btn_o");
    //     curPlayer === "X" ? btn.classList.add("btn_x") : btn.classList.add("btn_o");
    // }

    showModal(winner) {
        console.log(scoreX,scoreY);
    }

    hideModal() {

    }


    manageScore(xScore, oScore) {

    }


}