class MainMenu extends BaseScene
{
	public constructor() 
	{
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
	}
	/**开始游戏按钮 */
	private startBtn:eui.Button;
	/**游戏说明按钮 */
	private expBtn:eui.Button;
	/**游戏设置按钮 */
	private setBtn:eui.Button;
	/**玩家人物 */
	private player:egret.Bitmap = null;
	/**玩家序列帧 */
	private playerIndex:number = 1;
	/**守护者 */
	private man:egret.Bitmap = null;
	/**守护者序列帧 */
	private manIndex:number = 1;
	/**音乐 */
	private set:eui.ToggleButton;
	
	public init()
	{
		this.skinName = "Menu";
		//给按钮添加触摸监听
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startBegin, this);
		this.expBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.expBegin, this);

		//玩家图片初始化
		this.player = new egret.Bitmap();
		this.player.texture = RES.getRes("player" + this.playerIndex + "_png");
		this.player.anchorOffsetX = this.player.width * 0.5;
		this.player.anchorOffsetY = this.player.height * 0.5;
		this.player.x = 640;
		this.player.y = 300;
		SceneManager.getInstance().currentScene.addChild(this.player);

		//守护者图片初始化
		this.man = new egret.Bitmap();
		this.man.texture = RES.getRes("man" + this.manIndex + "_png");
		this.man.anchorOffsetX = this.man.width * 0.5;
		this.man.anchorOffsetY = this.man.height * 0.5;
		this.man.x = 1000;
		this.man.y = 490;
		SceneManager.getInstance().currentScene.addChild(this.man);

		this.set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setBegin, this);

	}
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

	/**序列帧切换时间 */
	private frameTime:number = 0;

	public update()
	{
		this.frameTime += 1;
		if(this.frameTime %10 == 0)
		{
			//玩家图片序列帧切换
			this.playerIndex += 1;
			if(this.playerIndex > 2)
			{
				this.playerIndex = 1;
			}
			this.player.texture = RES.getRes("player" + this.playerIndex + "_png");
			//守护者图片序列帧切换
			this.manIndex += 1;
			if(this.manIndex >= 6)
			{
				this.manIndex = 1;
			}
			this.man.texture = RES.getRes("man" + this.manIndex + "_png");
		}

		//检测音量变换
		if(SoundManager.instance.isBgMusic == false)
		{
			this.set.selected = true;
		}
		if(SoundManager.instance.isBgMusic == true)
		{
			this.set.selected = false;
		}
	}

	public startBegin()
	{
		SceneManager.getInstance().addScene(new StageSelectScene());
	}

	public expBegin()
	{
		SceneManager.getInstance().addScene(new ExplainScene());
	}
}