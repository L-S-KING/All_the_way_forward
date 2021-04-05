/**
 * 碰撞盒
 */
class Box extends BaseScene
{
	public constructor() 
	{
		super();
	}
	/**矩形 */
	public rect:egret.Shape = null;
	/**碰撞盒初始化 */
	public init(width:number,height:number)
	{
		this.rect = new egret.Shape();
		this.rect.graphics.beginFill(0xfffff,0);
		this.rect.graphics.drawRect(0,0,width,height);
		this.rect.graphics.endFill();
		this.addChild(this.rect);
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**碰撞盒与玩家的碰撞检测 */
	public update()
	{
		//玩家跳跃的碰撞检测
		if(KeyboardControl.getKey().jumpState == true  && KeyboardControl.getKey().speedY <= 0)
		{
			if(this.y - PlayerManager.getPlayer().player.y  < (PlayerManager.getPlayer().player.player.height + this.rect.height) * 0.5 + 10 && PlayerManager.getPlayer().player.y < this.y)
			{
				if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.rect.width * 0.5 + 10 
				&& PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.rect.width * 0.5 - 10)
				{
					PlayerManager.getPlayer().player.y = this.y - this.rect.height * 0.5 - PlayerManager.getPlayer().player.player.height * 0.5;
					KeyboardControl.getKey().speedY = 0;
					KeyboardControl.getKey().jumpState = false;
					KeyboardControl.getKey().jumpTimes = 2;
				}
			}
		}
		//玩家走出方块时下落
		if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 < this.x - this.rect.width * 0.5 
		|| PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 > this.x + this.rect.width * 0.5)
		{
			KeyboardControl.getKey().jumpState = true;	
		}
		
		let n:number = 2;
		//让玩家不可以从盒子左右两侧穿过
		//盒子左边界检测
		if(Math.abs(PlayerManager.getPlayer().player.x - (this.x - this.rect.width * 0.5)) < (PlayerManager.getPlayer().player.player.width + n) * 0.5
		&& Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.rect.height) * 0.5
		&& KeyboardControl.getKey().rightFlag == 1)
		{
			PlayerManager.getPlayer().player.x = this.x - this.rect.width * 0.5 - PlayerManager.getPlayer().player.player.width * 0.5;
		}
		//盒子右边界检测
		else if(Math.abs(PlayerManager.getPlayer().player.x - (this.x + this.rect.width * 0.5)) < (PlayerManager.getPlayer().player.player.width + n) * 0.5
		&& Math.abs(PlayerManager.getPlayer().player.y - this.y) < (PlayerManager.getPlayer().player.player.height + this.rect.height) * 0.5
		&& KeyboardControl.getKey().leftFlag == 1)
		{
			PlayerManager.getPlayer().player.x = this.x + this.rect.width * 0.5 + PlayerManager.getPlayer().player.player.width * 0.5;
		}
		//盒子下边界
		if(KeyboardControl.getKey().jumpState == true  && KeyboardControl.getKey().speedY > 0)
		{
			if(PlayerManager.getPlayer().player.y - this.y < (PlayerManager.getPlayer().player.player.height + this.rect.height) * 0.5 + 10 && PlayerManager.getPlayer().player.y > this.y)
			{
				if(PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width * 0.5 > this.x - this.rect.width * 0.5 + 10 
				&& PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width * 0.5 < this.x + this.rect.width * 0.5 - 10)
				{
					KeyboardControl.getKey().speedY = -2;
				}
			}
		}
	}

}