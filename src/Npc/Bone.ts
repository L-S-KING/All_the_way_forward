/**
 * 骷髅
 */
class Bone extends BaseScene
{
	public constructor() 
	{
		super();
	}
	/**骷髅 */
	public bone:egret.Bitmap = null;
	/**骷髅种类 */
	private boneType:number = 0;
	/**骷髅序列帧 */
	public boneIndex:number = 1;
	/**箭 */
	private arrow:Arrow = null;
	/**骷髅血量 */
	public boneBlood:number = 0;
	/**骷髅初始化 */
	public init(type:number,vectorX)
	{
		this.boneType = type;
		this.bone = new egret.Bitmap();
		this.bone.texture = RES.getRes("npc" + this.boneType + + this.boneIndex + "_png");
		this.bone.anchorOffsetX = this.bone.width * 0.5;
		this.bone.anchorOffsetY = this.bone.height * 0.5;
		this.addChild(this.bone);
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
		this.boneBlood = 6;
		this.boneVectorX = vectorX;
	}
	/**序列帧切换时间 */
	private frameTime:number = 0;
	/**骷髅的移动速度 */
	private boneSpeed:number = 1;
	/**骷髅的移动方向 */
	public boneVectorX:number = 0;
	/**
	 * 骷髅的移动
	 * 骷髅与玩家的碰撞检测
	 *  */
	public update()
	{
		if(TouchKeyManager.getTouchKey().touchKey.stop.selected)
		{
			return;
		}
		
		this.bone.scaleX = this.boneVectorX;
		this.x -= this.boneSpeed * this.boneVectorX;
		for(let i=0;i<LandManager.getLand().landArray.length;i++)
		{
			//骷髅转头
			if(Math.abs((this.y + this.bone.height * 0.5) - (LandManager.getLand().landArray[i].y - LandManager.getLand().landArray[i].land.height * 0.5)) < (20 + 20) * 0.5
			&& Math.abs(this.x - LandManager.getLand().landArray[i].x) < (this.bone.width + LandManager.getLand().landArray[i].land.width) * 0.5)
			{
				if(this.x < LandManager.getLand().landArray[i].x - LandManager.getLand().landArray[i].land.width * 0.5 + this.bone.width * 0.5 )
				{
					this.boneVectorX = -1;
				}
				if(this.x > LandManager.getLand().landArray[i].x + LandManager.getLand().landArray[i].land.width * 0.5 - this.bone.width * 0.5)
				{
					this.boneVectorX = 1;
				}
			}
		}
		this.frameTime += 1;
		if(this.frameTime % 8 == 0)
		{	
			//当玩家与骷髅相距小于320时，骷髅攻击玩家
			if(Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.bone.height + PlayerManager.getPlayer().player.player.height) * 0.5 
			&& Math.abs(this.x - PlayerManager.getPlayer().player.x) <= 320)
			{
				if(this.x - PlayerManager.getPlayer().player.x <= 320 && this.x - PlayerManager.getPlayer().player.x > 0)
				{
					this.boneVectorX = 1;
				}
				if(this.x - PlayerManager.getPlayer().player.x >= -320 && this.x - PlayerManager.getPlayer().player.x < 0)
				{
					this.boneVectorX = -1;
				}
				this.bone.scaleX = this.boneVectorX;
				this.boneSpeed = 0;
				this.boneIndex += 1;
				if(this.boneIndex >= 11)
				{
					this.boneIndex = 4;
				}
				//第7帧创建箭
				if(this.boneIndex == 7)
				{
					ArrowManager.getArrow().createArrow(this.x,this.y,this.boneVectorX);
				}
			}
			else 
			{
				this.boneSpeed = 1;
				this.boneIndex += 1;
				if(this.boneIndex >= 3)
				{
					this.boneIndex = 1;
				}
			}
		}
		this.bone.texture = RES.getRes("npc" + this.boneType + + this.boneIndex + "_png");

		//骷髅与玩家的碰撞检测
		if(Math.abs(this.x - PlayerManager.getPlayer().player.x) < (this.bone.width + PlayerManager.getPlayer().player.player.width -10) * 0.5
		&& Math.abs(this.y - PlayerManager.getPlayer().player.y) < (this.bone.height + PlayerManager.getPlayer().player.height) * 0.5)
		{
			//玩家死亡
			PlayerManager.getPlayer().isDeath = true;
		}
	}
}