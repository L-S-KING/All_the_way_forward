/**
 * 激光
 */
class Laser extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**激光 */
	public laser:egret.Bitmap = null;
	/**激光种类 */
	public laserType:number = 0;
	/**激光初始化 */
	public laserInit(type:number)
	{
		this.laserType = type;
		this.laser = new egret.Bitmap();
		this.laser.texture = RES.getRes("laser" + this.laserType + "_png");
		//激光种类为1时
		if(this.laserType == 1)
		{
			this.laser.anchorOffsetY = this.laser.height * 0.5;
			this.laser.width = 0;
		}
		//激光种类为2或3时
		if(this.laserType == 2 || this.laserType == 3)
		{
			this.laser.anchorOffsetX = this.laser.width * 0.5;
			this.laser.height = 0;
		}
		//激光种类为4时
		if(this.laserType == 4)
		{
			this.laser.anchorOffsetX = this.laser.width * 0.5;
			this.laser.anchorOffsetY = this.laser.height * 0.5;
		}
		this.addChild(this.laser);
	}
	/**激光发射计时 */
	private time:number = 60;
	/**激光是否发射 */
	private isLaunch:boolean = true;
	/**发射速度 */
	private speed:number = 12;

	public update()
	{
		if(TouchKeyManager.getTouchKey().touchKey.stop.selected)
		{
			return;
		}
		
		//当激光种类为4时，与玩家的碰撞检测
		if(this.laserType == 4)
		{
			if(Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.laser.width + PlayerManager.getPlayer().player.player.width) * 0.5
			&& Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.laser.height + PlayerManager.getPlayer().player.player.height) * 0.5)
			{
				PlayerManager.getPlayer().isDeath = true;
			}
		}
		//激光发射
		if(this.isLaunch == true)
		{
			//激光种类为1时
			if(this.laserType == 1)
			{
				this.laser.width += this.speed;
				for(let i=0;i<LandManager.getLand().landArray.length;i++)
				{
					if(Math.abs((this.x + this.laser.width) - (LandManager.getLand().landArray[i].x - LandManager.getLand().landArray[i].land.width * 0.5)) < (5 + 5) * 0.5
					&& Math.abs(this.y - LandManager.getLand().landArray[i].y) < (this.laser.height + LandManager.getLand().landArray[i].land.height) * 0.5 
					&& this.x < LandManager.getLand().landArray[i].x)
					{
						this.speed = 0;
						this.time -= 1;
					}
				}
				//激光与玩家碰撞检测
				if(Math.abs(this.x + this.laser.width * 0.5 - PlayerManager.getPlayer().player.x) < (this.laser.width + PlayerManager.getPlayer().player.player.width) * 0.5
				&& Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.laser.height + PlayerManager.getPlayer().player.player.height) * 0.5)
				{
					PlayerManager.getPlayer().isDeath = true;
				}
			}

			//激光种类为2时
			if(this.laserType == 2)
			{
				this.laser.height += this.speed;
				for(let i=0;i<LandManager.getLand().landArray.length;i++)
				{
					if(Math.abs((this.y + this.laser.height) - (LandManager.getLand().landArray[i].y - LandManager.getLand().landArray[i].land.height * 0.5)) < (5 + 5) * 0.5
					&& Math.abs(this.x - LandManager.getLand().landArray[i].x) < (this.laser.width + LandManager.getLand().landArray[i].land.width) * 0.5
					&& this.y < LandManager.getLand().landArray[i].y)
					{
						this.speed = 0;
						this.time -= 1;
					}
				}
				//激光与玩家碰撞检测
				if(Math.abs(this.y + this.laser.height * 0.5 - PlayerManager.getPlayer().player.y) < (this.laser.height + PlayerManager.getPlayer().player.player.height) * 0.5
				&& Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.laser.width + PlayerManager.getPlayer().player.player.width) * 0.5)
				{
					PlayerManager.getPlayer().isDeath = true;
				}
			}
			//激光种类为3时
			if(this.laserType == 3)
			{
				this.time -= 1;
				this.laser.height += this.speed;
				//激光与玩家碰撞检测
				if(Math.abs(this.y + this.laser.height * 0.5 - PlayerManager.getPlayer().player.y) < (this.laser.height + PlayerManager.getPlayer().player.player.height) * 0.5
				&& Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.laser.width + PlayerManager.getPlayer().player.player.width) * 0.5)
				{
					PlayerManager.getPlayer().isDeath = true;
				}
			}
			if(this.time <= 0)
			{
				this.isLaunch = false;
			}
		}
		//激光未发射
		if(this.isLaunch == false)
		{
			this.time += 1;
			{
				if(this.laserType == 1)
				{
					this.laser.width = 0;
				}
				if(this.laserType == 2)
				{
					this.laser.height = 0;
				}
				if(this.laserType == 3)
				{
					this.laser.height = 0;
				}
			}
			if(this.time >= 60)
			{
				this.isLaunch = true;
				this.speed = 12;
			}
		}
	}
}