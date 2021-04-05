/**
 * 冰
 */
class Ice extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**冰 */
	public ice:egret.Bitmap = null;
	/**冰的种类 */
	private iceType:number = 0;
	/**冰的初始化 */
	public iceInit(type:number)
	{
		this.iceType = type;
		this.ice = new egret.Bitmap();
		this.ice.texture = RES.getRes("ice" + this.iceType + "_png");
		this.ice.anchorOffsetX = this.ice.width * 0.5;
		this.ice.anchorOffsetY = this.ice.height * 0.5;
		this.addChild(this.ice);
	}
	/**冰的速度 */
	private speed:number = 6;
	/**冰是否下落 */
	private isDown:boolean = false;
	public update()
	{
		if(TouchKeyManager.getTouchKey().touchKey.stop.selected)
		{
			return;
		}
		
		if(this.isDown == true)
		{
			this.y += this.speed
			for(let i=0;i<LandManager.getLand().landArray.length;i++)
			{
				if(Math.abs(this.x - LandManager.getLand().landArray[i].x) < (this.ice.width + LandManager.getLand().landArray[i].land.width) * 0.5
				&& Math.abs(this.y - LandManager.getLand().landArray[i].y) < (this.ice.height + LandManager.getLand().landArray[i].land.height) * 0.5)
				{
					//删除当前与墙碰撞子弹
					if(this.parent != null)
					{
						this.parent.removeChild(this);
						this.isDown = false;
					}
				}
			}	
		}
		if(this.iceType == 1)
		{
			if(this.y < PlayerManager.getPlayer().player.y )
			{
				{
					if(Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.ice.width + PlayerManager.getPlayer().player.player.width) * 0.5)
					{
						this.isDown = true;
					}
				}
			}
			if(Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.ice.width + PlayerManager.getPlayer().player.player.width) * 0.5
			&& Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.ice.height + PlayerManager.getPlayer().player.player.height) * 0.5)
			{
				PlayerManager.getPlayer().isDeath = true;
			}
		}
		if(this.iceType == 2)
		{
			//玩家跳跃的碰撞检测
			if(KeyboardControl.getKey().jumpState == true  && KeyboardControl.getKey().speedY <= 0)
			{
				if(this.y - PlayerManager.getPlayer().player.y  < (PlayerManager.getPlayer().player.player.height + this.ice.height) * 0.5 + 5 
				&& PlayerManager.getPlayer().player.y < this.y)
				{
					if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.ice.width * 0.5 + 10 
					&& PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.ice.width * 0.5 - 10)
					{
				
						// KeyboardControl.getKey().leftFlag = 0;
						// KeyboardControl.getKey().rightFlag = 0;
						// PlayerManager.getPlayer().player.x += 8;
						PlayerManager.getPlayer().player.y = this.y - this.ice.height * 0.5 - PlayerManager.getPlayer().player.player.height * 0.5;
						KeyboardControl.getKey().speedY = 0;
						KeyboardControl.getKey().jumpState = false;
						KeyboardControl.getKey().jumpTimes = 2;
					}
				}
			}
			//玩家走出ice时下落
			if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 < this.x - this.ice.width * 0.5 
			|| PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 > this.x + this.ice.width * 0.5)
			{
				KeyboardControl.getKey().jumpState = true;	
			}
			
			let n:number = 10;
			//让玩家不可以从ice左右两侧穿过
			//ice左边界检测
			if(Math.abs((PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5) - (this.x - this.ice.width * 0.5)) < (n + n) * 0.5
			&& Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.ice.height - n * 2) * 0.5
			&& KeyboardControl.getKey().rightFlag == 1)
			{
				PlayerManager.getPlayer().player.x = this.x - this.ice.width * 0.5 - PlayerManager.getPlayer().player.player.width * 0.5;
			}
			//ice右边界检测
			else if(Math.abs((PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5)- (this.x + this.ice.width * 0.5)) < (n + n) * 0.5
			&& Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.ice.height - n * 2) * 0.5
			&& KeyboardControl.getKey().leftFlag == 1)
			{
				PlayerManager.getPlayer().player.x = this.x + this.ice.width * 0.5 + PlayerManager.getPlayer().player.player.width * 0.5;
			}
			//ice下边界
			if(KeyboardControl.getKey().jumpState == true  && KeyboardControl.getKey().speedY > 0)
			{
				if(PlayerManager.getPlayer().player.y - this.y < (PlayerManager.getPlayer().player.player.height + this.ice.height) * 0.5 + 10 && PlayerManager.getPlayer().player.y > this.y)
				{
					if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.ice.width * 0.5 + 10 
					&& PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.ice.width * 0.5 - 10)
					{
						KeyboardControl.getKey().speedY = -2;
					}
				}
			}
		}
	}
}