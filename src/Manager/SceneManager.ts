/**
 * 界面管理
 */
class SceneManager {
	private constructor() 
	{
	}
	//单例
	private static instance:SceneManager = null;
	/**界面管理单例 */
	public static getInstance():SceneManager
	{
		if(this.instance == null)
		{
			this.instance = new SceneManager();
		}
		return this.instance;
	}

	/**当前可用显示对象 */
	public rootScene:eui.UILayer;
	/**设置当前可用现实对象 */
	public setRootScene(root:eui.UILayer)
	{
		this.rootScene = root;
	}

	/**当前显示对象 */
	public currentScene:BaseScene = null;
	/**添加显示对象 */
	public addScene(scene:BaseScene)
	{
		if(this.currentScene != null)
		{
			//删除原来的显示对象
			this.rootScene.removeChild(this.currentScene);
			//将原来的显示对象置空
			this.currentScene = null;
		}
		//添加到舞台
		if(this.rootScene != null)
		{
			this.currentScene = scene;
			this.rootScene.addChild(scene);
		}
	}
	public update()
	{
		if(this.currentScene != null)
		{
			this.currentScene.update();
		}
	}
}