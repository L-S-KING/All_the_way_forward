/**
 * 钻石 
 * */
class Diamond extends BaseScene{
	public constructor() 
	{
		super();
	}
	/**钻石 */
	private diamond:egret.Bitmap = null;
	/**钻石初始化 */
	public diamondInit()
	{
		this.diamond = new egret.Bitmap();
		this.diamond.texture = RES.getRes("diamond_png");
		this.diamond.anchorOffsetX = this.diamond.width * 0.5;
		this.diamond.anchorOffsetY = this.diamond.height * 0.5;
		this.addChild(this.diamond);

		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**钻石碰撞检测 */
	public update()
	{
		if(Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.diamond.width + PlayerManager.getPlayer().player.player.width) * 0.5
		&& Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.diamond.height + PlayerManager.getPlayer().player.player.height) * 0.5)
		{
			if(this.parent != null)
			{
				this.parent.removeChild(this);
			}
			SceneManager.getInstance().addScene(new SuccessScene());
		}
		
		
	}
}