/**
 * 云
 */
class Cloud extends BaseScene
{
	public constructor() 
	{
		super();
	}
	/**云 */
	public cloud:egret.Bitmap = null;
	/**云的种类 */
	private cloudType:number = 0;
	/**云的初始化 */
	public cloudInit(type:number)
	{
		this.cloudType = type;
		this.cloud = new egret.Bitmap();
		this.cloud.texture = RES.getRes("cloud" + this.cloudType + "_png");
		this.cloud.anchorOffsetX = this.cloud.width * 0.5;
		this.cloud.anchorOffsetY = this.cloud.height * 0.5;
		this.addChild(this.cloud);

		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**玩家与云是否碰撞 */
	private isCloud:boolean = false;
	/** */
	private time:number = 0;
	/**检测云与玩家的碰撞 */
	public update()
	{	
		if(this.isCloud == true)
		{
			if(this.cloudType == 1)
			{
				this.time += 1;
				if(this.time >= 60)
				{
					this.cloud.alpha = 0;
				}
				if(this.time >= 240)
				{
					this.cloud.alpha = 1;
					this.isCloud = false;
					this.time = 0;
				}
			}
			if(this.cloudType == 2)
			{
				PlayerManager.getPlayer().isDeath = true;
			}
		}
		//玩家跳跃与云的碰撞检测
		if(KeyboardControl.getKey().jumpState == true  && KeyboardControl.getKey().speedY <= 0 && this.cloud.alpha == 1)
		{
			if(this.y - PlayerManager.getPlayer().player.y  < (PlayerManager.getPlayer().player.player.height + this.cloud.height) * 0.5 + 10 
			&& PlayerManager.getPlayer().player.y < this.y)
			{
				if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.cloud.width * 0.5 + 10 
				&& PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.cloud.width * 0.5 - 10)
				{
					PlayerManager.getPlayer().player.y = this.y - this.cloud.height * 0.5 - PlayerManager.getPlayer().player.player.height * 0.5;
					KeyboardControl.getKey().speedY = 0;
					KeyboardControl.getKey().jumpState = false;
					KeyboardControl.getKey().jumpTimes = 2;
					this.isCloud = true;
				}
			}
		}
		//玩家走出云时下落
		if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 < this.x - this.cloud.width * 0.5 
		|| PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 > this.x + this.cloud.width * 0.5)
		{
			KeyboardControl.getKey().jumpState = true;	
		}
		
		let n:number = 10;
		//让玩家不可以从云左右两侧穿过
		//云左边界检测
		if(Math.abs((PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5) - (this.x - this.cloud.width * 0.5)) < (n + n) * 0.5
		&& Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.cloud.height) * 0.5
		&& KeyboardControl.getKey().rightFlag == 1)
		{
			PlayerManager.getPlayer().player.x = this.x - this.cloud.width * 0.5 - PlayerManager.getPlayer().player.player.width * 0.5;
		}
		//云右边界检测
		else if(Math.abs((PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5) - (this.x + this.cloud.width * 0.5)) < (n + n) * 0.5
		&& Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.cloud.height) * 0.5
		&& KeyboardControl.getKey().leftFlag == 1)
		{
			PlayerManager.getPlayer().player.x = this.x + this.cloud.width * 0.5 + PlayerManager.getPlayer().player.player.width * 0.5;
		}
	}

}