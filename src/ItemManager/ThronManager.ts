/**
 * 地刺管理类
 */
class ThronManager
{
	private constructor() 
	{
	}
	private static _thron:ThronManager = null;
	public static getThron():ThronManager
	{
		if(this._thron == null)
		{
			this._thron = new ThronManager();
		}
		return this._thron;
	}
	/**地刺 */
	private thron:Thron = null;
	/**地刺队列 */
	public thronArray:Thron[] = [];
	/**地刺初始化 */
	public createThron(type:number, thronX:number, thronY:number)
	{
		this.thron = new Thron();
		this.thron.init(type);
		this.thron.x = thronX;
		this.thron.y = thronY;
		SceneManager.getInstance().currentScene.addChild(this.thron);
		this.thronArray.push(this.thron);
	}
}