/**
 * 钻石管理类
 */
class DiamondManager 
{
	private constructor() 
	{
	}
	private static _diamond:DiamondManager = null;
	public static getdiamond():DiamondManager
	{
		if(this._diamond == null)
		{
			this._diamond = new DiamondManager();
		}
		return this._diamond;
	}
	/**钻石 */
	private diamond:Diamond = null;
	/**钻石队列 */
	public diamondArray:Diamond[] = [];
	/**钻石总数量 */
	public diamondTotal:number = 0;
	/**吃掉钻石数量 */
	public diamondNum:number = 0;
	/**创建钻石 */
	public createDiamond(diamondX:number, diamondY:number)
	{
		this.diamond = new Diamond();
		this.diamond.diamondInit();
		this.diamond.x = diamondX;
		this.diamond.y = diamondY;
		SceneManager.getInstance().currentScene.addChild(this.diamond);
		this.diamondArray.push(this.diamond);
	}
}