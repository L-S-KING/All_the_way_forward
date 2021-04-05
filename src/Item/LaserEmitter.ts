/**
 * 激光发射器
 */
class LaserEmitter extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**激光发射器 */
	public laserEmitter:egret.Bitmap = null;
	/**激光发射器的种类 */
	private laserEmitterType:number = 0;
	/**激光发射器的初始化 */
	public laserEmitterInit(type:number)
	{
		this.laserEmitterType = type;
		this.laserEmitter = new egret.Bitmap();
		this.laserEmitter.texture = RES.getRes("gun" + this.laserEmitterType + "_png");
		this.laserEmitter.anchorOffsetX = this.laserEmitter.width * 0.5;
		this.laserEmitter.anchorOffsetY = this.laserEmitter.height * 0.5;
		this.addChild(this.laserEmitter);
	}
}