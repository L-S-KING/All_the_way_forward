class ExplainScene extends BaseScene
{
	public constructor() 
	{
		super();
		this.init();
	}
	/**返回上一级按钮 */
	private back:eui.Button;
	public init()
	{
		this.skinName = "exp";

		this.back.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.backBegin, this);
	}

	public backBegin()
	{
		SceneManager.getInstance().addScene(new MainMenu());
	}
}