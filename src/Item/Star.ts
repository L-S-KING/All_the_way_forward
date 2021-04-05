/**
 * 星星 
 * */
class Star extends BaseScene
{
	public constructor() 
	{
		super();
	}
	/**星星 */
	private star:egret.Bitmap = null;
	/**星星初始化 */
	public starInit()
	{
		this.star = new egret.Bitmap();
		this.star.texture = RES.getRes("star_png");
		this.star.anchorOffsetX = this.star.width * 0.5;
		this.star.anchorOffsetY = this.star.height * 0.5;
		this.addChild(this.star);

		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**星星碰撞检测 */
	public update()
	{
		if(Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.star.width + PlayerManager.getPlayer().player.player.width) * 0.5
		&& Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.star.height + PlayerManager.getPlayer().player.player.height) * 0.5)
		{
			if(this.parent != null)
			{
				this.parent.removeChild(this);
				StarManager.getStar().starNum += 1;
			}
		}
	}
}