/**
 * 冰管理类
 */
class IceManager 
{
	private constructor() 
	{
	}
	private static _ice:IceManager = null;
	public static getIce():IceManager
	{
		if(this._ice == null)
		{
			this._ice = new IceManager();
		}
		return this._ice;
	}
	/**冰 */
	private ice:Ice = null;
	/**冰队列 */
	public iceArray:Ice[] = [];
	/**
	 * 创建冰
	 * type:冰的种类
	 * iceX:创建第一块冰的X坐标
	 * iceY:创建第一块冰的Y坐标
	 * iceNum:创建冰的个数
	 * iceIntervalX:创建冰之间横向的间隔
	 * iceIntervalY:创建冰之间纵向的间隔
	 */
	public createIce(type:number, iceX:number, iceY:number, iceNum:number, iceIntervalX:number, iceIntervalY:number)
	{
		for(let i=0;i<iceNum;i++)
		{
			this.ice = new Ice();
			this.ice.iceInit(type);
			this.ice.x = i * iceIntervalX + iceX;
			this.ice.y = i * iceIntervalY + iceY;
			SceneManager.getInstance().currentScene.addChild(this.ice);
			this.iceArray.push(this.ice);
		}
	}
}