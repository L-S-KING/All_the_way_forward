class LandManager 
{
	private constructor() 
	{
	}
	private static _land:LandManager = null;
	public static getLand():LandManager
	{
		if(this._land == null)
		{
			this._land = new LandManager();
		}
		return this._land;
	}
	/**土地块 */
	private land:Land = null;
	/**土地块队列 */
	public landArray:Land[] = [];
	/**创建土地块 */
	public createLand(type:number, landX:number, landY:number)
	{
		this.land = new Land();
		this.land.landInit(type);
		this.land.x = landX;
		this.land.y = landY;
		SceneManager.getInstance().currentScene.addChild(this.land);
		this.landArray.push(this.land);
	}

}