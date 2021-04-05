class TouchKey extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**左键 */
	private goLeft:eui.Button;
	/**右键 */
	private goRight:eui.Button;
	/**跳跃键 */
	private goUp:eui.Button;
	/**攻击键 */
	private fire:eui.Button;
	/**左键范围 */
	private leftGo:eui.Group;
	/**右键范围 */
	private rightGo:eui.Group;
	/**上键范围 */
	private upGo:eui.Group;
	/**攻击范围 */
	private fireGo:eui.Group;
	/**暂停 */
	public stop:eui.ToggleButton;
	/**音量 */
	public set:eui.ToggleButton;
	/**返回上一级按钮 */
	private back:eui.Button;
	public init()
	{
		if(KeyboardControl.getKey().isKey == true)
		{
			this.skinName = "key"
			this.addEventListener(egret.Event.ADDED_TO_STAGE,this.add,this)
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.remove,this);	
		}
		
	}
	//检测音量变换
	public update()
	{
		if(SoundManager.instance.isBgMusic == false)
		{
			this.set.selected = true;
		}
		if(SoundManager.instance.isBgMusic == true)
		{
			this.set.selected = false;
		}
	}

	private add ()
	{
		this.goLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goLeftBegin, this);
		this.goRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goRightBegin, this);
		this.goUp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goUpBegin, this);
		this.fire.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.fireBegin, this);
		this.stop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.stopBegin,this);
		this.set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setBegin,this);
		this.back.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.backBegin, this);

		this.leftGo.addEventListener(egret.TouchEvent.TOUCH_END, this.goLeftEnd, this);
		this.rightGo.addEventListener(egret.TouchEvent.TOUCH_END, this.goRightEnd, this);
		this.upGo.addEventListener(egret.TouchEvent.TOUCH_END, this.goUpEnd, this);
		this.fireGo.addEventListener(egret.TouchEvent.TOUCH_END, this.fireEnd, this);
	}
	public remove()
	{
		this.goLeft.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goLeftBegin, this);
		this.goRight.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goRightBegin, this);
		this.goUp.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.goUpBegin, this);
		this.fire.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.fireBegin, this);

		this.leftGo.removeEventListener(egret.TouchEvent.TOUCH_END, this.goLeftEnd, this);
		this.rightGo.removeEventListener(egret.TouchEvent.TOUCH_END, this.goRightEnd, this);
		this.upGo.removeEventListener(egret.TouchEvent.TOUCH_END, this.goUpEnd, this);
		this.fireGo.removeEventListener(egret.TouchEvent.TOUCH_END, this.fireEnd, this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.remove,this);
		
		
	}
	public stopBegin()
	{
		//selected是ToggleButton的属性，默认状态为false,点击下变为true，再次点击变回false
		if(this.stop.selected == false)
		{
			KeyboardControl.getKey().isKey = false;
			KeyboardControl.getKey().leftFlag = 0;
			KeyboardControl.getKey().rightFlag = 0;
			KeyboardControl.getKey().upFlag = 0; 
			KeyboardControl.getKey().jumpState = false;
			KeyboardControl.getKey().jumpTimes = 0;
		}
		if(this.stop.selected == true)
		{
			KeyboardControl.getKey().isKey = true;
		}
	}
	//静音
	public setBegin()
	{
		if(this.set.selected == false)
		{
			SoundManager.instance.startBgMusic("bg_mp3");
			SoundManager.instance.isBgMusic = true;
		}
		if(this.set.selected == true)
		{
			SoundManager.instance.stopBgMusic();
			SoundManager.instance.isBgMusic = false;
		}
	}
	public backBegin()
	{
		PlayerManager.getPlayer().isDeath = false;
		BgManager.getBg().bgArray = [];
		BoardManager.getBoard().boardArray = [];
		CloudManager.getCloud().cloudArray = [];
		DiamondManager.getdiamond().diamondArray = [];
		StarManager.getStar().starArray = [];
		BallManager.getBall().ballArray = [];
		IceManager.getIce().iceArray = [];
		LaserManager.getLaser().laserArray = [];
		LandManager.getLand().landArray = [];
		ThronManager.getThron().thronArray = [];
		BulletManager.getBullet().bulletArray = [];
		ReboundPadManager.getPad().padArray = [];
		PropManager.getProp().propArray = [];
		LaserManager.getLaser().laserArray = [];
		KeyboardControl.getKey().isKey = false;
		KeyboardControl.getKey().leftFlag = 0;
		KeyboardControl.getKey().rightFlag = 0;
		KeyboardControl.getKey().upFlag = 0; 
		KeyboardControl.getKey().jumpState = false;
		KeyboardControl.getKey().jumpTimes = 0;
		PlayerManager.getPlayer().player = null;
		this.stop.selected == true;
		SceneManager.getInstance().addScene(new StageSelectScene());
	}
	public goLeftBegin()
	{
		KeyboardControl.getKey().leftFlag = 1;
	}
	public goRightBegin()
	{
		KeyboardControl.getKey().rightFlag = 1;
	}
	public goUpBegin()
	{
		if(KeyboardControl.getKey().upFlag == 0 && KeyboardControl.getKey().jumpTimes > 0)
		{
			KeyboardControl.getKey().upFlag = 1;
			KeyboardControl.getKey().speedY = 14;
			SoundManager.instance.playEffect("jump_mp3");
		}
		KeyboardControl.getKey().jumpTimes -= 1;
	}
	public fireBegin()
	{
		KeyboardControl.getKey().xFlag = 1;
		KeyboardControl.getKey().isX = true;
	}

	public goLeftEnd()
	{
		KeyboardControl.getKey().leftFlag = 0;
		KeyboardControl.getKey().speedX = 0;
	}
	public goRightEnd()
	{
		KeyboardControl.getKey().rightFlag = 0;
		KeyboardControl.getKey().speedX = 0;
	}
	public goUpEnd()
	{
		KeyboardControl.getKey().upFlag = 0;
	}
	public fireEnd()
	{
		KeyboardControl.getKey().xFlag = 0;
		KeyboardControl.getKey().isX = false;
	}
}