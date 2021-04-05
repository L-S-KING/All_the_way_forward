var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 木板管理类
 */
var BoardManager = (function () {
    function BoardManager() {
        /**木板 */
        this.board = null;
        /**木板数组 */
        this.boardArray = [];
    }
    BoardManager.getBoard = function () {
        if (this._board == null) {
            this._board = new BoardManager();
        }
        return this._board;
    };
    /**木板初始化 */
    BoardManager.prototype.createBoard = function (type, boardX, boardY) {
        this.board = new Board();
        this.board.boardInit(type);
        this.board.x = boardX;
        this.board.y = boardY;
        SceneManager.getInstance().currentScene.addChild(this.board);
        this.boardArray.push(this.board);
    };
    BoardManager._board = null;
    return BoardManager;
}());
__reflect(BoardManager.prototype, "BoardManager");
//# sourceMappingURL=BoardManager.js.map