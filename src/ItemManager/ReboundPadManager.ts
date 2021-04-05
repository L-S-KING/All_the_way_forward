/**
 * 反弹垫管理类
 */
class ReboundPadManager 
{
	private constructor() 
	{
	}
	private static _pad:ReboundPadManager = null;
	public static getPad():ReboundPadManager
	{
		if(this._pad == null)
		{
			this._pad = new ReboundPadManager();
		}
		return this._pad;
	}
	/**反弹垫 */
	private pad:ReboundPad = null;
	/**反弹垫队列 */
	public padArray:ReboundPad[] = [];
	/**创建反弹垫 */
	public createPad(padX:number, padY:number)
	{
		this.pad = new ReboundPad();
		this.pad.padInit();
		this.pad.x = padX;
		this.pad.y = padY;
		SceneManager.getInstance().currentScene.addChild(this.pad);
		this.padArray.push(this.pad);
	}
}