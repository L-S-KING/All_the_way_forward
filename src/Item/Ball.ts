/**
 * 滚石
 * 滚木
 * 尖刺球
 */
class Ball extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**滚石、滚木、尖刺球 */
	public ball:egret.Bitmap = null;
	/**npc3种类 */
	public ballType:number = 0;
	/**npc3序列帧 */
	public ballIndex:number = 1;
	/**
	 * 滚木 type = 1
	 * 尖刺球 type = 2
	 * 滚石 type = 3
	 * 初始化 
	 * */
	public init(type:number)
	{
		this.ballType = type;
		this.ball = new egret.Bitmap();
		this.ball.texture = RES.getRes("ball" + this.ballType + this.ballIndex + "_png");
		this.ball.anchorOffsetX = this.ball.width * 0.5;
		this.ball.anchorOffsetY = this.ball.height * 0.5;
		this.addChild(this.ball);	
	}
	/**序列帧切换时间 */
	private frameTime:number = 0;
	/**速度 */
	private ballSpeed:number = 0;
	/**滚石移动方向 */
	private ballVectorX:number = 0;
	/**缓动时间 */
	private time:number = 0;
	/**地刺是否下落 */
	private isUp:boolean = true;
	/**滚木移动方向 */
	private vectorX:number = 1;
	/**滚石、滚木、尖刺球的移动 */
	public update()
	{
		if(TouchKeyManager.getTouchKey().touchKey.stop.selected)
		{
			return;
		}
		//滚木的移动
		if(this.ballType == 1)
		{
			this.ballSpeed = 4;
			this.x += this.ballSpeed * this.vectorX;
			for(let i=0;i<LandManager.getLand().landArray.length;i++)
			{
				//滚木更换滚动方向
				if(Math.abs(this.x - LandManager.getLand().landArray[i].x) < (this.ball.width + LandManager.getLand().landArray[i].land.width) * 0.5
				&& Math.abs(this.y - LandManager.getLand().landArray[i].y) < (this.ball.height + LandManager.getLand().landArray[i].land.height) * 0.5 )
				{
					if(this.x <= LandManager.getLand().landArray[i].x - LandManager.getLand().landArray[i].land.width * 0.5 + this.ball.width * 0.5 )
					{
						this.vectorX = 1;
					}
					if(this.x >= LandManager.getLand().landArray[i].x + LandManager.getLand().landArray[i].land.width * 0.5 - this.ball.width * 0.5 )
					{
						this.vectorX = -1;
					}
				}
			}
		}
		//尖刺球的移动
		if(this.ballType == 2)
		{
			if(this.isUp == true)
			{
				this.y -= 2;
				this.time += 1;
				if(this.time >= 80)
				{
					this.isUp = false;
				}
			}
			if(this.isUp == false)
			{
				this.y += 2;
				this.time -= 1;
			}
			if(this.time <= 0)
			{
				this.isUp = true;
			}
		}
		

		//滚石的移动
		if(this.ballType == 3)
		{
			this.ballSpeed = 5;
			this.x += this.ballSpeed * this.ballVectorX;
			//滚石与墙的碰撞
			for(let i=0;i<LandManager.getLand().landArray.length;i++)
			{
				if(LandManager.getLand().landArray[i].landType == 4)
				{
					//滚石与墙的左边碰撞
					if(Math.abs(this.x - LandManager.getLand().landArray[i].x) < (this.ball.width + LandManager.getLand().landArray[i].land.width) * 0.5
					&& Math.abs(this.y - LandManager.getLand().landArray[i].y) < (LandManager.getLand().landArray[i].land.height + this.ball.height) * 0.5)
					{
						this.ballVectorX = -1;
					}
					//滚石与墙的右边碰撞
					if(Math.abs(this.x - this.ball.width * 0.5- LandManager.getLand().landArray[i].x ) < (this.ball.width + LandManager.getLand().landArray[i].land.width) * 0.5
					&& Math.abs(this.y - LandManager.getLand().landArray[i].y) < (LandManager.getLand().landArray[i].land.height + this.ball.height) * 0.5)
					{
						this.ballVectorX = 1
					}
				}
			}	
		}

		this.frameTime += 1;
		if(this.frameTime % 5 == 0)
		{
			this.ballIndex += 1;
			if(this.ballIndex >= 4)
			{
				this.ballIndex = 1;
			}
		}
		this.ball.texture = RES.getRes("ball" + this.ballType + this.ballIndex + "_png");
		if(Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.ball.width + PlayerManager.getPlayer().player.player.width - 10) * 0.5
		&& Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.ball.height + PlayerManager.getPlayer().player.player.height - 10) * 0.5)
		{
			//玩家死亡
			PlayerManager.getPlayer().isDeath = true;
		}
	}
}