/**
 * 木板管理类
 */
class BoardManager 
{
	private constructor() 
	{
	}
	private static _board:BoardManager = null;
	public static getBoard():BoardManager
	{
		if(this._board == null)
		{
			this._board = new BoardManager();
		}
		return this._board;
	}
	/**木板 */
	private board:Board = null;
	/**木板数组 */
	public boardArray:Board[] = [];
	/**木板初始化 */
	public createBoard( type:number, boardX:number, boardY:number )
	{
		this.board = new Board();
		this.board.boardInit(type);
		this.board.x = boardX;
		this.board.y = boardY;
		SceneManager.getInstance().currentScene.addChild(this.board);
		this.boardArray.push(this.board);

	}
}