/**
 * 箭
 */
class Arrow extends BaseScene
{
	public constructor() 
	{
		super();
	}
	/**箭 */
	public arrow:egret.Bitmap = null;
	/**箭的初始化 */
	public arrowInit(vectorX:number)
	{

		this.arrowVectorX = vectorX;
		this.arrow = new egret.Bitmap();
		this.arrow.texture = RES.getRes("arrow_png");
		this.arrow.anchorOffsetX = this.arrow.width * 0.5;
		this.arrow.anchorOffsetY = this.arrow.height * 0.5;
		this.addChild(this.arrow);
		
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**箭的速度 */
	private arrowSpeed:number = 8;
	/**箭的移动方向 */
	private arrowVectorX:number = 0;
	/**
	 * 箭的移动
	 * 箭超出屏幕范围删除
	 */
	public update()
	{
		if(TouchKeyManager.getTouchKey().touchKey.stop.selected)
		{
			return;
		}
		
		//箭的移动
		this.x -= this.arrowSpeed * this.arrowVectorX;
		//箭超出屏幕范围删除
		if(Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.arrow.width + PlayerManager.getPlayer().player.player.width) * 0.5
		&& Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.arrow.height + PlayerManager.getPlayer().player.player.height) * 0.5)
		{
			PlayerManager.getPlayer().isDeath = true;
		}
		if(this.x + this.arrow.width * 0.5 <= 0 && this.parent != null)
		{
			this.parent.removeChild(this);
		}

		//骷髅的箭与墙的碰撞
		for(let i=0;i<LandManager.getLand().landArray.length;i++)
		{
			if(Math.abs(this.x - LandManager.getLand().landArray[i].x) < (this.arrow.width + LandManager.getLand().landArray[i].land.width) * 0.5
			&& Math.abs(this.y - LandManager.getLand().landArray[i].y) < (this.arrow.height + LandManager.getLand().landArray[i].land.height) * 0.5)
			{
				//删除当前与墙碰撞箭
				if(this.parent != null)
				{
					this.parent.removeChild(this);
				}
			}
		}	
	}
}