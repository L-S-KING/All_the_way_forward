/**
 * 星星管理类
 */
class StarManager 
{
	private constructor() 
	{
	}
	private static _star:StarManager = null;
	public static getStar():StarManager
	{
		if(this._star == null)
		{
			this._star = new StarManager();
		}
		return this._star;
	}
	/**星星 */
	private star:Star = null;
	/**星星队列 */
	public starArray:Star[] = [];
	/**星星总数量 */
	public starTotal:number = 0;
	/**吃掉星星数量 */
	public starNum:number = 0;
	/**创建星星 */
	public createStar(starX:number, starY:number)
	{
		this.star = new Star();
		this.star.starInit();
		this.star.x = starX;
		this.star.y = starY;
		SceneManager.getInstance().currentScene.addChild(this.star);
		this.starArray.push(this.star);
	}
}