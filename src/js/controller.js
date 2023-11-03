export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.listenButtonClick((position) => this.handleCellClick(position));
    this.view.listenNewGameBtnClick(() => this.handleNewGameBtnClick());
    this.view.listenResetBtnClick(() => this.handleResetBtnClick());
  };

  handleCellClick(position) {
    if (this.model.winner || this.model.board[position] !== "") {
      return;
    }
    this.model.makeMove(position);
    this.view.addToBoard(this.model.board);
    this.checkGameStatus();
  };


  handleNewGameBtnClick() {
    this.model.resetGame();
    this.view.addToBoard(this.model.board);
  };

  handleResetBtnClick() {
    this.model.resetGame();
    this.model.resetScore();
    this.view.addToBoard(this.model.board);
    this.view.manageScore(this.model.xScore, this.model.oScore);
  };


  checkGameStatus() {
    if (this.model.winner) {
      this.model.updateScore();
      this.view.showModal(this.model.winner);
      this.view.manageScore(this.model.xScore, this.model.oScore);
    }
  };

};
