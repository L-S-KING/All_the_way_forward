/**
 * 守护者子弹管理类
 */
class BulletManager 
{
	private constructor() 
	{
	}
	private static _bullet:BulletManager = null;
	public static getBullet():BulletManager
	{
		if(this._bullet == null)
		{
			this._bullet = new BulletManager();
		}
		return this._bullet;
	}
	/**守护者子弹 */
	private bullet:Bullet = null;
	/**守护者子弹队列 */
	public bulletArray:Bullet[] = [];
	/**创建守护者子弹 */
	public createBullet(bulletX:number, bulletY:number)
	{
		this.bullet = new Bullet();
		this.bullet.bulletInit();
		this.bullet.x = bulletX;
		this.bullet.y = bulletY;
		SceneManager.getInstance().currentScene.addChild(this.bullet);
		this.bulletArray.push(this.bullet);
	}
}