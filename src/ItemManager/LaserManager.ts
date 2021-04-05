class LaserManager 
{
	private constructor() 
	{
	}
	private static _laser:LaserManager = null;
	public static getLaser():LaserManager
	{
		if(this._laser == null)
		{
			this._laser = new LaserManager();
		}
		return  this._laser;
	}
	/**激光 */
	public laser:Laser = null;
	/**激光队列 */
	public laserArray:Laser[] = [];
	/**创建激光 */
	public createLaser(type:number, laserX:number, laserY:number)
	{
		this.laser = new Laser();
		this.laser.laserInit(type);
		this.laser.x = laserX;
		this.laser.y = laserY;
		SceneManager.getInstance().currentScene.addChild(this.laser);
		this.laserArray.push(this.laser);
	}
}