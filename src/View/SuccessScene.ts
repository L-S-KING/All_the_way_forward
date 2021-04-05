class SuccessScene extends BaseScene
{
	public constructor() 
	{
		super();
		this.init();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**重新开始按钮 */
	private again:eui.Button;
	/**下一关按钮 */
	private next:eui.Button;
	/**返回菜单按钮 */
	private menu:eui.Button;
	/** */
	private starNum:eui.Label;

	public init()
	{
		var value:string = "" + BgManager.getBg().levelNum;
		var key:string = "level" + BgManager.getBg().levelNum;

		egret.localStorage.setItem(key,value);
		this.remove();
		this.skinName = "success";
		SoundManager.instance.stopBgMusic();
		SoundManager.instance.startBgMusic("success_mp3");
		//给按钮添加触摸监听
		this.again.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.againBegin, this);
		this.next.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.nextLevelBegin, this);
		this.menu.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.menuBegin, this);
		
		this.starNum.text = "" + StarManager.getStar().starNum;

	}

	public againBegin()
	{
		if(SoundManager.instance.isBgMusic == true)
		{
			SoundManager.instance.stopBgMusic();
			SoundManager.instance.startBgMusic("bg_mp3");
		}
		if(SoundManager.instance.isBgMusic == false)
		{
			SoundManager.instance.stopBgMusic();
		}
		this.remove();
		if(BgManager.getBg().levelNum == 1)
		{
			SceneManager.getInstance().addScene(new Level1());
		}
		else if(BgManager.getBg().levelNum == 2)
		{
			SceneManager.getInstance().addScene(new Level2());
		}
		else if(BgManager.getBg().levelNum == 3)
		{
			SceneManager.getInstance().addScene(new Level3());
		}
		else if(BgManager.getBg().levelNum == 4)
		{
			SceneManager.getInstance().addScene(new Level4());
		}
		else if(BgManager.getBg().levelNum == 5)
		{
			SceneManager.getInstance().addScene(new Level5());
		}
		else if(BgManager.getBg().levelNum == 6)
		{
			SceneManager.getInstance().addScene(new Level6());
		}
		else if(BgManager.getBg().levelNum == 7)
		{
			SceneManager.getInstance().addScene(new Level7());
		}
		StarManager.getStar().starNum = 0;
		this.again.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.againBegin, this);
		if(this.parent != null)
		{
			this.parent.removeChild(this);
		}
	}

	public nextLevelBegin()
	{
		if(SoundManager.instance.isBgMusic == true)
		{
			SoundManager.instance.stopBgMusic();
			SoundManager.instance.startBgMusic("bg_mp3");
		}
		if(SoundManager.instance.isBgMusic == false)
		{
			SoundManager.instance.stopBgMusic();
		}
		this.remove();
		if(BgManager.getBg().levelNum == 1)
		{
			SceneManager.getInstance().addScene(new Level2());
		}
		else if(BgManager.getBg().levelNum == 2)
		{
			SceneManager.getInstance().addScene(new Level3());
		}
		else if(BgManager.getBg().levelNum == 3)
		{
			SceneManager.getInstance().addScene(new Level4());
		}
		else if(BgManager.getBg().levelNum == 4)
		{
			SceneManager.getInstance().addScene(new Level5());
		}
		else if(BgManager.getBg().levelNum == 5)
		{
			SceneManager.getInstance().addScene(new Level6());
		}
		else if(BgManager.getBg().levelNum == 6)
		{
			SceneManager.getInstance().addScene(new Level7());
		}
		else if(BgManager.getBg().levelNum == 7)
		{
			SceneManager.getInstance().addScene(new Level1());
		}
		StarManager.getStar().starNum = 0;
		this.next.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.nextLevelBegin, this);
		if(this.parent != null)
		{
			this.parent.removeChild(this);
		}
		
	}

	public menuBegin()
	{
		if(SoundManager.instance.isBgMusic == true)
		{
			SoundManager.instance.stopBgMusic();
			SoundManager.instance.startBgMusic("bg_mp3");
		}
		if(SoundManager.instance.isBgMusic == false)
		{
			SoundManager.instance.stopBgMusic();
		}
		this.remove();
		StarManager.getStar().starNum = 0;
		SceneManager.getInstance().addScene(new StageSelectScene());
		this.menu.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.menuBegin, this);
		if(this.parent != null)
		{
			this.parent.removeChild(this);
		}
	}

	public update()
	{
		if(BgManager.getBg().levelNum == 2)
		{
			PassManager.getPass().passNum = 2;
		}
		else if(BgManager.getBg().levelNum == 3)
		{
			PassManager.getPass().passNum = 3;
		}
		else if(BgManager.getBg().levelNum == 4)
		{
			PassManager.getPass().passNum = 4;
		}
		else if(BgManager.getBg().levelNum == 5)
		{
			PassManager.getPass().passNum = 5;
		}
		else if(BgManager.getBg().levelNum == 6)
		{
			PassManager.getPass().passNum = 6;
		}
		else if(BgManager.getBg().levelNum == 7)
		{
			PassManager.getPass().passNum = 7;
		}
	}

	public remove()
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
		KeyboardControl.getKey().speedY = 0;
	}
}