/**
 * 关卡背景
 */
class Bg extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**背景 */
	public bg:egret.Bitmap = null;
	/**关卡背景 */
	public bgType:number = 0;
	/**关卡背景初始化 */
	public bgInit(type:number)
	{
		this.bgType = type;
		this.bg = new egret.Bitmap();
		this.bg.texture = RES.getRes("bg" + this.bgType + "_jpg");''
		this.addChild(this.bg);
	}
	/**背景移动速度数值 */
	public bgSpeed:number = 4;
	/**背景移动的速度 */
	private speed:number = 0;
	/**背景的移动 */
	public update()
	{
		this.speed = this.bgSpeed;
		if(KeyboardControl.getKey().rightFlag == 1 )
		 {
			 if(PlayerManager.getPlayer().player.x > 640 && BgManager.getBg().bgArray[0].x > -3840)
			 {
				 PlayerManager.getPlayer().player.x = 640;
				 //背景的移动
				 for(let i=0;i<BgManager.getBg().bgArray.length;i++)
				 {
					BgManager.getBg().bgArray[i].x -= this.speed;
				 }
				 //土地块的移动
				for(let i=0;i<LandManager.getLand().landArray.length;i++)
				 {
					LandManager.getLand().landArray[i].x -= this.speed;
				 }
				 //星星的移动
				 for(let i=0;i<StarManager.getStar().starArray.length;i++)
				 {
					 StarManager.getStar().starArray[i].x -= this.speed;
				 }
				 //骷髅的移动
				 for(let i=0;i<BoneManager.getBone().boneArray.length;i++)
				 {
					 BoneManager.getBone().boneArray[i].x -= this.speed;
				 }
				 //地刺的移动
				 for(let i=0;i<ThronManager.getThron().thronArray.length;i++)
				 {
					 ThronManager.getThron().thronArray[i].x -= this.speed;
				 }
				 //滚石、滚木。尖刺球的移动
				 for(let i=0;i<BallManager.getBall().ballArray.length;i++)
				 {
					 BallManager.getBall().ballArray[i].x -= this.speed;
				 }
				 //云
				 for(let i=0;i<CloudManager.getCloud().cloudArray.length;i++)
				 {
					 CloudManager.getCloud().cloudArray[i].x -= this.speed;
				 }
				 //木板
				 for(let i=0;i<BoardManager.getBoard().boardArray.length;i++)
				 {	
					 BoardManager.getBoard().boardArray[i].x -= this.speed;
				 }
				 //箭
				 for(let i=0;i<ArrowManager.getArrow().arrowArray.length;i++)
				 {
					 ArrowManager.getArrow().arrowArray[i].x -= this.speed;
				 }
				 //钻石
				 for(let i=0;i<DiamondManager.getdiamond().diamondArray.length;i++)
				 {
					 DiamondManager.getdiamond().diamondArray[i].x -= this.speed;
				 }
				 //守护者子弹
				 for(let i=0;i<BulletManager.getBullet().bulletArray.length;i++)
				 {
					 BulletManager.getBullet().bulletArray[i].x -= this.speed;
				 }
				 //反弹垫
				 for(let i=0;i<ReboundPadManager.getPad().padArray.length;i++)
				 {
					 ReboundPadManager.getPad().padArray[i].x -= this.speed;
				 }
				 //道具
				 for(let i=0;i<PropManager.getProp().propArray.length;i++)
				 {
					 PropManager.getProp().propArray[i].x -= this.speed;
				 }
				 //冰
				 for(let i=0;i<IceManager.getIce().iceArray.length;i++)
				 {
					 IceManager.getIce().iceArray[i].x -= this.speed;
				 }
				  //激光
				 for(let i=0;i<LaserManager.getLaser().laserArray.length;i++)
				 {
					 LaserManager.getLaser().laserArray[i].x -= this.speed;
				 }
				  //激光发射器
				  for(let i=0;i<LaserEmitterManager.getLaserEmitter().laserEmitterArray.length;i++)
				 {
					 LaserEmitterManager.getLaserEmitter().laserEmitterArray[i].x -= this.speed;
				 }
			 }
			 if(BgManager.getBg().bgArray[0].x <= -3840)
			 {
				 this.speed = 0;
			 }
		 }
		 if(KeyboardControl.getKey().leftFlag == 1)
		 {
			 if( PlayerManager.getPlayer().player.x < 640 && BgManager.getBg().bgArray[0].x < 0)
			 {
				PlayerManager.getPlayer().player.x = 640;
				 //背景的移动
				 for(let i=0;i<BgManager.getBg().bgArray.length;i++)
				 {
					BgManager.getBg().bgArray[i].x += this.speed;
				 }
				 //土地块的移动
				 for(let i=0;i<LandManager.getLand().landArray.length;i++)
				 {
					LandManager.getLand().landArray[i].x += this.speed;
				 }
				 //星星的移动
				 for(let i=0;i<StarManager.getStar().starArray.length;i++)
				 {
					 StarManager.getStar().starArray[i].x += this.speed;
				 }
				 //骷髅的移动
				 for(let i=0;i<BoneManager.getBone().boneArray.length;i++)
				 {
					 BoneManager.getBone().boneArray[i].x += this.speed;
				 }
				 //地刺的移动
				 for(let i=0;i<ThronManager.getThron().thronArray.length;i++)
				 {
					ThronManager.getThron().thronArray[i].x += this.speed;
				 }
				 //滚石、滚木。尖刺球的移动
				 for(let i=0;i<BallManager.getBall().ballArray.length;i++)
				 {
					 BallManager.getBall().ballArray[i].x += this.speed;
				 }
				 //云
				 for(let i=0;i<CloudManager.getCloud().cloudArray.length;i++)
				 {
					 CloudManager.getCloud().cloudArray[i].x += this.speed;
				 }
				 //木板
				 for(let i=0;i<BoardManager.getBoard().boardArray.length;i++)
				 {	
					 BoardManager.getBoard().boardArray[i].x += this.speed;
				 }
				 //箭
				 for(let i=0;i<ArrowManager.getArrow().arrowArray.length;i++)
				 {
					 ArrowManager.getArrow().arrowArray[i].x += this.speed;
				 }
				 //钻石
				 for(let i=0;i<DiamondManager.getdiamond().diamondArray.length;i++)
				 {
					 DiamondManager.getdiamond().diamondArray[i].x += this.speed;
				 }
				 //守护者子弹
				 for(let i=0;i<BulletManager.getBullet().bulletArray.length;i++)
				 {
					 BulletManager.getBullet().bulletArray[i].x += this.speed;
				 }
				 //反弹垫
				 for(let i=0;i<ReboundPadManager.getPad().padArray.length;i++)
				 {
					 ReboundPadManager.getPad().padArray[i].x += this.speed;
				 }
				  //道具
				 for(let i=0;i<PropManager.getProp().propArray.length;i++)
				 {
					 PropManager.getProp().propArray[i].x += this.speed;
				 }
				 //冰
				 for(let i=0;i<IceManager.getIce().iceArray.length;i++)
				 {
					 IceManager.getIce().iceArray[i].x += this.speed;
				 }
				 //激光
				 for(let i=0;i<LaserManager.getLaser().laserArray.length;i++)
				 {
					 LaserManager.getLaser().laserArray[i].x += this.speed;
				 }
				 //激光发射器
				  for(let i=0;i<LaserEmitterManager.getLaserEmitter().laserEmitterArray.length;i++)
				 {
					 LaserEmitterManager.getLaserEmitter().laserEmitterArray[i].x += this.speed;
				 }
			 }
			if(BgManager.getBg().bgArray[0].x >= 0)
			{
				this.speed = 0;
			}
		 }
	}
}