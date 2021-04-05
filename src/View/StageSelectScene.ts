/**
 * 关卡选择
 */
class StageSelectScene extends BaseScene
{
	public constructor() 
	{
		super();
		this.init();
		this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
	}
	/**第一关 */
	private level1:egret.Bitmap = null;
	/**第二关 */
	private level2:egret.Bitmap = null;
	/**第三关 */
	private level3:egret.Bitmap = null;
	/**第四关 */
	private level4:egret.Bitmap = null;
	/**第五关 */
	private level5:egret.Bitmap = null;
	/**第六关 */
	private level6:egret.Bitmap = null;
	/**第七关 */
	private level7:egret.Bitmap = null;

	/**返回上一级按钮 */
	private back:eui.Button;
	/**音乐 */
	private set:eui.ToggleButton;

	public init()
	{
		
		this.skinName = "StageSelect";
		this.level1 = new egret.Bitmap();
		this.level1.texture = RES.getRes("level1_png");
		this.level1.anchorOffsetX = this.level1.width * 0.5;
		this.level1.anchorOffsetY = this.level1.height * 0.5
		this.level1.x = 150;
		this.level1.y = 410;
		this.level1.alpha = 1;
		this.addChild(this.level1);
		this.level1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level1Begin, this);

		

		this.level2 = new egret.Bitmap();
		this.level2.texture = RES.getRes("level2_png");
		this.level2.anchorOffsetX = this.level2.width * 0.5;
		this.level2.anchorOffsetY = this.level2.height * 0.5
		this.level2.x = 340;
		this.level2.y = 305;
		this.level2.alpha = 0.5;
		this.addChild(this.level2);
		this.level2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level2Begin, this);
		
		

		this.level3 = new egret.Bitmap();
		this.level3.texture = RES.getRes("level3_png");
		this.level3.anchorOffsetX = this.level3.width * 0.5;
		this.level3.anchorOffsetY = this.level3.height * 0.5
		this.level3.x = 530;
		this.level3.y = 325;
		this.level3.alpha = 0.5;
		this.addChild(this.level3);
		this.level3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level3Begin, this);
		
		

		this.level4 = new egret.Bitmap();
		this.level4.texture = RES.getRes("level4_png");
		this.level4.anchorOffsetX = this.level4.width * 0.5;
		this.level4.anchorOffsetY = this.level4.height * 0.5
		this.level4.x = 715;
		this.level4.y = 355;
		this.level4.alpha = 0.5;
		this.addChild(this.level4);
		this.level4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level4Begin, this);
		
		

		this.level5 = new egret.Bitmap();
		this.level5.texture = RES.getRes("level5_png");
		this.level5.anchorOffsetX = this.level5.width * 0.5;
		this.level5.anchorOffsetY = this.level5.height * 0.5
		this.level5.x = 815;
		this.level5.y = 515;
		this.level5.alpha = 0.5;
		this.addChild(this.level5);
		this.level5.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level5Begin, this);
		
		

		this.level6 = new egret.Bitmap();
		this.level6.texture = RES.getRes("level6_png");
		this.level6.anchorOffsetX = this.level6.width * 0.5;
		this.level6.anchorOffsetY = this.level6.height * 0.5
		this.level6.x = 1090;
		this.level6.y = 425;
		this.level6.alpha = 0.5;
		this.addChild(this.level6);
		this.level6.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level6Begin, this);
		
		

		this.level7 = new egret.Bitmap();
		this.level7.texture = RES.getRes("level7_png");
		this.level7.anchorOffsetX = this.level7.width * 0.5;
		this.level7.anchorOffsetY = this.level7.height * 0.5
		this.level7.x = 1075;
		this.level7.y = 215;
		this.level7.alpha = 0.5;
		this.addChild(this.level7);
		this.level7.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.level7Begin, this);

		
	
		if( egret.localStorage.getItem("level1"))
		{
			this.level2.alpha = 1;
		}
		if( egret.localStorage.getItem("level2"))
		{
			this.level3.alpha = 1;
		}
		if( egret.localStorage.getItem("level3"))
		{
			this.level4.alpha = 1;
		}
		if( egret.localStorage.getItem("level4"))
		{
			this.level5.alpha = 1;
		}
		if( egret.localStorage.getItem("level5"))
		{
			this.level6.alpha = 1;
		}
		if( egret.localStorage.getItem("level6"))
		{
			this.level7.alpha = 1;
		}

		this.back.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.backBegin, this);

		this.set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setBegin, this);
		
	}

	public backBegin()
	{
		SceneManager.getInstance().addScene(new MainMenu());
		this.back.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.backBegin, this);
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
	
	public level1Begin()
	{
		SceneManager.getInstance().addScene(new Level1());
	}
	public level2Begin()
	{
		SceneManager.getInstance().addScene(new Level2());
	}
	public level3Begin()
	{
		SceneManager.getInstance().addScene(new Level3());
	}
	public level4Begin()
	{
		SceneManager.getInstance().addScene(new Level4());
	}
	public level5Begin()
	{
		SceneManager.getInstance().addScene(new Level5());
	}
	public level6Begin()
	{
		SceneManager.getInstance().addScene(new Level6());
	}
	public level7Begin()
	{
		SceneManager.getInstance().addScene(new Level7());
	}

	public update()
	{
		if(this.level1.alpha == 1)
		{
			this.level1.touchEnabled = true;
		}
		if(this.level2.alpha == 1)
		{
			this.level2.touchEnabled = true;
		}
		if(this.level3.alpha == 1)
		{
			this.level3.touchEnabled = true;
		}
		if(this.level4.alpha == 1)
		{
			this.level4.touchEnabled = true;
		}
		if(this.level5.alpha == 1)
		{
			this.level5.touchEnabled = true;
		}
		if(this.level6.alpha == 1)
		{
			this.level6.touchEnabled = true;
		}
		if(this.level7.alpha == 1)
		{
			this.level7.touchEnabled = true;
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
}