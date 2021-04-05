class TouchKeyManager 
{
	private constructor() 
	{
	}
	private static _touchKey:TouchKeyManager = null;
	public static getTouchKey():TouchKeyManager
	{
		if(this._touchKey == null)
		{
			this._touchKey = new TouchKeyManager;
		}
		return this._touchKey;
	}
	/**触摸按键 */
	public touchKey:TouchKey = null;
	public createTouchKey()
	{
		this.touchKey = new TouchKey();
		this.touchKey.init();
		SceneManager.getInstance().currentScene.addChild(this.touchKey);
	}
}