/**
 * 玩家管理
 */
class PlayerManager 
{
	private constructor() 
	{
	}
	private static _player:PlayerManager = null;
	public static getPlayer():PlayerManager
	{
		if(this._player == null)
		{
			this._player = new PlayerManager();
		}
		return this._player;
	}
	/**玩家 */
	public player:Player = null;
	/**创建玩家 */
	public createPlayer(playerX:number, playerY:number)
	{
		this.player = new Player();
		this.player.playerInit();
		this.player.x = playerX;
		this.player.y = playerY;
		SceneManager.getInstance().currentScene.addChild(this.player);
	}
	/**玩家是否死亡 */
	public isDeath:boolean = false;
}