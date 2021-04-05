/**
 * 碰撞盒管理类
 */
class CollisionBoxManager extends BaseScene
{
	private constructor() 
	{
		super();
	}
	//单例
	private static _CollisionBox:CollisionBoxManager = null;
	/**碰撞盒管理单例 */
	public static getCollisionBox():CollisionBoxManager
	{
		if(this._CollisionBox == null)
		{
			this._CollisionBox = new CollisionBoxManager;
		}
		return this._CollisionBox;
	}
	/**碰撞盒数组 */
	public boxArray:Box[] = [];
	/**创建碰撞盒 
	 * posX碰撞盒x坐标
	 * posY碰撞盒y坐标
	 * width:碰撞盒的宽
	 * height：碰撞盒的高
	*/
	public createCollisionBox(posX:number, posY:number, width:number, height:number)
	{
		let box = new Box();
		box.init(width,height);
		box.anchorOffsetX = width * 0.5;
		box.anchorOffsetY = height * 0.5;
		box.x = posX;
		box.y = posY;
		SceneManager.getInstance().currentScene.addChild(box);
		this.boxArray.push(box);
	}
}