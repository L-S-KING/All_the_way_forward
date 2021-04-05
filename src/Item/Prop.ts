/**
 * 道具
 */
class Prop extends BaseScene{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**道具 */
	public prop:egret.Bitmap = null;
	/**道具种类 */
	private propType:number = 0;
	/**道具初始化 */
	public propInit(type:number)
	{
		this.propType = type;
		this.prop = new egret.Bitmap();
		this.prop.texture = RES.getRes("item" + this.propType + "_png");
		this.prop.anchorOffsetX = this.prop.width * 0.5;
		this.prop.anchorOffsetY = this.prop.height * 0.5;
		this.addChild(this.prop);
	}
	/**道具碰撞检测 */
	public update()
	{
		if(Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.prop.width + PlayerManager.getPlayer().player.player.width) * 0.5
		&& Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.prop.height + PlayerManager.getPlayer().player.player.height) * 0.5)
		{
			if(this.parent != null)
			{
				//删除碰撞道具
				this.parent.removeChild(this);
				//添加守护者
				GuardianManager.getGuardian().addGuardian();
			}
		}
	}
}