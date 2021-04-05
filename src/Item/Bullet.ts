/**
 * 守护者子弹
 */
class Bullet extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**守护者子弹 */
	public bullet:egret.Bitmap = null;
	/**守护者子弹序列帧 */
	public bulletIndex:number = 0;
	/**守护者子弹初始化 */
	public bulletInit()
	{
		this.bullet = new egret.Bitmap();
		this.bullet.texture = RES.getRes("bullet" + this.bulletIndex + "_png");
		this.bullet.anchorOffsetX = this.bullet.width * 0.5;
		this.bullet.anchorOffsetY = this.bullet.height * 0.5;
		this.addChild(this.bullet);
		this.bulletVector = PlayerManager.getPlayer().player.vectorX ;
		
	}
	/**序列帧切换时间 */
	private frameTime:number = 0;
	/**子弹移动方向 */
	public bulletVector:number = 0;
	/**守护者子弹速度 */
	private bulletSpeed:number = 0;
	/**
	 * 守护者子弹序列帧更新
	 * 守护者子弹的移动
	 * 守护者子弹与骷髅的碰撞检测
	 */
	public update()
	{
		if(TouchKeyManager.getTouchKey().touchKey.stop.selected)
		{
			return;
		}

		this.frameTime += 1;
		if(this.frameTime % 10 == 0)
		{
			this.bulletIndex += 1;
			if(this.bulletIndex >= 4)
			{
				this.bulletIndex = 1;
			}
			this.bullet.texture = RES.getRes("bullet" + this.bulletIndex + "_png");
		}
		
		//守护者子弹的移动
		this.bulletSpeed = KeyboardControl.getKey().speedX + 8;
		this.x += this.bulletVector * this.bulletSpeed;

		//守护者子弹与骷髅的碰撞检测
		if(Math.abs(PlayerManager.getPlayer().player.x - this.x) <= 640)
		{
			for(let j=0;j<BoneManager.getBone().boneArray.length;j++)
			{
				if(Math.abs(this.x - BoneManager.getBone().boneArray[j].x ) < (this.bullet.width + BoneManager.getBone().boneArray[j].bone.width) * 0.5
				&& Math.abs(this.y - BoneManager.getBone().boneArray[j].y) < (this.bullet.height + BoneManager.getBone().boneArray[j].bone.height) * 0.5)
				{
					BoneManager.getBone().boneArray[j].boneBlood -= 1;
					if(BoneManager.getBone().boneArray[j].boneBlood <= 0)
					{
						//删除当前与子弹碰撞骷髅
						SceneManager.getInstance().currentScene.removeChild(BoneManager.getBone().boneArray[j]);
						BoneManager.getBone().boneArray.splice(j,1);
						j--;
					}
					//删除当前与骷髅碰撞子弹
					if(this.parent != null)
					{
						if(this.parent.contains(this))
						{
							this.parent.removeChild(this);
						}
					}
				}
			}
		}

		//守护者子弹与墙的碰撞
		for(let i=0;i<LandManager.getLand().landArray.length;i++)
		{
			if((PlayerManager.getPlayer().player.vectorX == 1 && this.x > PlayerManager.getPlayer().player.x + PlayerManager.getPlayer().player.player.width *0.5)
			|| (PlayerManager.getPlayer().player.vectorX == -1 &&this.x < PlayerManager.getPlayer().player.x - PlayerManager.getPlayer().player.player.width *0.5))
			{

				if(Math.abs(this.x - LandManager.getLand().landArray[i].x) < (this.bullet.width + LandManager.getLand().landArray[i].land.width) * 0.5
				&& Math.abs(this.y - LandManager.getLand().landArray[i].y) < (this.bullet.height + LandManager.getLand().landArray[i].land.height) * 0.5)
				{
					//删除当前与墙碰撞子弹
					if(this.parent != null)
					{
						//确定是否是自己本身
						if(this.parent.contains(this))
						{
							this.parent.removeChild(this);
						}
					}
				}
			}
		}	
	}
}