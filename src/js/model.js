export default class Model {
    constructor() {
        this.currentPlayer = 'X';
        this.xScore = 0;
        this.oScore = 0;
        this.winner = null;
        this.board = ["", "", "", "", "", "", "", "", ""]
    };

    makeMove(position) {
        if (this.board[position] === "" && !this.winner) {
            this.board[position] = this.currentPlayer;
            this.checkWinner();
            this.switchPlayer();
        }
    };

    checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.winner = this.board[a];
                return;
            }

        }

        this.checkBoardIsFull();
    };

    checkBoardIsFull() {
        if (this.board.every((cell) => cell !== "") && !this.winner) {
            this.winner = "Draw";
        }
    };

    updateScore() {
        if (this.winner === "X") {
            this.xScore++;
        } else if (this.winner === "O") {
            this.oScore++;
        }
    };

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    };
    resetGame() {
        this.currentPlayer = "X";
        this.winner = null;
        this.board = ["", "", "", "", "", "", "", "", ""];
    };
    resetScore() {
        this.xScore = 0;
        this.oScore = 0;
    };
};