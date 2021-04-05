/**
 * 箭的管理类
 */
class ArrowManager 
{
	private constructor() 
	{
	}
	private static _arrow:ArrowManager = null;
	public static getArrow():ArrowManager
	{
		if(this._arrow == null)
		{
			this._arrow = new ArrowManager();
		}
		return this._arrow;
	}
	/**箭 */
	private arrow:Arrow = null;
	/**箭的队列 */
	public arrowArray:Arrow[] = [];
	/**创建箭 */
	public createArrow(arrowX:number, arrowY:number,vectorX:number)
	{
		this.arrow = new Arrow();
		this.arrow.arrowInit(vectorX);
		this.arrow.x = arrowX;
		this.arrow.y = arrowY;
		SceneManager.getInstance().currentScene.addChild(this.arrow);
		this.arrowArray.push(this.arrow);
	}
}