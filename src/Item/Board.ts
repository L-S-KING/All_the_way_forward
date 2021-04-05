/**
 * 木板
 */
class Board extends BaseScene
{
	public constructor() 
	{
		super();
	}
	/**木板 */
	private board:egret.Bitmap = null;
	/**木板种类 */
	private boardType:number = 0;
	/**木板初始化 */
	public boardInit(type:number)
	{
		this.boardType = type;
		this.board = new egret.Bitmap();
		this.board.texture = RES.getRes("board" + this.boardType + "_png");
		this.board.anchorOffsetX = this.board.width * 0.5;
		this.board.anchorOffsetY = this.board.height * 0.5;
		this.addChild(this.board)
		this.addEventListener(egret.Event.ENTER_FRAME,this.update,this);
	}
	/**木板竖直移动速度 */
	private speedY:number = 0;
	/**缓动时间 */
	private time:number = 0;
	/**是否处于上升状态 */
	private isUp:boolean = true;
	/**是否与板碰撞 */
	private isBoard:boolean = false;
	/**下落速度 */
	private speedDown:number = 0;
	/**偏移量 */
	private n:number = 0;
	/**是否向右移动 */
	private isGo:boolean = false;
	/**水平移动速度 */
	private goSpeed:number = 0;
	/**水平移动时间 */
	private goTime:number = 0;
	/**木板3是否下落 */
	private isDown:boolean = false;
	/**
	 * 木板与玩家的碰撞检测
	 * 木板的移动
	 *  */
	public update()
	{
		if(TouchKeyManager.getTouchKey().touchKey.stop.selected)
		{
			return;
		}
		
		//当木板种类为1时，木板的移动
		if(this.boardType == 1)
		{
			this.n = 10;
			this.y -= this.speedY;
			if(this.isUp == true)
			{
				this.speedY = 2;
				this.time += 1;
				if(this.time >= 100)
				{
					this.isUp = false;
				}
			}
			if(this.isUp == false)
			{
				this.speedY = -2;
				this.time -= 1;
				if(this.time <= 0)
				{
					this.isUp = true;
				}
			}
		}
		//当木板种类为2时，木板的移动
		if(this.boardType == 2)
		{
			this.x += this.goSpeed;
			if(this.isGo == false)
			{
				this.goSpeed = -3;
				this.time += 1;
				if(this.time >= 80)
				{
					this.isGo = true;
				}
			}
			if(this.isGo == true)
			{
				this.goSpeed = 3;
				this.time -= 1;
				if(this.time <= 0)
				{
					this.isGo = false;
				}
			}
			if(this.isBoard == true)
			{
				if(KeyboardControl.getKey().leftFlag == 0 && KeyboardControl.getKey().rightFlag == 0)
				{
					PlayerManager.getPlayer().player.x += this.goSpeed;
				}
			}
		}
		//当木板种类为3时，木板的移动
		if(this.isDown == true && this.boardType == 3)
		{
			this.n = 20;
			this.speedDown += 1;
			this.y += this.speedDown;
			for(let i=0;i<LandManager.getLand().landArray.length;i++)
			{
				if(Math.abs(this.x - LandManager.getLand().landArray[i].x) < (this.board.width + LandManager.getLand().landArray[i].land.width ) * 0.5
				&& Math.abs(this.y - LandManager.getLand().landArray[i].y) < (this.board.height + LandManager.getLand().landArray[i].land.height) * 0.5)
				{
					this.y = LandManager.getLand().landArray[i].y - LandManager.getLand().landArray[i].land.height * 0.5 - this.board.height * 0.5 + 10;
					this.speedDown = 0;
					this.isDown = false;
				}
			}
			if(this.y >= 800)
			{
				if(this.parent != null)
				{
					this.parent.removeChild(this)
				}
			}
		}
		//当木板种类为4时，木板的移动
		if(this.boardType == 4 && this.isBoard == true )
		{
			this.n = 10;
			this.y -= this.speedY;
			if(KeyboardControl.getKey().jumpState == false)
			{
				PlayerManager.getPlayer().player.y = this.y - this.board.height * 0.5 - PlayerManager.getPlayer().player.player.height * 0.5;
			}
			
			if(this.isUp == true)
			{
				this.speedY = 6;
				this.time += 1;
				if(this.time >= 20)
				{
					this.isUp = false;
				}
			}
			if(this.isUp == false)
			{
				this.speedY = -6;
				this.time -= 1;
			}
			if(this.time <= 0)
			{
				this.isUp = true;
			}
		}
		//当木板种类为5时
		if(this.boardType == 5)
		{
			if(this.isBoard == true)
			{
				KeyboardControl.getKey().rightFlag = 1;
				PlayerManager.getPlayer().player.vectorX = 1;
				KeyboardControl.getKey().leftFlag = 0;
				PlayerManager.getPlayer().player.playerSpeed = 8;
				for(let i=0;i<BgManager.getBg().bgArray.length;i++)
				{
					BgManager.getBg().bgArray[i].bgSpeed = 8;
					if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 < this.x - this.board.width * 0.5 
					|| PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 > this.x + this.board.width * 0.5)
					{
						this.isBoard = false;
						PlayerManager.getPlayer().player.playerSpeed = 4;
						BgManager.getBg().bgArray[i].bgSpeed = 4;
						KeyboardControl.getKey().rightFlag = 0;
					}
				}	
			}
		}
		//玩家跳跃与木板的碰撞检测
		if(KeyboardControl.getKey().jumpState == true  && KeyboardControl.getKey().speedY <= 0)
		{
			if(this.y - PlayerManager.getPlayer().player.y  < (PlayerManager.getPlayer().player.player.height + this.board.height) * 0.5 + 10 
			&& PlayerManager.getPlayer().player.y < this.y)
			{
				if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.board.width * 0.5 + this.n 
				&& PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.board.width * 0.5 - this.n)
				{
					this.isBoard = true;
					this.isDown = true;
					PlayerManager.getPlayer().player.y = this.y - this.board.height * 0.5 - PlayerManager.getPlayer().player.player.height * 0.5;
					KeyboardControl.getKey().speedY = 0;
					KeyboardControl.getKey().jumpState = false;
					KeyboardControl.getKey().jumpTimes = 2;
				}
			}
		}
		//玩家走出木板时下落
		if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 < this.x - this.board.width * 0.5 
		|| PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 > this.x + this.board.width * 0.5)
		{
			KeyboardControl.getKey().jumpState = true;	
			this.isBoard = false;
		}
		
		let n:number = 10;
		//让玩家不可以从木板左右两侧穿过
		//木板左边界检测
		if(Math.abs((PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5) - (this.x - this.board.width * 0.5)) < (n + n) * 0.5
		&& Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.board.height) * 0.5
		&& KeyboardControl.getKey().rightFlag == 1)
		{
			PlayerManager.getPlayer().player.x = this.x - this.board.width * 0.5 - PlayerManager.getPlayer().player.player.width * 0.5;
		}
		//木板右边界检测
		else if(Math.abs((PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5) - (this.x + this.board.width * 0.5)) < (n + n) * 0.5
		&& Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.board.height) * 0.5
		&& KeyboardControl.getKey().leftFlag == 1)
		{
			PlayerManager.getPlayer().player.x = this.x + this.board.width * 0.5 + PlayerManager.getPlayer().player.player.width * 0.5;
		}
		//木板下边界
		if(KeyboardControl.getKey().jumpState == true  && KeyboardControl.getKey().speedY > 0)
		{
			if(PlayerManager.getPlayer().player.y - this.y < (PlayerManager.getPlayer().player.player.height + this.board.height) * 0.5 + 10 && PlayerManager.getPlayer().player.y > this.y)
			{
				if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.board.width * 0.5 + 10 
				&& PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.board.width * 0.5 - 10)
				{
					KeyboardControl.getKey().speedY = -2;
				}
			}
		}
	}
}