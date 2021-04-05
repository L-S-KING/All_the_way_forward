/**
 * 游戏背景管理类
 */
class BgManager 
{
	private constructor() 
	{
	}
	private static _bg:BgManager = null;
	public static getBg():BgManager
	{
		if(this._bg == null)
		{
			this._bg = new BgManager();
		}
		return this._bg;
	}
	/**背景 */
	public bg:Bg = null;
	/**背景队列 */
	public bgArray:Bg[] = [];
	/**关卡数 */
	public levelNum:number = 0;
	/**关卡背景初始化 */
	public createBg(type:number)
	{
		KeyboardControl.getKey().isKey = true;
		
		this.levelNum = type;
		for(let i=0;i<4;i++)
		{
			this.bg = new Bg();
			this.bg.bgInit(type);
			this.bg.x = 1280 * i;
			this.bg.y = 0;
			SceneManager.getInstance().currentScene.addChild(this.bg);
			this.bgArray.push(this.bg);
		}
	}
}