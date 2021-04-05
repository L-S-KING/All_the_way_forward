/**
 * 反弹垫
 */
class ReboundPad extends BaseScene
{
	public constructor() 
	{
		super();
	}
	/**反弹垫 */
	public pad:egret.Bitmap = null;
	/**反弹垫初始化 */
	public padInit()
	{
		this.pad = new egret.Bitmap();
		this.pad.texture = RES.getRes("pad_png");
		this.pad.anchorOffsetX = this.pad.width * 0.5;
		this.pad.anchorOffsetY = this.pad.height * 0.5;
		this.addChild(this.pad);
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**玩家与反弹垫的碰撞 */
	public update()
	{
		if(TouchKeyManager.getTouchKey().touchKey.stop.selected)
		{
			return;
		}
		
		if(Math.abs(PlayerManager.getPlayer().player.y - (this.y - this.pad.height * 0.5)) < (this.pad.height * 0.5 + PlayerManager.getPlayer().player.player.height) * 0.5
		&& PlayerManager.getPlayer().player.x > this.x - this.pad.width * 0.5 - PlayerManager.getPlayer().player.player.width * 0.5
		&& PlayerManager.getPlayer().player.x < this.x + this.pad.width * 0.5 + PlayerManager.getPlayer().player.player.width * 0.5
		&& KeyboardControl.getKey().jumpState == true && KeyboardControl.getKey().speedY < 0)
		{
			KeyboardControl.getKey().speedY = - KeyboardControl.getKey().speedY;
		}
	}
}