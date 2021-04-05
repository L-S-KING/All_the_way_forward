/**
 * 道具管理类 
 * */
class PropManager 
{
	private constructor() 
	{
	}
	private static _prop:PropManager = null;
	public static getProp():PropManager
	{
		if(this._prop == null)
		{
			this._prop = new PropManager();
		}
		return this._prop;
	}
	/**道具 */
	private prop:Prop = null;
	/**道具数组 */
	public propArray:Prop[] = []
	/**创建道具 */
	public createProp(type:number, propX:number, propY:number)
	{
		this.prop = new Prop();
		this.prop.propInit(type);
		this.prop.x = propX;
		this.prop.y = propY;
		SceneManager.getInstance().currentScene.addChild(this.prop);
		this.propArray.push(this.prop);
	}
}