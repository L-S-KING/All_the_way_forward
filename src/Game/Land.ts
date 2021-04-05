class Land extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**土地块 */
	public land:egret.Bitmap = null;
	/**土地块种类 */
	public landType:number = 0;
	/**土地块初始化 */
	public landInit(type:number)
	{
		this.landType = type;
		this.land = new egret.Bitmap();
		this.land.texture = RES.getRes("land" + this.landType + "_png");
		this.land.anchorOffsetX = this.land.width * 0.5;
		this.land.anchorOffsetY = this.land.height * 0.5;
		this.addChild(this.land);
	}
	/**土地块与玩家的碰撞检测 */
	public update()
	{
		//玩家跳跃的碰撞检测
		if(KeyboardControl.getKey().jumpState == true  && KeyboardControl.getKey().speedY <= 0)
		{
			if(this.y - PlayerManager.getPlayer().player.y  < (PlayerManager.getPlayer().player.player.height + this.land.height) * 0.5 + 5 
			&& PlayerManager.getPlayer().player.y < this.y)
			{
				if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.land.width * 0.5 + 10 
				&& PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.land.width * 0.5 - 10)
				{
					if(this.landType <= 6)
					{
						PlayerManager.getPlayer().player.y = this.y - this.land.height * 0.5 - PlayerManager.getPlayer().player.player.height * 0.5 + 10;
					}
					else
					{
						PlayerManager.getPlayer().player.y = this.y - this.land.height * 0.5 - PlayerManager.getPlayer().player.player.height * 0.5;
					}
					KeyboardControl.getKey().speedY = 0;
					KeyboardControl.getKey().jumpState = false;
					KeyboardControl.getKey().jumpTimes = 2;
				}
			}
		}
		//玩家走出方块时下落
		if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 < this.x - this.land.width * 0.5 
		|| PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 > this.x + this.land.width * 0.5)
		{
			KeyboardControl.getKey().jumpState = true;	
		}
		
		let n:number = 10;
		//让玩家不可以从盒子左右两侧穿过
		//盒子左边界检测
		if(Math.abs((PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5) - (this.x - this.land.width * 0.5)) < (n + n) * 0.5
		&& Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.land.height - n * 2) * 0.5
		&& KeyboardControl.getKey().rightFlag == 1)
		{
			PlayerManager.getPlayer().player.x = this.x - this.land.width * 0.5 - PlayerManager.getPlayer().player.player.width * 0.5;
		}
		//盒子右边界检测
		else if(Math.abs((PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5)- (this.x + this.land.width * 0.5)) < (n + n) * 0.5
		&& Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.land.height - n * 2) * 0.5
		&& KeyboardControl.getKey().leftFlag == 1)
		{
			PlayerManager.getPlayer().player.x = this.x + this.land.width * 0.5 + PlayerManager.getPlayer().player.player.width * 0.5;
		}
		//盒子下边界
		if(KeyboardControl.getKey().jumpState == true  && KeyboardControl.getKey().speedY > 0)
		{
			if(PlayerManager.getPlayer().player.y - this.y < (PlayerManager.getPlayer().player.player.height + this.land.height) * 0.5 + 10 && PlayerManager.getPlayer().player.y > this.y)
			{
				if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.land.width * 0.5 + 10 
				&& PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.land.width * 0.5 - 10)
				{
					KeyboardControl.getKey().speedY = -2;
				}
			}
		}
	}
}
