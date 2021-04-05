/**
 * 玩家守护者
 * 负责攻击保护玩家
 */
class Guardian extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**守护者道具 */
	public guardian:egret.Bitmap = null;
	/**序列帧 */
	private guardianIndex:number = 1;
	/**守护者子弹 */
	private bullet:Bullet = null;
	/**守护者初始化 */
	public guardianInit()
	{
		this.guardian = new egret.Bitmap();
		this.guardian.texture = RES.getRes("man" + this.guardianIndex + "_png");
		this.guardian.anchorOffsetX = this.guardian.width * 0.5;
		this.guardian.anchorOffsetY = this.guardian.height * 0.5;
		this.addChild(this.guardian);
	}
	/**守护者序列帧切换时间 */
	private frameTime:number = 0;
	/**守护者子弹创建时间 */
	public createBulletTime:number = 0;
	/**
	 * 守护者的序列帧切换
	 * 守护者的移动
	 */
	public update()
	{
		if(TouchKeyManager.getTouchKey().touchKey.stop.selected)
		{
			return;
		}
		
		this.frameTime += 1;
		if(this.frameTime % 10 == 0)
		{
			this.guardianIndex += 1;
			if(this.guardianIndex >= 6)
			{
				this.guardianIndex = 1;
			}
			this.guardian.texture = RES.getRes("man" + this.guardianIndex + "_png");
		}
		//守护者跟随玩家
		GuardianManager.getGuardian().guardian.scaleX = PlayerManager.getPlayer().player.vectorX;
		GuardianManager.getGuardian().guardian.x = PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.vectorX * (PlayerManager.getPlayer().player.player.width + GuardianManager.getGuardian().guardian.guardian.width) * 0.4;
		GuardianManager.getGuardian().guardian.y = PlayerManager.getPlayer().player.y - (PlayerManager.getPlayer().player.player.height + GuardianManager.getGuardian().guardian.guardian.height) * 0.5;
		if(KeyboardControl.getKey().isX == true)
		{
			this.createBulletTime += 1
			let bulletX = GuardianManager.getGuardian().guardian.x - 60 * PlayerManager.getPlayer().player.vectorX;
			let bulletY = GuardianManager.getGuardian().guardian.y;
			if(this.createBulletTime % 8 == 0 || this.createBulletTime == 0)
			{
				BulletManager.getBullet().createBullet(bulletX,bulletY);
			}
			
		}
	}
}