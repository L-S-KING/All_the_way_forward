/**
 * 激光发射器管理
 */
class LaserEmitterManager 
{
	private constructor() 
	{
	}
	private static _laserEmitter:LaserEmitterManager = null;
	public static getLaserEmitter():LaserEmitterManager
	{
		if(this._laserEmitter == null)
		{
			this._laserEmitter = new LaserEmitterManager();
		}
		return this._laserEmitter;
	}

	/**激光发射器 */
	private laserEmitter:LaserEmitter = null;
	/**激光发射器队列 */
	public laserEmitterArray:LaserEmitter[] = [];
	/**
	 * 添加激光发射器
	 * type:种类
	 * laserEmitterX:X坐标
	 * laserEmitterY:Y坐标
	 *  */
	public addLaserEmitter(type:number, laserEmitterX:number, laserEmitterY:number)
	{
		LaserManager.getLaser().createLaser(type,laserEmitterX,laserEmitterY);
		this.laserEmitter = new LaserEmitter();
		this.laserEmitter.laserEmitterInit(type);
		this.laserEmitter.x = laserEmitterX;
		this.laserEmitter.y = laserEmitterY;
		SceneManager.getInstance().currentScene.addChild(this.laserEmitter);
		this.laserEmitterArray.push(this.laserEmitter);
	}
}